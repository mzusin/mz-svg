import { setAttributes, SVG_NAMESPACE } from './core';

/**
 * Create SVG path.
 */
export const createPath = (props: {
    document?: Document;
    id?: string;
    d?: string;
    stroke?: string;
    strokeWidth?: number|string;
    fill?: string;
    strokeLinecap?: string; // 'round'
    strokeLinejoin?: string;
    vectorEffect?: string; // 'non-scaling-stroke' - used to disable line scale
    pathLength?: string|number;
}) : SVGPathElement => {

    const {
        document: _document,
        id,
        d: _d,
        stroke,
        strokeWidth,
        fill,
        strokeLinecap,
        strokeLinejoin,
        vectorEffect,
        pathLength
    } = props;

    const doc = _document || window.document;

    const $path = doc.createElementNS(SVG_NAMESPACE, 'path');

    if(_d){
        // remove newlines and double spaces
        const d = _d.replace(/\s\s+/g, ' ');

        $path.setAttribute('d', d);
    }

    setAttributes($path, [
        ['id', id],
        ['d', _d],
        ['fill', fill],
        ['stroke', stroke],
        ['stroke-width', strokeWidth],
        ['stroke-linecap', strokeLinecap],
        ['stroke-linejoin', strokeLinejoin],
        ['vector-effect', vectorEffect],
        ['pathLength', pathLength]
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
    height: number|string;
    stroke?: string;
    strokeWidth?: number|string;
    fill?: string;
    rx?: number|string;
    ry?: number|string;
}) : SVGRectElement => {
    const {
        document: _document,
        x, y, rx, ry,
        width, height,
        stroke, strokeWidth,
        fill,
    } = props;

    const doc = _document || window.document;

    const $rect = doc.createElementNS(SVG_NAMESPACE, 'rect');

    setAttributes($rect, [
        ['x', x],
        ['y', y],
        ['rx', rx],
        ['ry', ry],
        ['width', width],
        ['height', height],
        ['fill', fill],
        ['stroke', stroke],
        ['stroke-width', strokeWidth],
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
    stroke?: string;
    strokeWidth?: string|number;
    fill?: string;
}) : SVGCircleElement => {
    const {
        document: _document,
        cx, cy, r,
        stroke, strokeWidth, fill,
    } = props;

    const doc = _document || window.document;

    const $circle = doc.createElementNS(SVG_NAMESPACE, 'circle');

    setAttributes($circle, [
        ['cx', cx],
        ['cy', cy],
        ['r', r],
        ['fill', fill],
        ['stroke', stroke],
        ['stroke-width', strokeWidth],
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
    stroke?: string;
    strokeWidth?: string|number;
    fill?: string;
}) : SVGEllipseElement => {
    const {
        document: _document,
        cx, cy, rx, ry,
        stroke, strokeWidth, fill,
    } = props;

    const doc = _document || window.document;

    const $ellipse = doc.createElementNS(SVG_NAMESPACE, 'ellipse');

    setAttributes($ellipse, [
        ['cx', cx],
        ['cy', cy],
        ['rx', rx],
        ['ry', ry],
        ['fill', fill],
        ['stroke', stroke],
        ['stroke-width', strokeWidth],
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
    stroke?: string;
    strokeWidth?: string|number;
    strokeLinecap?: string; // 'round'
    strokeLinejoin?: string;
}) : SVGLineElement => {
    const {
        document: _document,
        x1, y1, x2, y2,
        stroke, strokeWidth,
        strokeLinecap, strokeLinejoin
    } = props;

    const doc = _document || window.document;

    const $line = doc.createElementNS(SVG_NAMESPACE, 'line');

    setAttributes($line, [
        ['x1', x1],
        ['x2', x2],
        ['y1', y1],
        ['y2', y2],
        ['stroke', stroke],
        ['stroke-width', strokeWidth],
        ['stroke-linecap', strokeLinecap],
        ['stroke-linejoin', strokeLinejoin],
    ]);

    return $line;
};
