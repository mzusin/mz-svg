import { parsePath } from './index';
import { maximizeAbsolutePath, pathDataToAbsolute, pathDataToRelative, pathDataToString } from './convert';
import { Vector3, m2RotateAroundPointH } from 'mz-math';
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

export const rotatePath = (d: string, cx: number, cy: number, angleRad: number, decimalPlaces = 2) => {
    if(!d) return d;

    //d = 'M 400 300 L 450 300 L 450 350 L 400 350 Z';

    // M 425 289.5 L 460.5 325 L 425 360.5 L 389.5 325 Z
    // M425 289.5 460.5 325 425 360.5 389.5 325Z

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return d;

    const abs = pathDataToAbsolute(parsed);
    if(!abs || abs.commands.length <= 0) return d;

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

    return pathDataToString(abs, true, decimalPlaces);
};