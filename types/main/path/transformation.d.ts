import { IPathData } from './interfaces';
export declare const isPathValid: (d?: string) => boolean;
/**
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 * ‘d’ attribute contains the moveto, line, curve (both cubic and quadratic Béziers), arc and closepath instructions.
 */
export declare const parsePath: (d?: string) => IPathData;
/**
 * SVG paths transformations that works with 'path data' - https://www.w3.org/TR/SVG11/paths.html#PathData
 */
export declare const transformPath: (props?: {
    d?: string;
    $path?: SVGPathElement;
}) => null | string | SVGPathElement;
