import { SVG_NAMESPACE } from './core';

/**
 * Create SVG path.
 */
export const createPath = (props: {
    document?: Document;
    d: string;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    strokeLinecap?: string; // 'round'
    strokeLinejoin?: string;
    vectorEffect?: string; // 'non-scaling-stroke' - used to disable line scale
}) : SVGPathElement => {

    const {
        document: _document,
        d: _d,
        stroke,
        strokeWidth,
        fill,
        strokeLinecap,
        strokeLinejoin,
        vectorEffect,
    } = props;

    const doc = _document || window.document;

    const $path = doc.createElementNS(SVG_NAMESPACE, 'path');

    // remove newlines and double spaces
    const d = _d.replace(/\s\s+/g, ' ');

    $path.setAttribute('d', d);

    $path.setAttribute('fill', fill ? fill : 'none');

    if(stroke){
        $path.setAttribute('stroke', stroke);
    }

    if(strokeWidth) {
        $path.setAttribute('stroke-width', strokeWidth.toString());
    }

    if(strokeLinecap){
        $path.setAttribute('stroke-linecap', strokeLinecap);
    }

    if(strokeLinejoin){
        $path.setAttribute('stroke-linejoin', strokeLinejoin);
    }

    if(vectorEffect) {
        $path.setAttribute('vector-effect', vectorEffect);
    }

    return $path;
};

/**
 * Create SVG rectangle.

export const createRect = (props: {
    document?: Document;
}) => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;
}; */

/**
 * Create SVG circle.

export const createCircle = (props: {
    document?: Document;
}) => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;
}; */

/**
 * Create SVG ellipse.

export const createEllipse = (props: {
    document?: Document;
}) => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;
}; */

/**
 * Create SVG line.

export const createLine = (props: {
    document?: Document;
}) => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;
}; */

/**
 * Create SVG parabola.

export const createParabola = (props: {
    document?: Document;
}) => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;
}; */