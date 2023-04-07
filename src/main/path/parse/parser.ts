import { IPathDataError, IPathDataScanResult, IPathDataToken } from './scanner';

/**
 * All path data instructions are expressed as one character (e.g., a moveto is expressed as an M).
 * Relative versions of all commands are available (uppercase means absolute coordinates, lowercase means relative coordinates).
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 */
export enum EPathDataCommand {

    // The "moveto" commands (M or m) establish a new current point.
    // The effect is as if the "pen" were lifted and moved to a new location.
    MoveToAbs = 'M',
    MoveToRel = 'm',

    // The "closepath" (Z or z) ends the current sub-path and causes an automatic straight line
    // to be drawn from the current point to the initial point of the current sub-path.
    ClosePathAbs = 'Z',
    ClosePathRel = 'z',

    // The various "lineto" commands draw straight lines from the current point to a new point.
    LineToAbs = 'L',
    LineToRel = 'l',
    LineToHorizontalAbs = 'H',
    LineToHorizontalRel = 'h',
    LineToVerticalAbs = 'V',
    LineToVerticalRel = 'v',

    // Cubic Bézier commands
    CubicCurveToAbs = 'C',
    CubicCurveToRel = 'c',
    CubicCurveToSmoothAbs = 'S',
    CubicCurveToSmoothRel = 's',

    // Quadratic Bézier commands
    QuadraticCurveToAbs = 'Q',
    QuadraticCurveToRel = 'q',
    QuadraticCurveToSmoothAbs = 'T',
    QuadraticCurveToSmoothRel = 't',

    // Elliptical arc commands
    ArcAbs = 'A',
    ArcRel = 'a',
}

export interface IPathDataCommand {
    command: EPathDataCommand;
    params: number[];
}

export interface IPathData {
    commands: IPathDataCommand[];
    errors: IPathDataError[];
}

export const parse = (scanResult: IPathDataScanResult) : IPathData => {

    const pathData: IPathData = {
        commands: [],
        errors: scanResult.errors || [],
    };

    if(scanResult.errors.length > 0 ||
        scanResult.tokens.length === 0) return pathData;

    const { tokens, errors } = scanResult;

    const error = (token: IPathDataToken, msg: string) => {
        errors.push({
            line: token?.line,
            col: token?.col,
            msg,
        });
    };

    // https://www.w3.org/TR/SVG11/paths.html#PathDataMovetoCommands
    // A path data segment (if there is one) must begin with a "moveto" command.
    if(tokens[0].tokenType !== EPathDataCommand.MoveToAbs &&
        tokens[0].tokenType !== EPathDataCommand.MoveToRel) {
        error(tokens[0], `A path data segment must begin with a 'moveto' command 'M' or 'm'.`);
        return pathData;
    }

    let current = 0;

    const isEnd = () => {
        return current >= tokens.length;
    };

    /**
     * The "moveto" commands.
     * Match sub-path that starts with M / m.
     */
    const parseM = () => {

        // The next pair of coordinates should be (x,y) parameters of 'M' or 'm'.
        if(!tokens[current + 1] || !tokens[current + 2]){
            error(tokens[current], `Expected number(s) after attribute ${ tokens[current].tokenType }.`);
            current += 2;
            return;
        }

        const isRelative = tokens[current].tokenType === EPathDataCommand.MoveToRel;

        pathData.commands.push({
            command: tokens[current].tokenType as EPathDataCommand,
            params: [
                Number(tokens[current + 1].value),
                Number(tokens[current + 2].value),
            ],
        });

        current += 3;

        // If a moveto is followed by multiple pairs of coordinates, the subsequent pairs are treated as implicit lineto commands.
        const lineToTokens: IPathDataToken[] = [];

        while(tokens[current]?.tokenType === 'num'){
            lineToTokens.push(tokens[current]);
            current++;
        }

        if(lineToTokens.length % 2 !== 0){
            error(lineToTokens[lineToTokens.length - 1], `Expected a number.`);
            return;
        }

        for(let i= 0; i < lineToTokens.length; i += 2){

            //  Hence, implicit lineto commands will be relative if the moveto is relative, and absolute if the moveto is absolute.
            //  If a relative moveto (m) appears as the first element of the path, then it is treated as a pair of absolute coordinates.
            //  In this case, subsequent pairs of coordinates are treated as relative even though the initial moveto is interpreted as an absolute moveto.
            pathData.commands.push({
                command: isRelative ? EPathDataCommand.LineToRel : EPathDataCommand.LineToAbs,
                params: [
                    Number(lineToTokens[i].value),
                    Number(lineToTokens[i + 1].value),
                ],
            });
        }
    };

    /**
     * The "closepath" command.
     * The "closepath" (Z or z) ends the current sub-path and causes an automatic straight line to be drawn from the current point to the initial point of the current sub-path.
     * Since the Z and z commands take no parameters, they have an identical effect.
     */
    const parseZ = () => {

        pathData.commands.push({
            command: tokens[current].tokenType as EPathDataCommand,
            params: [],
        });

        // If a "closepath" is followed immediately by a "moveto", then the "moveto" identifies the start point of the next sub-path. If a "closepath" is followed immediately by any other command, then the next sub-path starts at the same initial point as the current sub-path.
        current++;
    };

    /**
     * The "lineto" command.
     * Draw a line from the current point to the given (x,y) coordinate which becomes the new current point.
     * L (uppercase) indicates that absolute coordinates will follow;
     * l (lowercase) indicates that relative coordinates will follow.
     * A number of coordinates pairs may be specified to draw a polyline.
     * At the end of the command, the new current point is set to the final set of coordinates provided.
     */
    const parseL = () => {

    };

    const parseNext = () => {
        const token = tokens[current];

        switch (token.tokenType){
            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.MoveToRel: {
                parseM();
                break;
            }

            case EPathDataCommand.ClosePathAbs:
            case EPathDataCommand.ClosePathRel:{
                parseZ();
                break;
            }

            case EPathDataCommand.LineToAbs:
            case EPathDataCommand.LineToRel:{
                parseL();
                break;
            }

            default: {
                error(tokens[current], `Wrong path command.`);
                current++;
                break;
            }
        }
    };

    // A path data segment (if there is one) must begin with a "moveto" command.
    parseM();

    /**
     * The loop.
     */
    while(!isEnd()){
        parseNext();
    }

    return pathData;
};