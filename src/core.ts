/**
 * SVG namespace that is defined in SVG v1.0 Specification
 * and subsequently added to by SVG 1.1, SVG 1.2 and SVG 2
 */
export const SVG_NAMESPACE= 'http://www.w3.org/2000/svg';
export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';

/**
 * Create new SVG in browser environment ---> return svg element.
 */
export const createSVG = (width: number, height: number) : SVGSVGElement => {
    const $svg= document.createElementNS(SVG_NAMESPACE, 'svg');

    $svg.setAttributeNS(XMLNS_NAMESPACE, 'xmlns', SVG_NAMESPACE);
    $svg.setAttribute('width', width.toString());
    $svg.setAttribute('height', height.toString());
    $svg.setAttribute('viewBox', `0 0 ${ width } ${ height }`);

    return $svg;
};