import { IPrimitiveShapeProps } from '../interfaces';

/**
 * SVG namespace that is defined in SVG v1.0 Specification
 * and subsequently added to by SVG 1.1, SVG 1.2 and SVG 2
 */
export const SVG_NAMESPACE= 'http://www.w3.org/2000/svg';
export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
export const DEFAULT_DECIMAL_PLACES = 2;

export interface ICreateSVGProps extends IPrimitiveShapeProps{
    x?: string|number;
    y?: string|number;
    width?: string|number;
    height?: string|number;
    preserveAspectRatio?: string;
    viewBox?: string;
    autoViewBox?: boolean;
}

/**
 * Create new SVG element in browser or Node.js environment.
 * In case of Node.js, JSDom document can be provided.
 */
export const createSVG = (props?: ICreateSVGProps) : SVGSVGElement => {

    const doc = props?.document || window.document;
    const $svg= doc.createElementNS(SVG_NAMESPACE, 'svg');

    $svg.setAttributeNS(XMLNS_NAMESPACE, 'xmlns', SVG_NAMESPACE);

    let viewBox = props?.viewBox;
    if(props?.autoViewBox){
        viewBox = `${ props?.x || 0 } ${ props?.y || 0 } ${ props?.width || 0 } ${ props?.height || 0 }`;
    }

    setAttributes($svg, [
        ['x', props?.x],
        ['y', props?.y],
        ['width', props?.width],
        ['height', props?.height],
        ['viewBox', viewBox],
        ['preserveAspectRatio', props?.preserveAspectRatio],
        ...getCommonAttributes(props),
    ]);

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

export const getCommonAttributes = (props?: {
    id?: string;
    classes?: string;
    style?: string;

    stroke?: string;
    strokeWidth?: number|string;
    strokeOpacity?: number|string;
    strokeLinecap?: string; // 'round'
    strokeLinejoin?: string;
    strokeDasharray?: string;
    strokeDashoffset?: number|string;
    strokeMiterlimit?: number|string;

    fill?: string;
    fillOpacity?: number|string;
    fillRule?: string;

    filter?: string;
    mask?: string;
    transform?: string;

    vectorEffect?: string; // 'non-scaling-stroke' - used to disable line scale
    shapeRendering?: string;

    clipPath?: string;
    clipRule?: string;

    opacity?: string|number;
    visibility?: string;
}) : [string, string|number|undefined][] => {

    if(!props) return [];

    return [
        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],

        ['stroke', props.stroke],
        ['stroke-width', props.strokeWidth],
        ['stroke-opacity', props.strokeOpacity],
        ['stroke-linecap', props.strokeLinecap],
        ['stroke-linejoin', props.strokeLinejoin],
        ['stroke-dasharray', props.strokeDasharray],
        ['stroke-dashoffset', props.strokeDashoffset],
        ['stroke-miterlimit', props.strokeMiterlimit],

        ['fill', props.fill],
        ['fill-opacity', props.fillOpacity],
        ['fill-rule', props.fillRule],

        ['filter', props.filter],
        ['mask', props.mask],
        ['transform', props.transform],

        ['vector-effect', props.vectorEffect],
        ['shape-rendering', props.shapeRendering],

        ['clip-path', props.clipPath],
        ['clip-rule', props.clipRule],

        ['opacity', props.opacity],
        ['visibility', props.visibility],
    ];
};
