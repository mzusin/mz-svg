import * as primitiveShapes from './main/shapes/primitive-shapes';
import * as stars from './main/shapes/star-shapes';
import * as containers from './main/containers';
declare const api: {
    appendOnce: ($parent: SVGElement | SVGSVGElement, $el: SVGElement) => void;
    prependOnce: ($parent: SVGElement | SVGSVGElement, $el: SVGElement) => void;
    createGroup: (props: import("./interfaces").IPrimitiveShapeProps) => SVGGElement;
    createDefs: (props?: {
        document?: Document | undefined;
        id?: string | undefined;
        classes?: string | undefined;
    } | undefined) => SVGDefsElement;
    createUse: (props?: {
        document?: Document | undefined;
        href?: string | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        id?: string | undefined;
        classes?: string | undefined;
    } | undefined) => SVGUseElement;
    createPattern: (props: containers.ICreatePatternProps) => SVGPatternElement;
    getRectPathD: (props: {
        x: number;
        y: number;
        width: number;
        height: number;
        rx?: number | undefined;
        ry?: number | undefined;
    }) => string;
    createRectPath: (props: {
        document?: Document | undefined;
        x: number;
        y: number;
        width: number;
        height: number;
        rx?: number | undefined;
        ry?: number | undefined;
        id?: string | undefined;
        classes?: string | undefined;
        style?: string | undefined;
        pathLength?: string | number | undefined;
        stroke?: string | undefined;
        strokeWidth?: string | number | undefined;
        strokeOpacity?: string | number | undefined;
        strokeLinecap?: string | undefined;
        strokeLinejoin?: string | undefined;
        strokeDasharray?: string | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeMiterlimit?: string | number | undefined;
        fill?: string | undefined;
        fillOpacity?: string | number | undefined;
        fillRule?: string | undefined;
        filter?: string | undefined;
        mask?: string | undefined;
        transform?: string | undefined;
        vectorEffect?: string | undefined;
        shapeRendering?: string | undefined;
        clipPath?: string | undefined;
        clipRule?: string | undefined;
        opacity?: string | number | undefined;
        visibility?: string | undefined;
    }) => SVGPathElement;
    createStar: (props: stars.ICreateStarProps) => SVGPathElement;
    download: (props: {
        $svg?: SVGSVGElement | undefined;
        svgString?: string | undefined;
        outfileName?: string | undefined;
        ext?: string | undefined;
    }) => Promise<{
        isError: boolean;
        msg?: string | undefined;
    }>;
    createPath: (props: primitiveShapes.ICreatePathProps) => SVGPathElement;
    createRect: (props: primitiveShapes.ICreateRectProps) => SVGRectElement;
    createCircle: (props: primitiveShapes.ICreateCircleProps) => SVGCircleElement;
    createEllipse: (props: primitiveShapes.ICreateEllipseProps) => SVGEllipseElement;
    createLine: (props: primitiveShapes.ICreateLineProps) => SVGLineElement;
    createPolygon: (props: primitiveShapes.ICreatePolygonProps) => SVGPolygonElement;
    createPolyline: (props: primitiveShapes.ICreatePolygonProps) => SVGPolylineElement;
    SVG_NAMESPACE: "http://www.w3.org/2000/svg";
    XMLNS_NAMESPACE: "http://www.w3.org/2000/xmlns/";
    DEFAULT_DECIMAL_PLACES: 2;
    createSVG: (props: {
        width: number;
        height: number;
        document?: Document | undefined;
    }) => SVGSVGElement;
    createSVGFromString: (props: {
        document?: Document | undefined;
        svg: string;
    }) => SVGSVGElement;
    getSVGAsString: ($svg: SVGSVGElement) => string;
    setAttributes: ($svgElement: SVGElement, attr: [string, string | number | undefined][]) => void;
    getCommonAttributes: (props?: {
        id?: string | undefined;
        classes?: string | undefined;
        style?: string | undefined;
        stroke?: string | undefined;
        strokeWidth?: string | number | undefined;
        strokeOpacity?: string | number | undefined;
        strokeLinecap?: string | undefined;
        strokeLinejoin?: string | undefined;
        strokeDasharray?: string | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeMiterlimit?: string | number | undefined;
        fill?: string | undefined;
        fillOpacity?: string | number | undefined;
        fillRule?: string | undefined;
        filter?: string | undefined;
        mask?: string | undefined;
        transform?: string | undefined;
        vectorEffect?: string | undefined;
        shapeRendering?: string | undefined;
        clipPath?: string | undefined;
        clipRule?: string | undefined;
        opacity?: string | number | undefined;
        visibility?: string | undefined;
    } | undefined) => [string, string | number | undefined][];
};
declare global {
    interface Window {
        mzSVG: typeof api;
    }
}
export * from './main/core';
export * from './main/shapes/primitive-shapes';
export * from './main/io-browser';
export * from './main/shapes/star-shapes';
export * from './main/shapes/shape-paths';
export * from './main/containers';
export * from './main/helpers';
