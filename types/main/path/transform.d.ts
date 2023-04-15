import { Vector2 } from 'mz-math';
export declare const translatePath: (d: string, x: number, y: number, decimalPlaces?: number) => string;
export declare const rotatePathAroundPoint: (d: string, transformOrigin: Vector2, angleDegrees: number, decimalPlaces?: number) => string;
export declare const rotatePath: (d: string, angleDegrees: number, decimalPlaces?: number) => string;
export declare const scalePathAroundPoint: (d: string, scaleVector: Vector2, transformOrigin: Vector2, decimalPlaces?: number) => string;
export declare const scalePath: (d: string, scaleVector: Vector2, decimalPlaces?: number) => string;
