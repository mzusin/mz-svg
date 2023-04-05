import { getCommonAttributes, setAttributes, SVG_NAMESPACE } from './core';

export const createDefs = (props?: {
    document?: Document;
    id?: string;
    classes?: string;
}) : SVGDefsElement => {

    const doc = props?.document || window.document;

    const $defs = doc.createElementNS(SVG_NAMESPACE, 'defs');

    setAttributes($defs, [
        ['id', props?.id],
        ['class', props?.classes],
    ]);

    return $defs;
};

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

        ...getCommonAttributes(props),
    ]);

    return $pattern;
};