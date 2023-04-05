import { IPrimitiveShapeProps } from '../types/interfaces';

declare module 'mz-svg' {

    export const createSVG: (props: {
        width: number;
        height: number;
        document?: Document;
    }) => SVGSVGElement;

    export const createSVGFromString: (props: {
        document?: Document;
        svg: string;
    }) => SVGSVGElement;

    export const getSVGAsString: ($svg: SVGSVGElement) => string;

    export const saveSVG: (props: {
        absOutFilePath: string;
        $svg?: SVGSVGElement;
        svgString?: string;
    }) => void;

    export const download: (props: {
        $svg?: SVGSVGElement;
        svgString?: string;
        outfileName?: string;
        ext?: string;
    }) => Promise<{
        isError: boolean;
        msg?: string | undefined;
    }>;

    export interface ICreatePathProps extends IPrimitiveShapeProps {
        d?: string;
        pathLength?: string | number;
    }
    export const createPath: (props: ICreatePathProps) => SVGPathElement;
    export interface ICreateRectProps extends IPrimitiveShapeProps {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        rx?: number | string;
        ry?: number | string;
        pathLength?: string | number;
    }
    export const createRect: (props: ICreateRectProps) => SVGRectElement;
    export interface ICreateCircleProps extends IPrimitiveShapeProps {
        cx?: string | number;
        cy?: string | number;
        r?: string | number;
        pathLength?: string | number;
    }
    export const createCircle: (props: ICreateCircleProps) => SVGCircleElement;
    export interface ICreateEllipseProps extends IPrimitiveShapeProps {
        cx?: string | number;
        cy?: string | number;
        rx?: string | number;
        ry?: string | number;
        pathLength?: string | number;
    }
    export const createEllipse: (props: ICreateEllipseProps) => SVGEllipseElement;
    export interface ICreateLineProps extends IPrimitiveShapeProps {
        x1?: string | number;
        y1?: string | number;
        x2?: string | number;
        y2?: string | number;
        pathLength?: string | number;
    }
    export const createLine: (props: ICreateLineProps) => SVGLineElement;
    export interface ICreatePolygonProps extends IPrimitiveShapeProps {
        points?: string;
        pathLength?: string | number;
    }
    export const createPolygon: (props: ICreatePolygonProps) => SVGPolygonElement;

    export interface ICreateStarProps extends IPrimitiveShapeProps {
        raysNumber: number;
        centerX: number;
        centerY: number;
        outerRadius: number;
        innerRadius: number;
        decimalPlaces?: number;
        pathLength?: string | number;
    }
    export const createStar: (props: ICreateStarProps) => SVGPathElement;

    export interface ICreatePatternProps extends IPrimitiveShapeProps {
        x?: string | number;
        y?: string | number;
        width?: string | number;
        height?: string | number;
        href?: string;
        patternContentUnits?: string | number;
        patternTransform?: string;
        patternUnits?: string;
        preserveAspectRatio?: string;
        viewBox?: string;
    }
    export const createPattern: (props: ICreatePatternProps) => SVGPatternElement;

    export const createDefs: (props: {
        document?: Document;
        id?: string;
        classes?: string;
    }) => SVGDefsElement;

    export const appendOnce: ($parent: SVGSVGElement | SVGElement, $el: SVGElement) => void;
    export const prependOnce: ($parent: SVGSVGElement | SVGElement, $el: SVGElement) => void;

    export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
}