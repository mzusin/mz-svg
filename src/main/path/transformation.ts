import { IPathData } from './interfaces';
import { scan } from './scanner';
import { parse } from './parser';

export const isPathValid = (d?: string): boolean => {
    const parsed = parsePath(d);
    return parsed.errors.length <= 0;
};

/**
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 * ‘d’ attribute contains the moveto, line, curve (both cubic and quadratic Béziers), arc and closepath instructions.
 */
export const parsePath = (d?: string): IPathData => {
    const scanResult = scan(d);
    return parse(scanResult);
};

/**
 * SVG paths transformations that works with 'path data' - https://www.w3.org/TR/SVG11/paths.html#PathData
 */
export const transformPath = (props?: {
    d?: string;
    $path?: SVGPathElement;
}) : null|string|SVGPathElement => {

    // if no path props is provided ---> null
    if(!props || (!props.d && !props.$path)) return null;

    // if both $path and d are provided ---> $path has more priority
    const d = props.$path?.getAttribute('d') ?? props.d;
    if(!d) return null;

    parsePath(d);

    if(props.$path) return props.$path;
    return d;
};