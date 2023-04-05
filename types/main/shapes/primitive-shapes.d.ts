import { IPrimitiveShapeProps } from '../../interfaces';
export interface ICreatePathProps extends IPrimitiveShapeProps {
    d?: string;
    pathLength?: string | number;
}
export declare const createPath: (props: ICreatePathProps) => SVGPathElement;
export interface ICreateRectProps extends IPrimitiveShapeProps {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    rx?: number | string;
    ry?: number | string;
    pathLength?: string | number;
}
export declare const createRect: (props: ICreateRectProps) => SVGRectElement;
export interface ICreateCircleProps extends IPrimitiveShapeProps {
    cx?: string | number;
    cy?: string | number;
    r?: string | number;
    pathLength?: string | number;
}
export declare const createCircle: (props: ICreateCircleProps) => SVGCircleElement;
export interface ICreateEllipseProps extends IPrimitiveShapeProps {
    cx?: string | number;
    cy?: string | number;
    rx?: string | number;
    ry?: string | number;
    pathLength?: string | number;
}
export declare const createEllipse: (props: ICreateEllipseProps) => SVGEllipseElement;
export interface ICreateLineProps extends IPrimitiveShapeProps {
    x1?: string | number;
    y1?: string | number;
    x2?: string | number;
    y2?: string | number;
    pathLength?: string | number;
}
export declare const createLine: (props: ICreateLineProps) => SVGLineElement;
export interface ICreatePolygonProps extends IPrimitiveShapeProps {
    points?: string;
    pathLength?: string | number;
}
export declare const createPolygon: (props: ICreatePolygonProps) => SVGPolygonElement;
export interface ICreatePolylineProps extends IPrimitiveShapeProps {
    points?: string;
    pathLength?: string | number;
}
export declare const createPolyline: (props: ICreatePolygonProps) => SVGPolylineElement;
