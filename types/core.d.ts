/**
 * SVG namespace that is defined in SVG v1.0 Specification
 * and subsequently added to by SVG 1.1, SVG 1.2 and SVG 2
 */
export declare const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
export declare const XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
/**
 * init SVG in browser environment ---> return svg element and document element
 * @return { document: Document, $svg: SVGSVGElement }
 */
export declare const initSVG: (width: number, height: number) => {
    document: Document;
    $svg: SVGSVGElement;
};
