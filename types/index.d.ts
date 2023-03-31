declare const api: {
    createPath: (props: {
        document?: Document | undefined;
        id?: string | undefined;
        classes?: string | undefined;
        style?: string | undefined;
        d?: string | undefined;
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
    createRect: (props: {
        document?: Document | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        width?: string | number | undefined;
        height: string | number;
        stroke?: string | undefined;
        strokeWidth?: string | number | undefined;
        fill?: string | undefined;
        rx?: string | number | undefined;
        ry?: string | number | undefined;
    }) => SVGRectElement;
    createCircle: (props: {
        document?: Document | undefined;
        cx?: string | number | undefined;
        cy?: string | number | undefined;
        r?: string | number | undefined;
        stroke?: string | undefined;
        strokeWidth?: string | number | undefined;
        fill?: string | undefined;
    }) => SVGCircleElement;
    createEllipse: (props: {
        document?: Document | undefined;
        cx?: string | number | undefined;
        cy?: string | number | undefined;
        rx?: string | number | undefined;
        ry?: string | number | undefined;
        stroke?: string | undefined;
        strokeWidth?: string | number | undefined;
        fill?: string | undefined;
    }) => SVGEllipseElement;
    createLine: (props: {
        document?: Document | undefined;
        x1?: string | number | undefined;
        y1?: string | number | undefined;
        x2?: string | number | undefined;
        y2?: string | number | undefined;
        stroke?: string | undefined;
        strokeWidth?: string | number | undefined;
        strokeLinecap?: string | undefined;
        strokeLinejoin?: string | undefined;
    }) => SVGLineElement;
    SVG_NAMESPACE: "http://www.w3.org/2000/svg";
    XMLNS_NAMESPACE: "http://www.w3.org/2000/xmlns/";
    createSVG: (props: {
        width: number;
        height: number;
        document?: Document | undefined;
    }) => SVGSVGElement;
    setAttributes: ($svgElement: SVGElement, attr: [string, string | number | undefined][]) => void;
};
declare global {
    interface Window {
        mzSVG: typeof api;
    }
}
export * from './core';
export * from './shapes';
