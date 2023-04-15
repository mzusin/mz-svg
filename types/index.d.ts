/// <reference types="mz-math" />
import * as core from './main/core';
import * as primitiveShapes from './main/shapes/primitive-shapes';
import * as stars from './main/shapes/stars';
import * as flowers from './main/shapes/flowers';
import * as shapePaths from './main/shapes/shape-paths';
import * as containers from './main/containers';
import * as bbox from './main/path/bbox';
import * as animation from './main/animation/animate';
declare const api: {
    createAnimate: (props?: animation.ICreateAnimateProps | undefined) => SVGAnimateElement;
    getSVGArcCenter: (startX: number, startY: number, rx: number, ry: number, angleRad: number, largeArcFlag: number, sweepFlag: number, endX: number, endY: number) => import("mz-math").Vector2 | null;
    getPathBBox: (d?: string | undefined, decimalPlaces?: number) => bbox.IBBox | null;
    translatePath: (d: string, x: number, y: number, decimalPlaces?: number) => string;
    rotatePathAroundPoint: (d: string, transformOrigin: import("mz-math").Vector2, angleDegrees: number, decimalPlaces?: number) => string;
    rotatePath: (d: string, angleDegrees: number, decimalPlaces?: number) => string;
    scalePathAroundPoint: (d: string, scaleVector: import("mz-math").Vector2, transformOrigin: import("mz-math").Vector2, decimalPlaces?: number) => string;
    scalePath: (d: string, scaleVector: import("mz-math").Vector2, decimalPlaces?: number) => string;
    isPathValid: (d?: string | undefined) => boolean;
    parsePath: (d?: string | undefined) => import("./main/path/interfaces").IPathData;
    pathToRel: (d?: string | undefined, beautify?: boolean, decimalPlaces?: number) => string | undefined;
    pathToAbs: (d?: string | undefined, beautify?: boolean, decimalPlaces?: number) => string | undefined;
    minifyPath: (d?: string | undefined, decimalPlaces?: number) => string | undefined;
    beautifyPath: (d?: string | undefined, decimalPlaces?: number) => string | undefined;
    appendOnce: ($parent: SVGElement | SVGSVGElement, $el: SVGElement) => void;
    prependOnce: ($parent: SVGElement | SVGSVGElement, $el: SVGElement) => void;
    createGroup: (props?: import("./interfaces").IPrimitiveShapeProps | undefined) => SVGGElement;
    createDefs: (props?: {
        document?: Document | undefined;
        id?: string | undefined;
        classes?: string | undefined;
    } | undefined) => SVGDefsElement;
    createUse: (props?: containers.ICreateUseProps | undefined) => SVGUseElement;
    createPattern: (props?: containers.ICreatePatternProps | undefined) => SVGPatternElement;
    createClipPath: (props?: containers.ICreateClipPathProps | undefined) => SVGClipPathElement;
    createMask: (props?: containers.ICreateMaskProps | undefined) => SVGMaskElement;
    createSymbol: (props?: containers.ICreateSymbolProps | undefined) => SVGSymbolElement;
    getRectPathD: (props: {
        x: number;
        y: number;
        width: number;
        height: number;
        rx?: number | undefined;
        ry?: number | undefined;
    }) => string;
    createRectPath: (props: shapePaths.ICreateRectPathProps) => SVGPathElement;
    createFlower: (props: flowers.ICreateFlowerProps) => SVGPathElement;
    createStar: (props: stars.ICreateStarProps) => SVGPathElement;
    createStar1: (props: stars.ICreateStarProps) => SVGPathElement;
    createStar2: (props: stars.ICreateStarProps) => SVGPathElement;
    createStar3: (props: stars.ICreateStarProps) => SVGPathElement;
    download: (props: {
        $svg?: SVGSVGElement | undefined;
        svgString?: string | undefined;
        outfileName?: string | undefined;
        ext?: string | undefined;
    }) => Promise<{
        isError: boolean;
        msg?: string | undefined;
    }>;
    createPath: (props?: primitiveShapes.ICreatePathProps | undefined) => SVGPathElement;
    createRect: (props?: primitiveShapes.ICreateRectProps | undefined) => SVGRectElement;
    createCircle: (props?: primitiveShapes.ICreateCircleProps | undefined) => SVGCircleElement;
    createEllipse: (props?: primitiveShapes.ICreateEllipseProps | undefined) => SVGEllipseElement;
    createLine: (props?: primitiveShapes.ICreateLineProps | undefined) => SVGLineElement;
    createPolygon: (props?: primitiveShapes.ICreatePolygonProps | undefined) => SVGPolygonElement;
    createPolyline: (props?: primitiveShapes.ICreatePolylineProps | undefined) => SVGPolylineElement;
    SVG_NAMESPACE: "http://www.w3.org/2000/svg";
    XMLNS_NAMESPACE: "http://www.w3.org/2000/xmlns/";
    DEFAULT_DECIMAL_PLACES: 2;
    createSVG: (props?: core.ICreateSVGProps | undefined) => SVGSVGElement;
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
export * from './main/shapes/stars';
export * from './main/shapes/flowers';
export * from './main/shapes/shape-paths';
export * from './main/containers';
export * from './main/helpers';
export * from './main/path';
export * from './main/path/transform';
export * from './main/path/bbox';
export * from './main/animation/animate';
