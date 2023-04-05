import { getCommonAttributes, setAttributes, SVG_NAMESPACE } from './core';
import { IPrimitiveShapeProps } from '../interfaces';

export const createGroup = (props: IPrimitiveShapeProps) : SVGGElement => {

    const {
        document: _document,
    } = props;

    const doc = _document || window.document;
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