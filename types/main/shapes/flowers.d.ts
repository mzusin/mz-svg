import { IPrimitiveShapeProps } from '../../interfaces';
export interface ICreateFlowerProps extends IPrimitiveShapeProps {
    petalsNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    decimalPlaces?: number;
    pathLength?: string | number;
}
export declare const createFlower: (props: ICreateFlowerProps) => SVGPathElement;
