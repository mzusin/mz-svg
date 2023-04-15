import { Vector2 } from 'mz-math';
export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
}
/**
 * https://www.w3.org/TR/SVG11/implnote.html#ArcConversionEndpointToCenter
 */
export declare const getSVGArcCenter: (startX: number, startY: number, rx: number, ry: number, angleRad: number, largeArcFlag: number, sweepFlag: number, endX: number, endY: number) => Vector2 | null;
/**
 * Determine the coordinates of the smallest rectangle in which the path fits.
 */
export declare const getPathBBox: (d?: string, decimalPlaces?: number) => IBBox | null;
