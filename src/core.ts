/**
 * SVG namespace that is defined in SVG v1.0 Specification
 * and subsequently added to by SVG 1.1, SVG 1.2 and SVG 2
 */
export const SVG_NAMESPACE= 'http://www.w3.org/2000/svg';
export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
export const DEFAULT_DECIMAL_PLACES = 2;

/**
 * Create new SVG element in browser or Node.js environment.
 * In case of Node.js, JSDom document can be provided.
 */
export const createSVG = (props: {
    width: number;
    height: number;
    document?: Document;
}) : SVGSVGElement => {

    const {
        width: _width,
        height: _height,
        document: _document,
    } = props;

    const doc = _document || window.document;
    const $svg= doc.createElementNS(SVG_NAMESPACE, 'svg');

    const width = Math.max(0, Number(_width) || 0);
    const height = Math.max(0, Number(_height) || 0);

    $svg.setAttributeNS(XMLNS_NAMESPACE, 'xmlns', SVG_NAMESPACE);
    $svg.setAttribute('width', width.toString());
    $svg.setAttribute('height', height.toString());
    $svg.setAttribute('viewBox', `0 0 ${ width } ${ height }`);

    return $svg;
};

/**
 * Create SVG document from string
 */
export const createSVGFromString = (props: {
    document?: Document;
    svg: string;
}) : SVGSVGElement => {
    const {
        document: _document,
        svg,
    } = props;

    const doc = _document || window.document;

    const $box = doc.createElement('div');
    $box.innerHTML = svg;
    return $box.firstElementChild as SVGSVGElement;
};

export const getSVGAsString = ($svg: SVGSVGElement) => {
    return $svg.outerHTML;
};

export const setAttributes = ($svgElement: SVGElement, attr: [string, string|number|undefined][]) => {
    if(!$svgElement || !attr) return;

    for(const pair of attr){
        if(pair.length !== 2) continue;

        const prop = pair[0];
        if(prop === null || prop === undefined) continue;

        const value = pair[1];
        if(value === null || value === undefined) continue;

        $svgElement.setAttribute(prop, value.toString());
    }
};