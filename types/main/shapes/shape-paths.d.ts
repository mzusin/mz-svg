import { IPrimitiveShapeProps } from '../../interfaces';
export declare const getRectPathD: (props: {
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;
}) => string;
export interface ICreateRectPathProps extends IPrimitiveShapeProps {
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;
}
export declare const createRectPath: (props: ICreateRectPathProps) => SVGPathElement;
