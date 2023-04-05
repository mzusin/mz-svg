import { getCommonAttributes, setAttributes, SVG_NAMESPACE } from '../core';

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
        ['d', _d],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
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
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
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
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
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
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
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
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $line;
};

/**
 * Create SVG polygon.
 */
export const createPolygon = (props: {
    document?: Document;

    id?: string;
    classes?: string;
    style?: string;

    points?: string;
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

}) : SVGPolygonElement => {

    const {
        document: _document
    } = props;

    const doc = _document || window.document;

    const $polygon = doc.createElementNS(SVG_NAMESPACE, 'polygon');

    setAttributes($polygon, [
        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],
        ['points', props.points],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $polygon;
};
