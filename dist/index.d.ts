declare module 'mz-svg' {

    export const createSVG: (props: {
        width: number;
        height: number;
        document?: Document;
    }) => SVGSVGElement;

    export const createPath: (props: {
        document?: Document;
        d: string;
        stroke?: string;
        strokeWidth?: number;
        fill?: string;
        strokeLinecap?: string;
        strokeLinejoin?: string;
        vectorEffect?: string;
    }) => SVGPathElement;

    export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
}