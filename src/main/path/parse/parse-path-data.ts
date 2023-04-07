import { scan } from './scanner';
import { IPathData, parse } from './parser';

/**
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 * ‘d’ attribute contains the moveto, line, curve (both cubic and quadratic Béziers), arc and closepath instructions.
 */
export const parseD = (d?: string): IPathData => {
    const scanResult = scan(d);
    return parse(scanResult);

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