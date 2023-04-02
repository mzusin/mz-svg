import { setAttributes, SVG_NAMESPACE } from './core';

export const createPattern = (props: {
    document?: Document;

    x?: string|number;
    y?: string|number;
    width?: string|number;
    height?: string|number;

    href?: string;
    patternContentUnits?: string|number;
    patternTransform?: string;
    patternUnits?: string;
    preserveAspectRatio?: string;
    viewBox?: string;

    // ------------------

    id?: string;
    classes?: string;
    style?: string;

    clipPath?: string;
    clipRule?: string;

    fill?: string;
    fillOpacity?: number|string;
    fillRule?: string;

    filter?: string;
    mask?: string;
    transform?: string;

    vectorEffect?: string; // 'non-scaling-stroke' - used to disable line scale
    shapeRendering?: string;

    opacity?: string|number;
    visibility?: string;

    stroke?: string;
    strokeWidth?: number|string;
    strokeOpacity?: number|string;
    strokeLinecap?: string; // 'round'
    strokeLinejoin?: string;
    strokeDasharray?: string;
    strokeDashoffset?: number|string;
    strokeMiterlimit?: number|string;
}) : SVGPatternElement => {

    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $pattern = doc.createElementNS(SVG_NAMESPACE, 'pattern');

    setAttributes($pattern, [
        ['x', props.x],
        ['y', props.y],
        ['width', props.width],
        ['height', props.height],

        ['href', props.href],
        ['patternContentUnits', props.patternContentUnits],
        ['patternTransform', props.patternTransform],
        ['patternUnits', props.patternUnits],
        ['preserveAspectRatio', props.preserveAspectRatio],
        ['viewBox', props.viewBox],

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
    ]);

    return $pattern;
};