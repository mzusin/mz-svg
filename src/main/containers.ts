import { getCommonAttributes, setAttributes, SVG_NAMESPACE } from './core';
import { IPrimitiveShapeProps } from '../interfaces';

export interface ICreateGroupProps extends IPrimitiveShapeProps{
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;
}

export const createGroup = (props?: ICreateGroupProps) : SVGGElement => {
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

export interface ICreateUseProps extends IPrimitiveShapeProps{
    href?: string;
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;
}

export const createUse = (props?: ICreateUseProps) : SVGUseElement => {

    const doc = props?.document || window.document;
    const $use = doc.createElementNS(SVG_NAMESPACE, 'use');

    setAttributes($use, [
        ['href', props?.href],
        ['x', props?.x],
        ['y', props?.y],
        ['width', props?.width],
        ['height', props?.height],
        ...getCommonAttributes(props),
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

export const createPattern = (props?: ICreatePatternProps) : SVGPatternElement => {
    const doc = props?.document || window.document;
    const $pattern = doc.createElementNS(SVG_NAMESPACE, 'pattern');

    setAttributes($pattern, [
        ['x', props?.x],
        ['y', props?.y],
        ['width', props?.width],
        ['height', props?.height],

        ['href', props?.href],
        ['patternContentUnits', props?.patternContentUnits],
        ['patternTransform', props?.patternTransform],
        ['patternUnits', props?.patternUnits],
        ['preserveAspectRatio', props?.preserveAspectRatio],
        ['viewBox', props?.viewBox],

        ...getCommonAttributes(props),
    ]);

    return $pattern;
};

export interface ICreateClipPathProps extends IPrimitiveShapeProps{
    clipPathUnits?: string;
}

export const createClipPath = (props?: ICreateClipPathProps) : SVGClipPathElement => {

    const doc = props?.document || window.document;
    const $clipPath = doc.createElementNS(SVG_NAMESPACE, 'clipPath');

    setAttributes($clipPath, [
        ['clipPathUnits', props?.clipPathUnits],
        ...getCommonAttributes(props),
    ]);

    return $clipPath;
};

export interface ICreateMaskProps extends IPrimitiveShapeProps{
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;
    maskContentUnits?: string;
    maskUnits?: string;
}

export const createMask = (props?: ICreateMaskProps) : SVGMaskElement => {

    const doc = props?.document || window.document;
    const $mask = doc.createElementNS(SVG_NAMESPACE, 'mask');

    setAttributes($mask, [
        ['x', props?.x],
        ['y', props?.y],
        ['width', props?.width],
        ['height', props?.height],
        ['maskContentUnits', props?.maskContentUnits],
        ['maskUnits', props?.maskUnits],
        ...getCommonAttributes(props),
    ]);

    return $mask;
};

export interface ICreateSymbolProps extends IPrimitiveShapeProps{
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;
    preserveAspectRatio?: string;
    refX?: number|string;
    refY?: number|string;
    viewBox?: string;
}

export const createSymbol = (props?: ICreateSymbolProps) : SVGSymbolElement => {

    const doc = props?.document || window.document;
    const $symbol = doc.createElementNS(SVG_NAMESPACE, 'symbol');

    setAttributes($symbol, [
        ['x', props?.x],
        ['y', props?.y],
        ['width', props?.width],
        ['height', props?.height],

        ['preserveAspectRatio', props?.preserveAspectRatio],
        ['refX', props?.refX],
        ['refY', props?.refY],
        ['viewBox', props?.viewBox],

        ...getCommonAttributes(props),
    ]);

    return $symbol;
};