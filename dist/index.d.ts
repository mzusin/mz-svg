declare module 'mz-svg' {

    export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    export const XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";

    // export type Vector2 = [number, number];

    export const createSVG: (width: number, height: number) => SVGSVGElement;
}