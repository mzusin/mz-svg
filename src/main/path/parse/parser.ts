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

    const parseCommand = (paramsCount: number, nextParamsTokenType: EPathDataCommand, isRelative: boolean) => {

        const tokenType = tokens[current].tokenType;
        const params: number[] = [];

        if(paramsCount > 0){

            // Validate the parameters count, and add them to the params list.
            for(let i= 1; i <= paramsCount; i++){
                if(!tokens[current + i]){
                    error(tokens[current], `Expected number(s) after command ${ tokenType }.`);
                    current += paramsCount;
                    return;
                }

                params.push(Number(tokens[current + i].value));
            }
        }

        pathData.commands.push({
            command: tokens[current].tokenType as EPathDataCommand,
            params,
        });

        current += paramsCount + 1;

        if(paramsCount <= 0) return;

        // If the command is followed by multiple sets of coordinates, the subsequent pairs are treated as implicit commands.
        const nextTokens: IPathDataToken[] = [];

        // Add all 'next params' to the list.
        while(tokens[current]?.tokenType === 'num'){
            nextTokens.push(tokens[current]);
            current++;
        }

        // Validate next params count.
        if(nextTokens.length % paramsCount !== 0){
            error(nextTokens[nextTokens.length - 1], `Expected a number.`);
            return;
        }

        const nextCommand = (isRelative ? nextParamsTokenType.toLowerCase() : nextParamsTokenType.toUpperCase()) as EPathDataCommand;

        // Add them to the commands list.
        for(let i= 0; i < nextTokens.length; i += paramsCount){
            const nextParams: number[] = [];
            for(let j = 0; j < paramsCount; j++){
                nextParams.push(Number(nextTokens[i + j].value));
            }
            pathData.commands.push({
                command: nextCommand,
                params: nextParams,
            });
        }
    };

    const parseNext = () => {
        const token = tokens[current];

        const isRelative = token.tokenType.toLowerCase() === token.tokenType;

        switch (token.tokenType){
            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.MoveToRel:
            case EPathDataCommand.LineToAbs:
            case EPathDataCommand.LineToRel:{
                parseCommand(2, EPathDataCommand.LineToAbs, isRelative);
                break;
            }

            case EPathDataCommand.ClosePathAbs:
            case EPathDataCommand.ClosePathRel:{
                parseCommand(0, EPathDataCommand.LineToAbs, isRelative);
                break;
            }

            case EPathDataCommand.LineToHorizontalAbs:
            case EPathDataCommand.LineToHorizontalRel:
            case EPathDataCommand.LineToVerticalAbs:
            case EPathDataCommand.LineToVerticalRel:{
                parseCommand(1, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:
            case EPathDataCommand.CubicCurveToRel:{
                parseCommand(6, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.CubicCurveToSmoothAbs:
            case EPathDataCommand.CubicCurveToSmoothRel:
            case EPathDataCommand.QuadraticCurveToAbs:
            case EPathDataCommand.QuadraticCurveToRel:{
                parseCommand(4, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.QuadraticCurveToSmoothAbs:
            case EPathDataCommand.QuadraticCurveToSmoothRel:{
                parseCommand(2, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.ArcAbs:
            case EPathDataCommand.ArcRel:{
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
    parseCommand(2, EPathDataCommand.LineToAbs, tokens[0].tokenType === EPathDataCommand.MoveToRel);

    /**
     * The loop.
     */
    while(!isEnd()){
        parseNext();
    }

    return pathData;
};