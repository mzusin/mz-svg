declare const api: {
    createPath: (props: {
        document?: Document | undefined;
        d?: string | undefined;
        stroke?: string | undefined;
        strokeWidth?: number | undefined;
        fill?: string | undefined;
        strokeLinecap?: string | undefined;
        strokeLinejoin?: string | undefined;
        vectorEffect?: string | undefined;
    }) => SVGPathElement;
    SVG_NAMESPACE: "http://www.w3.org/2000/svg";
    XMLNS_NAMESPACE: "http://www.w3.org/2000/xmlns/";
    createSVG: (props: {
        width: number;
        height: number;
        document?: Document | undefined;
    }) => SVGSVGElement;
};
declare global {
    interface Window {
        mzSVG: typeof api;
    }
}
export * from './core';
export * from './shapes';
