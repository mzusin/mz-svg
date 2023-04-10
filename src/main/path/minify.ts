import { EPathDataCommand, IPathData } from './interfaces';
import { setDecimalPlaces } from 'mz-math';

const numberToString = (num: number, decimalPlaces = 2) : string => {

    if(Number.isInteger(num)) return num.toString();

    const _num = setDecimalPlaces(num, decimalPlaces).toString();
    const parts = _num.split('.');
    const intPart = parts[0];
    const decimalPart = parts[1];

    if(intPart === '0') return `.${ decimalPart }`;
    if(intPart === '-0') return `-.${ decimalPart }`;

    return _num;
};

export const pathDataMinify = (pathData: IPathData, decimalPlaces = 2) : string => {

    let d = '';
    let lastCommand: EPathDataCommand|null = null;

    for(const item of pathData.commands){

        // handle cases like 'L80 0', 'L0 80'
        if(item.command === EPathDataCommand.LineToAbs){
            if(item.params[0] === 0){
                d += `V${ item.params[1] }`;
                lastCommand = EPathDataCommand.LineToVerticalAbs;
                continue;
            }

            if(item.params[1] === 0){
                d += `H${ item.params[0] }`;
                lastCommand = EPathDataCommand.LineToHorizontalAbs;
                continue;
            }
        }

        // handle cases like 'l80 0' & 'l0 80'
        if(item.command === EPathDataCommand.LineToRel){
            if(item.params[0] === 0){
                d += `v${ item.params[1] }`;
                lastCommand = EPathDataCommand.LineToVerticalRel;
                continue;
            }

            if(item.params[1] === 0){
                d += `h${ item.params[0] }`;
                lastCommand = EPathDataCommand.LineToHorizontalRel;
                continue;
            }
        }

        const canSkipCommand =
            (lastCommand === item.command) ||
            (lastCommand === EPathDataCommand.MoveToAbs && item.command === EPathDataCommand.LineToAbs) ||
            (lastCommand === EPathDataCommand.MoveToRel && item.command === EPathDataCommand.LineToRel);

        d += canSkipCommand ? ' ' : item.command;

        d += item.params.length <= 0 ? ' ' : item.params.map(param => numberToString(param, decimalPlaces)).join(' ');

        lastCommand = item.command;
    }

    return d.trim();
};