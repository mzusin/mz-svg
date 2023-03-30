/**
 * SVG namespace that is defined in SVG v1.0 Specification
 * and subsequently added to by SVG 1.1, SVG 1.2 and SVG 2
 */
export declare const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
export declare const XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
/**
 * Create new SVG element in browser or Node.js environment.
 * In case of Node.js, JSDom document can be provided.
 */
export declare const createSVG: (props: {
    width: number;
    height: number;
    document?: Document;
}) => SVGSVGElement;
