import { IPrimitiveShapeProps } from '../../interfaces';
export interface ICreateStarProps extends IPrimitiveShapeProps {
    raysNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    decimalPlaces?: number;
    pathLength?: string | number;
}
export declare const createStar: (props: ICreateStarProps) => SVGPathElement;
