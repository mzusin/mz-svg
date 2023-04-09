import { EPathDataCommand, IPathData } from './interfaces';
import { setDecimalPlaces } from 'mz-math';

export const pathDataMinify = (pathData: IPathData) : string => {

    let d = '';
    let lastCommand: EPathDataCommand|null = null;

    for(const item of pathData.commands){

        const canSkipCommand =
            (lastCommand === item.command) ||
            (lastCommand === EPathDataCommand.MoveToAbs && item.command === EPathDataCommand.LineToAbs) ||
            (lastCommand === EPathDataCommand.MoveToRel && item.command === EPathDataCommand.LineToRel);

        if(!canSkipCommand){
            d += item.command;
        }
        else{
            d += ' ';
        }

        if(item.params.length > 0){
            d += item.params.map(param => Number.isInteger(param) ? param : setDecimalPlaces(param, 2)).join(' ');
        }
        else{
            d += ' ';
        }

        lastCommand = item.command;
    }

    return d;
};