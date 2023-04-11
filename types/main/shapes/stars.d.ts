import { IPrimitiveShapeProps } from '../../interfaces';
export interface ICreateStarProps extends IPrimitiveShapeProps {
    raysNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    decimalPlaces?: number;
    pathLength?: string | number;
    type?: number;
}
export declare const createStar: (props: ICreateStarProps) => SVGPathElement;
export declare const createStar1: (props: ICreateStarProps) => SVGPathElement;
export declare const createStar2: (props: ICreateStarProps) => SVGPathElement;
export declare const createStar3: (props: ICreateStarProps) => SVGPathElement;
