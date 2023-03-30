declare const api: {
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
