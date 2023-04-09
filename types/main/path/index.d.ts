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
export declare const pathToRel: (d?: string, beautify?: boolean, decimalPlaces?: number) => string | undefined;
/**
 * Converts all path commands to absolute.
 */
export declare const pathToAbs: (d?: string, beautify?: boolean, decimalPlaces?: number) => string | undefined;
export declare const minifyPath: (d?: string, decimalPlaces?: number) => string | undefined;
export declare const beautifyPath: (d?: string, decimalPlaces?: number) => string | undefined;
