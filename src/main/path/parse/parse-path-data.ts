import { scan } from './scanner';

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
    params: string|number[];
}

export interface IPathData {
    length: number;
    commands: IPathDataCommand[];
}

/**
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 * ‘d’ attribute contains the moveto, line, curve (both cubic and quadratic Béziers), arc and closepath instructions.
 */
export const parseD = (d?: string): IPathData => {

    const commands: IPathDataCommand[] = [];

    const scanResult = scan(d);

    for(const token of scanResult.tokens){
        console.log('token', token);
    }

    return {
        length: commands.length,
        commands,
    };

    // Path data can contain newline characters and thus can be broken up into multiple lines to improve readability.
    // TODO: remove all newline and double-space characters

    // Superfluous white space and separators such as commas can be eliminated
    // TODO: remove commas
    // (e.g., "M 100 100 L 200 200" contains unnecessary spaces and could be expressed more compactly as "M100 100L200 200").

    // A path data segment (if there is one) must begin with a "moveto" command. Subsequent "moveto" commands (i.e., when the "moveto" is not the first command) represent the start of a new sub-path:
    // TODO: validate that path starts with M
    // TODO: how to handle sub-paths?

    // The command letter can be eliminated on subsequent commands if the same command is used multiple times in a row (e.g., you can drop the second "L" in "M 100 200 L 200 100 L -100 -200" and use "M 100 200 L 200 100 -100 -200" instead).
    // TODO: handle such cases

    // Alternate forms of lineto are available to optimize the special cases of horizontal and vertical lines (absolute and relative).
    // Alternate forms of curve are available to optimize the special cases where some of the control points on the current segment can be determined automatically from the control points on the previous segment.
    // TODO: handle such cases

    // For the relative versions of the commands, all coordinate values are relative to the current point at the start of the command.

};