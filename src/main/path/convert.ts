import { EPathDataCommand, IPathData } from './interfaces';
import { setDecimalPlaces } from 'mz-math';
import { pathDataMinify } from './minify';

export const pathDataToRelative = (pathData: IPathData): IPathData => {

    const { commands } = pathData;

    if(commands.length <= 0) return pathData;

    // current (x, y) pair
    let x = commands[0].params[0];
    let y = commands[0].params[1];

    // the latest 'M' coordinates
    let mx = x;
    let my = y;

    // Make first M to be absolute
    commands[0].command = EPathDataCommand.MoveToAbs;

    for(let i = 1; i<commands.length; i++){
        const item = commands[i]

        switch (item.command) {
            case EPathDataCommand.MoveToAbs:{
                commands[i].params[0] -= x;
                commands[i].params[1] -= y;

                mx = commands[i].params[0];
                my = commands[i].params[1];
                break;
            }

            case EPathDataCommand.ClosePathAbs:
            case EPathDataCommand.ClosePathRel:{
                x = mx;
                y = my;
                break;
            }

            case EPathDataCommand.LineToAbs:
            case EPathDataCommand.QuadraticCurveToSmoothAbs:{
                const savedX = commands[i].params[0];
                const savedY = commands[i].params[1];

                commands[i].params[0] -= x;
                commands[i].params[1] -= y;

                x = savedX;
                y = savedY;
                break;
            }

            case EPathDataCommand.MoveToRel:
            case EPathDataCommand.LineToRel:{
                x += commands[i].params[0];
                y += commands[i].params[1];
                break;
            }

            case EPathDataCommand.LineToHorizontalAbs:{
                const savedX = commands[i].params[0];
                commands[i].params[0] -= x;
                x = savedX;
                break;
            }

            case EPathDataCommand.LineToHorizontalRel:{
                x += commands[i].params[0];
                break;
            }

            case EPathDataCommand.LineToVerticalAbs:{
                const savedY = commands[i].params[0];
                commands[i].params[0] -= y;
                y = savedY;
                break;
            }

            case EPathDataCommand.LineToVerticalRel:{
                y += commands[i].params[0];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                const savedX = commands[i].params[4];
                const savedY = commands[i].params[5];

                // x1 y1 - control point at the beginning of the curve
                commands[i].params[0] -= x;
                commands[i].params[1] -= y;

                // x2 y2 - control point at the end of the curve
                commands[i].params[2] -= x;
                commands[i].params[3] -= y;

                // At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the poly-bézier.
                commands[i].params[4] -= x;
                commands[i].params[5] -= y;

                x = savedX;
                y = savedY;
                break;
            }

            case EPathDataCommand.CubicCurveToRel:{
                x += commands[i].params[4];
                y += commands[i].params[5];
                break;
            }

            case EPathDataCommand.CubicCurveToSmoothAbs:
            case EPathDataCommand.QuadraticCurveToAbs:{
                const savedX = commands[i].params[2];
                const savedY = commands[i].params[3];

                commands[i].params[0] -= x;
                commands[i].params[1] -= y;

                commands[i].params[2] -= x;
                commands[i].params[3] -= y;

                x = savedX;
                y = savedY;
                break;
            }

            case EPathDataCommand.CubicCurveToSmoothRel:
            case EPathDataCommand.QuadraticCurveToRel:{
                x += commands[i].params[2];
                y += commands[i].params[3];
                break;
            }

            case EPathDataCommand.ArcAbs:{
                // (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
                const savedX = commands[i].params[5];
                const savedY = commands[i].params[6];

                // x y
                commands[i].params[5] -= x;
                commands[i].params[6] -= y;

                x = savedX;
                y = savedY;
                break;
            }

            case EPathDataCommand.ArcRel:{
                x += commands[i].params[5];
                y += commands[i].params[6];
                break;
            }
        }

        // make the command lowercase
        commands[i].command = commands[i].command.toLowerCase() as EPathDataCommand;
    }

    return pathData;
};

export const pathDataToAbsolute = (pathData: IPathData): IPathData => {

    const { commands } = pathData;

    if(commands.length <= 0) return pathData;

    // current (x, y) pair
    let x = commands[0].params[0];
    let y = commands[0].params[1];

    // the latest 'M' coordinates
    let mx = x;
    let my = y;

    // Make first M to be absolute
    commands[0].command = EPathDataCommand.MoveToAbs;

    for(let i = 1; i<commands.length; i++){
        const item = commands[i]

        switch (item.command) {
            case EPathDataCommand.MoveToRel:{
                commands[i].params[0] += x;
                commands[i].params[1] += y;

                mx = commands[i].params[0];
                my = commands[i].params[1];
                break;
            }

            case EPathDataCommand.ClosePathAbs:
            case EPathDataCommand.ClosePathRel:{
                x = mx;
                y = my;
                break;
            }

            case EPathDataCommand.LineToRel:
            case EPathDataCommand.QuadraticCurveToSmoothRel:{
                const savedX = commands[i].params[0];
                const savedY = commands[i].params[1];

                commands[i].params[0] += x;
                commands[i].params[1] += y;

                x += savedX;
                y += savedY;
                break;
            }

            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.LineToAbs:{
                x = commands[i].params[0];
                y = commands[i].params[1];
                break;
            }

            case EPathDataCommand.LineToHorizontalRel:{
                const savedX = commands[i].params[0];
                commands[i].params[0] += x;
                x += savedX;
                break;
            }

            case EPathDataCommand.LineToHorizontalAbs:{
                x = commands[i].params[0];
                break;
            }

            case EPathDataCommand.LineToVerticalRel:{
                const savedY = commands[i].params[0];
                commands[i].params[0] += y;
                y += savedY;
                break;
            }

            case EPathDataCommand.LineToVerticalAbs:{
                y = commands[i].params[0];
                break;
            }

            case EPathDataCommand.CubicCurveToRel:{
                const savedX = commands[i].params[4];
                const savedY = commands[i].params[5];

                // x1 y1 - control point at the beginning of the curve
                commands[i].params[0] += x;
                commands[i].params[1] += y;

                // x2 y2 - control point at the end of the curve
                commands[i].params[2] += x;
                commands[i].params[3] += y;

                // At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the poly-bézier.
                commands[i].params[4] += x;
                commands[i].params[5] += y;

                x += savedX;
                y += savedY;
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                x = commands[i].params[4];
                y = commands[i].params[5];
                break;
            }

            case EPathDataCommand.CubicCurveToSmoothRel:
            case EPathDataCommand.QuadraticCurveToRel:{
                const savedX = commands[i].params[2];
                const savedY = commands[i].params[3];

                commands[i].params[0] += x;
                commands[i].params[1] += y;

                commands[i].params[2] += x;
                commands[i].params[3] += y;

                x += savedX;
                y += savedY;
                break;
            }

            case EPathDataCommand.CubicCurveToSmoothAbs:
            case EPathDataCommand.QuadraticCurveToAbs:{
                x = commands[i].params[2];
                y = commands[i].params[3];
                break;
            }

            case EPathDataCommand.ArcRel:{
                // (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
                const savedX = commands[i].params[5];
                const savedY = commands[i].params[6];

                // x y
                commands[i].params[5] += x;
                commands[i].params[6] += y;

                x += savedX;
                y += savedY;
                break;
            }

            case EPathDataCommand.ArcAbs:{
                x = commands[i].params[5];
                y = commands[i].params[6];
                break;
            }
        }

        // make the command uppercase
        commands[i].command = commands[i].command.toUpperCase() as EPathDataCommand;
    }

    return pathData;
};

export const pathDataToString = (pathData: IPathData, minify?: boolean) : string => {
    if(!pathData || pathData.commands.length <= 0) return '';

    let d = '';

    if(minify){
        return pathDataMinify(pathData);
    }

    for(const item of pathData.commands){
        d += item.command;
        if(item.params.length > 0){
            d += ` ${ item.params.map(param => Number.isInteger(param) ? param : setDecimalPlaces(param, 2)).join(' ')} `
        }
        else{
            d += ' ';
        }
    }

    return d.trim();
};