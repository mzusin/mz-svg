import { getCommonAttributes, setAttributes, SVG_NAMESPACE } from './core';
import { IPrimitiveShapeProps } from '../interfaces';

export const createGroup = (props: IPrimitiveShapeProps) : SVGGElement => {
    const doc = props?.document || window.document;
    const $g = doc.createElementNS(SVG_NAMESPACE, 'g');

    setAttributes($g, [
        ...getCommonAttributes(props),
    ]);

    return $g;
};

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

export const createUse = (props?: {
    document?: Document;

    href?: string;
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;

    id?: string;
    classes?: string;
}) : SVGUseElement => {

    const doc = props?.document || window.document;
    const $use = doc.createElementNS(SVG_NAMESPACE, 'use');

    setAttributes($use, [
        ['id', props?.id],
        ['class', props?.classes],
        ['href', props?.href],
        ['x', props?.x],
        ['y', props?.y],
        ['width', props?.width],
        ['height', props?.height],
    ]);

    return $use;
};

export interface ICreatePatternProps extends IPrimitiveShapeProps{
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
}

export const createPattern = (props: ICreatePatternProps) : SVGPatternElement => {

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