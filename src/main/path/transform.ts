import { parsePath } from './index';
import { maximizeAbsolutePath, pathDataToAbsolute, pathDataToRelative, pathDataToString } from './convert';
import { Vector3, m2RotateAroundPointH, radiansToDegrees } from 'mz-math';
import { EPathDataCommand } from './interfaces';

export const translatePath = (d: string, x: number, y: number, decimalPlaces = 2) => {
    if(!d) return d;

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return d;

    const relative = pathDataToRelative(parsed);
    if(!relative || relative.commands.length <= 0) return d;

    const mCommand = relative.commands[0];
    mCommand.params[0] = x;
    mCommand.params[1] = y;

    return pathDataToString(relative, true, decimalPlaces);
};

const rotateDot = (x: number, y: number, cx: number, cy: number, angleRad: number, decimalPlaces = 2) => {
    return m2RotateAroundPointH(
        angleRad,
        [cx, cy, 1],
        [x, y, 1],
        true,
        decimalPlaces
    );
};

export const rotatePath = (d: string, cx: number, cy: number, angleDegrees: number, decimalPlaces = 2) => {
    if(!d) return d;

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return d;

    const abs = pathDataToAbsolute(parsed);
    if(!abs || abs.commands.length <= 0) return d;

    const angleRad = radiansToDegrees(angleDegrees, decimalPlaces);

    const max = maximizeAbsolutePath(abs);
    for(const item of max.commands){

        switch(item.command){

            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.LineToAbs:{
                // 2 params (x, y)

                // get the new position after rotation
                const pos: Vector3 = rotateDot(item.params[0], item.params[1], cx, cy, angleRad, decimalPlaces);
                item.params[0] = pos[0];
                item.params[1] = pos[1];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                // 6 parameters
                const pos1: Vector3 = rotateDot(item.params[0], item.params[1], cx, cy, angleRad, decimalPlaces);
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = rotateDot(item.params[2], item.params[3], cx, cy, angleRad, decimalPlaces);
                item.params[2] = pos2[0];
                item.params[3] = pos2[1];

                const pos3: Vector3 = rotateDot(item.params[4], item.params[5], cx, cy, angleRad, decimalPlaces);
                item.params[4] = pos3[0];
                item.params[5] = pos3[1];
                break;
            }

            case EPathDataCommand.QuadraticCurveToAbs:{
                // 4 parameters
                const pos1: Vector3 = rotateDot(item.params[0], item.params[1], cx, cy, angleRad, decimalPlaces);
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = rotateDot(item.params[2], item.params[3], cx, cy, angleRad, decimalPlaces);
                item.params[2] = pos2[0];
                item.params[3] = pos2[1];
                break;
            }

            case EPathDataCommand.ArcAbs:{
                // rx ry x-axis-rotation large-arc-flag sweep-flag x y
                const pos1: Vector3 = rotateDot(item.params[0], item.params[1], cx, cy, angleRad, decimalPlaces);
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = rotateDot(item.params[5], item.params[6], cx, cy, angleRad, decimalPlaces);
                item.params[5] = pos2[0];
                item.params[6] = pos2[1];
                break;
            }
        }
    }

    const rel = pathDataToRelative(abs);
    return pathDataToString(rel, true, decimalPlaces);
};