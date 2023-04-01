import { setAttributes, SVG_NAMESPACE } from '../core';

/**
 * Create SVG path.
 */
export const createPath = (props: {
    document?: Document;

    id?: string;
    classes?: string;
    style?: string;

    d?: string;
    pathLength?: string|number;

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

}) : SVGPathElement => {

    const {
        document: _document,
        d: _d,
    } = props;

    const doc = _document || window.document;

    const $path = doc.createElementNS(SVG_NAMESPACE, 'path');

    if(_d){
        // remove newlines and double spaces
        const d = _d.replace(/\s\s+/g, ' ');

        $path.setAttribute('d', d);
    }

    setAttributes($path, [
        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],

        ['d', _d],
        ['pathLength', props.pathLength],

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
    ]);

    return $path;
};

/**
 * Create SVG rectangle.
 */
export const createRect = (props: {
    document?: Document;
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;
    rx?: number|string;
    ry?: number|string;

    // -------------------------
    id?: string;
    classes?: string;
    style?: string;

    pathLength?: string|number;

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
}) : SVGRectElement => {
    const {
        document: _document
    } = props;

    const doc = _document || window.document;

    const $rect = doc.createElementNS(SVG_NAMESPACE, 'rect');

    setAttributes($rect, [
        ['x', props.x],
        ['y', props.y],
        ['rx', props.rx],
        ['ry', props.ry],
        ['width', props.width],
        ['height', props.height],

        // ------------------

        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],

        ['pathLength', props.pathLength],

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
    ]);

    return $rect;
};

/**
 * Create SVG circle.
 */
export const createCircle = (props: {
    document?: Document;
    cx?: string|number;
    cy?: string|number;
    r?: string|number;

    // -------------------------
    id?: string;
    classes?: string;
    style?: string;

    pathLength?: string|number;

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
}) : SVGCircleElement => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $circle = doc.createElementNS(SVG_NAMESPACE, 'circle');

    setAttributes($circle, [
        ['cx', props.cx],
        ['cy', props.cy],
        ['r', props.r],

        // ------------------

        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],

        ['pathLength', props.pathLength],

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
    ]);

    return $circle;
};

/**
 * Create SVG ellipse.
 */
export const createEllipse = (props: {
    document?: Document;
    cx?: string|number;
    cy?: string|number;
    rx?: string|number;
    ry?: string|number;

    // -------------------------
    id?: string;
    classes?: string;
    style?: string;

    pathLength?: string|number;

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
}) : SVGEllipseElement => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $ellipse = doc.createElementNS(SVG_NAMESPACE, 'ellipse');

    setAttributes($ellipse, [
        ['cx', props.cx],
        ['cy', props.cy],
        ['rx', props.rx],
        ['ry', props.ry],

        // ------------------

        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],

        ['pathLength', props.pathLength],

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
    ]);

    return $ellipse;
};

/**
 * Create SVG line.
 */
export const createLine = (props: {
    document?: Document;
    x1?: string|number;
    y1?: string|number;
    x2?: string|number;
    y2?: string|number;

    // -------------------------
    id?: string;
    classes?: string;
    style?: string;

    pathLength?: string|number;

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
}) : SVGLineElement => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $line = doc.createElementNS(SVG_NAMESPACE, 'line');

    setAttributes($line, [
        ['x1', props.x1],
        ['x2', props.x2],
        ['y1', props.y1],
        ['y2', props.y2],

        // ------------------

        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],

        ['pathLength', props.pathLength],

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
    ]);

    return $line;
};
