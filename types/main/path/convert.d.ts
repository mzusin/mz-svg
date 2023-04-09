import { IPathData } from './interfaces';
export declare const pathDataToRelative: (pathData: IPathData) => IPathData;
export declare const pathDataToAbsolute: (pathData: IPathData) => IPathData;
export declare const pathDataToString: (pathData: IPathData, minify?: boolean, decimalPlaces?: number) => string;
