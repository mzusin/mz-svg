export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
}
/**
 * Determine the coordinates of the smallest rectangle in which the path fits.
 */
export declare const getPathBBox: (d?: string, decimalPlaces?: number) => IBBox | null;
