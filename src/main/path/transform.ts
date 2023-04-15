import { parsePath } from './index';
import { maximizeAbsolutePath, pathDataToAbsolute, pathDataToRelative, pathDataToString } from './convert';
import { Vector3, m2RotateAroundPointH, degreesToRadians, Vector2, m2ScaleAtPointH } from 'mz-math';
import { EPathDataCommand } from './interfaces';
import { getPathBBox } from './bbox';

// ---------------------- TRANSLATE ----------------------

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

// ---------------------- ROTATE -------------------------

const rotateDot = (point: Vector2, transformOrigin: Vector2, angleRad: number, decimalPlaces = 2) => {
    return m2RotateAroundPointH(
        angleRad,
        [transformOrigin[0], transformOrigin[1], 1],
        [point[0], point[1], 1],
        true,
        decimalPlaces
    );
};

export const rotatePathAroundPoint = (d: string, transformOrigin: Vector2, angleDegrees: number, decimalPlaces = 2) => {
    if(!d) return d;

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return d;

    const abs = pathDataToAbsolute(parsed);
    if(!abs || abs.commands.length <= 0) return d;

    const angleRad = degreesToRadians(angleDegrees, decimalPlaces);

    const max = maximizeAbsolutePath(abs);
    for(const item of max.commands){

        switch(item.command){

            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.LineToAbs:{
                // 2 params (x, y)

                // get the new position after rotation
                const pos: Vector3 = rotateDot([item.params[0], item.params[1]], transformOrigin, angleRad, decimalPlaces);
                item.params[0] = pos[0];
                item.params[1] = pos[1];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                // 6 parameters
                const pos1: Vector3 = rotateDot([item.params[0], item.params[1]], transformOrigin, angleRad, decimalPlaces);
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = rotateDot([item.params[2], item.params[3]], transformOrigin, angleRad, decimalPlaces);
                item.params[2] = pos2[0];
                item.params[3] = pos2[1];

                const pos3: Vector3 = rotateDot([item.params[4], item.params[5]], transformOrigin, angleRad, decimalPlaces);
                item.params[4] = pos3[0];
                item.params[5] = pos3[1];
                break;
            }

            case EPathDataCommand.QuadraticCurveToAbs:{
                // 4 parameters
                const pos1: Vector3 = rotateDot([item.params[0], item.params[1]], transformOrigin, angleRad, decimalPlaces);
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = rotateDot([item.params[2], item.params[3]], transformOrigin, angleRad, decimalPlaces);
                item.params[2] = pos2[0];
                item.params[3] = pos2[1];
                break;
            }

            case EPathDataCommand.ArcAbs:{
                // rx ry x-axis-rotation large-arc-flag sweep-flag x y
                /*const pos1: Vector3 = rotateDot(item.params[0], item.params[1], cx, cy, angleRad, decimalPlaces);
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];*/

                const pos2: Vector3 = rotateDot([item.params[5], item.params[6]], transformOrigin, angleRad, decimalPlaces);
                item.params[5] = pos2[0];
                item.params[6] = pos2[1];
                break;
            }
        }
    }

    const rel = pathDataToRelative(abs);
    return pathDataToString(rel, true, decimalPlaces);
};

export const rotatePath = (d: string, angleDegrees: number, decimalPlaces = 2) => {

    const bbox = getPathBBox(d);

    const x = bbox?.x ?? 0;
    const y = bbox?.y ?? 0;
    const w = bbox?.w ?? 0;
    const h = bbox?.h ?? 0;

    const cx = x + w / 2;
    const cy = y + h / 2;

    return rotatePathAroundPoint(d, [cx, cy], angleDegrees, decimalPlaces);
};

// ---------------------- SCALE --------------------------

const scaleDot = (point: Vector2, scaleVector: Vector2, transformOrigin: Vector2, decimalPlaces = 2) => {
    return m2ScaleAtPointH(
        [scaleVector[0], scaleVector[1], 1],
        [transformOrigin[0], transformOrigin[1], 1],
        [point[0], point[1], 1],
        decimalPlaces
    );
};

export const scalePathAroundPoint = (d: string, scaleVector: Vector2, transformOrigin: Vector2, decimalPlaces = 2) => {
    if(!d) return d;

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

                const pos: Vector3 = scaleDot(
                    [item.params[0], item.params[1]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );

                item.params[0] = pos[0];
                item.params[1] = pos[1];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                // 6 parameters
                const pos1: Vector3 = scaleDot(
                    [item.params[0], item.params[1]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = scaleDot(
                    [item.params[2], item.params[3]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[2] = pos2[0];
                item.params[3] = pos2[1];

                const pos3: Vector3 = scaleDot(
                    [item.params[4], item.params[5]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[4] = pos3[0];
                item.params[5] = pos3[1];
                break;
            }

            case EPathDataCommand.QuadraticCurveToAbs:{
                // 4 parameters
                const pos1: Vector3 = scaleDot(
                    [item.params[0], item.params[1]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];

                const pos2: Vector3 = scaleDot(
                    [item.params[2], item.params[3]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[2] = pos2[0];
                item.params[3] = pos2[1];
                break;
            }

            case EPathDataCommand.ArcAbs:{
                // rx ry x-axis-rotation large-arc-flag sweep-flag x y
                /*
                const pos1: Vector3 = scaleDot(
                    [item.params[0], item.params[1]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[0] = pos1[0];
                item.params[1] = pos1[1];*/

                const pos2: Vector3 = scaleDot(
                    [item.params[5], item.params[6]],
                    scaleVector,
                    transformOrigin,
                    decimalPlaces
                );
                item.params[5] = pos2[0];
                item.params[6] = pos2[1];
                break;
            }
        }
    }

    //const rel = pathDataToRelative(abs);
    return pathDataToString(abs, false, decimalPlaces);
};

export const scalePath = (d: string, scaleVector: Vector2, decimalPlaces = 2) => {

    const bbox = getPathBBox(d);

    const x = bbox?.x ?? 0;
    const y = bbox?.y ?? 0;
    const w = bbox?.w ?? 0;
    const h = bbox?.h ?? 0;

    const cx = x + w / 2;
    const cy = y + h / 2;

    return scalePathAroundPoint(d, scaleVector, [cx, cy], decimalPlaces);
};