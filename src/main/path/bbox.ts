import { parsePath } from './index';
import { maximizeAbsolutePath, pathDataToAbsolute } from './convert';
import { EPathDataCommand } from './interfaces';
import { setDecimalPlaces, v2CubicBezierBBox, v2QuadraticBezierBBox, Vector2 } from 'mz-math';

export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
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

    // current (x, y) pair
    let x = max.commands[0].params[0];
    let y = max.commands[0].params[1];

    // the latest 'M' coordinates
    let mx = x;
    let my = y;

    for(const item of max.commands) {

        switch (item.command){
            case EPathDataCommand.MoveToAbs: {
                minX = Math.min(minX, item.params[0]);
                minY = Math.min(minY, item.params[1]);

                maxX = Math.max(maxX, item.params[0]);
                maxY = Math.max(maxY, item.params[1]);

                mx = item.params[0];
                my = item.params[1];
                break;
            }

            case EPathDataCommand.ClosePathAbs:{
                x = mx;
                y = my;
                break;
            }

            case EPathDataCommand.LineToAbs:{
                minX = Math.min(minX, item.params[0]);
                minY = Math.min(minY, item.params[1]);

                maxX = Math.max(maxX, item.params[0]);
                maxY = Math.max(maxY, item.params[1]);

                x = item.params[0];
                y = item.params[1];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                const startControlPoint: Vector2 = [x, y];
                const centerControlPoint1: Vector2 = [item.params[0], item.params[1]];
                const centerControlPoint2: Vector2 = [item.params[2], item.params[3]];
                const endControlPoint: Vector2 = [item.params[4], item.params[5]];
                const bbox = v2CubicBezierBBox(startControlPoint, centerControlPoint1, centerControlPoint2, endControlPoint);

                minX = bbox.x;
                minY = bbox.y;

                maxX = bbox.x2;
                maxY = bbox.y2;

                x = item.params[4];
                y = item.params[5];
                break;
            }

            case EPathDataCommand.QuadraticCurveToAbs:{
                const startControlPoint: Vector2 = [x, y];
                const centerControlPoint: Vector2 = [item.params[0], item.params[1]];
                const endControlPoint: Vector2 = [item.params[2], item.params[3]];
                const bbox = v2QuadraticBezierBBox(startControlPoint, centerControlPoint, endControlPoint);

                minX = bbox.x;
                minY = bbox.y;

                maxX = bbox.x2;
                maxY = bbox.y2;

                x = item.params[2];
                y = item.params[3];
                break;
            }

            case EPathDataCommand.ArcAbs:{
                //parseCommand(7, token.tokenType, isRelative);

                x = item.params[5];
                y = item.params[6];
                break;
            }
        }
    }

    return {
        x: setDecimalPlaces(minX, decimalPlaces),
        y: setDecimalPlaces(minY, decimalPlaces),
        w: setDecimalPlaces(Math.abs(maxX - minX), decimalPlaces),
        h: setDecimalPlaces(Math.abs(maxY - minY), decimalPlaces),
        x2: setDecimalPlaces(maxX, decimalPlaces),
        y2: setDecimalPlaces(maxY, decimalPlaces),
    };
};