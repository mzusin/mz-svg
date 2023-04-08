import { IPathData, IPathDataScanResult } from './interfaces';
/**
 * All path data instructions are expressed as one character (e.g., a moveto is expressed as an M).
 * Relative versions of all commands are available (uppercase means absolute coordinates, lowercase means relative coordinates).
 * https://www.w3.org/TR/SVG11/paths.html#PathData
 */
export declare const parse: (scanResult: IPathDataScanResult) => IPathData;
