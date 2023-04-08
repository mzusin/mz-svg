import { IPathData } from './interfaces';
export declare const isPathValid: (d?: string) => boolean;
/**
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 * ‘d’ attribute contains the moveto, line, curve (both cubic and quadratic Béziers), arc and closepath instructions.
 */
export declare const parsePath: (d?: string) => IPathData;
/**
 * Converts all path commands to relative.
 */
export declare const pathToRel: (d?: string) => string | undefined;
/**
 * Converts all path commands to absolute.
 */
export declare const pathToAbs: (d?: string) => string | undefined;
/**
 * SVG paths transformations that works with 'path data' - https://www.w3.org/TR/SVG11/paths.html#PathData

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
}; */ 
