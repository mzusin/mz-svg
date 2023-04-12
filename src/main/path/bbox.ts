import { parsePath } from './index';
import { maximizeAbsolutePath, pathDataToAbsolute } from './convert';
import { EPathDataCommand } from './interfaces';
import { setDecimalPlaces } from 'mz-math';

export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
}

/**
 * Determine the coordinates of the smallest rectangle in which the path fits.
 */
export const getPathBBox = (d?: string, decimalPlaces = 2) : IBBox|null => {
    if(!d || d.trim() === '') return null;

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return null;

    const abs = pathDataToAbsolute(parsed);
    if(!abs || abs.commands.length <= 0) return null;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    const max = maximizeAbsolutePath(abs);
    for(const item of max.commands) {

        switch (item.command){
            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.LineToAbs:{
                minX = Math.min(minX, item.params[0]);
                minY = Math.min(minY, item.params[1]);

                maxX = Math.max(maxX, item.params[0]);
                maxY = Math.max(maxY, item.params[1]);
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                //parseCommand(6, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.QuadraticCurveToAbs:{
                //parseCommand(4, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.ArcAbs:{
                //parseCommand(7, token.tokenType, isRelative);
                break;
            }
        }
    }

    return {
        x: setDecimalPlaces(minX, decimalPlaces),
        y: setDecimalPlaces(minY, decimalPlaces),
        w: setDecimalPlaces(Math.abs(maxX - minX), decimalPlaces),
        h: setDecimalPlaces(Math.abs(maxY - minY), decimalPlaces),
    };
};