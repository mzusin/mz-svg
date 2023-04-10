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

        // handle cases like 'L80 0' ----> 'H80', 'L0 80' ----> 'V80'
        if(item.command === EPathDataCommand.LineToAbs){
            if(item.params[0] === 0){
                d += `V${ numberToString(item.params[1], decimalPlaces) }`;
                lastCommand = EPathDataCommand.LineToVerticalAbs;
                continue;
            }

            if(item.params[1] === 0){
                d += `H${ numberToString(item.params[0], decimalPlaces) }`;
                lastCommand = EPathDataCommand.LineToHorizontalAbs;
                continue;
            }
        }

        // handle cases like 'l80 0' ----> 'h80' & 'l0 80' ----> 'v80'
        if(item.command === EPathDataCommand.LineToRel){
            if(item.params[0] === 0){
                d += `v${ numberToString(item.params[1], decimalPlaces) }`;
                lastCommand = EPathDataCommand.LineToVerticalRel;
                continue;
            }

            if(item.params[1] === 0){
                d += `h${ numberToString(item.params[0], decimalPlaces) }`;
                lastCommand = EPathDataCommand.LineToHorizontalRel;
                continue;
            }
        }

        // handle cases like 'c0 0 10 0 10 10' ---> 's10 0 10 10'
        if(item.command === EPathDataCommand.CubicCurveToRel){
            if(item.params[0] === 0 && item.params[1] === 0){

                const params = [
                    item.params[2],
                    item.params[3],
                    item.params[4],
                    item.params[5],
                ].map(param => numberToString(param, decimalPlaces)).join(' ');

                d += `s${ params }`;
                lastCommand = EPathDataCommand.CubicCurveToRel;
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