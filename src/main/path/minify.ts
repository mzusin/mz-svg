import { EPathDataCommand, IPathData } from './interfaces';
import { setDecimalPlaces } from 'mz-math';

const numberToString = (num: number) : string => {
    if(Number.isInteger(num)) return num.toString();

    const _num = setDecimalPlaces(num, 2).toString();
    const parts = _num.split('.');
    const intPart = parts[0];
    const decimalPart = parts[1];

    if(intPart === '0') return `.${ decimalPart }`;
    if(intPart === '-0') return `-.${ decimalPart }`;

    return _num;
};

export const pathDataMinify = (pathData: IPathData) : string => {

    let d = '';
    let lastCommand: EPathDataCommand|null = null;

    for(const item of pathData.commands){

        const canSkipCommand =
            (lastCommand === item.command) ||
            (lastCommand === EPathDataCommand.MoveToAbs && item.command === EPathDataCommand.LineToAbs) ||
            (lastCommand === EPathDataCommand.MoveToRel && item.command === EPathDataCommand.LineToRel);

        d += canSkipCommand ? ' ' : item.command;
        d += item.params.length <= 0 ? ' ' : item.params.map(param => numberToString(param)).join(' ');

        lastCommand = item.command;
    }

    return d.trim();
};