import { setAttributes, SVG_NAMESPACE } from '../core';

export interface IAnimationProps{
    document?: Document;

    id?: string;
    classes?: string;
    style?: string;

    // Animation timing attributes
    begin?: string;
    dur?: string;
    end?: string;
    min?: string;
    max?: string;
    restart?: string;
    repeatCount?: number|string;
    repeatDur?: string;
    fill?: string;

    // Animation value attributes
    calcMode?: string;
    values?: string;
    keyTimes?: string;
    keySplines?: string;
    from?: number|string;
    to?: number|string;
    by?: number|string;

    // Other Animation attributes
    attributeName?: string;
    additive?: string;
    accumulate?: string;
}

export const getCommonAnimationAttributes = (props?: IAnimationProps) : [string, string|number|undefined][] => {

    if(!props) return [];

    return [
        ['id', props?.id],
        ['class', props?.classes],
        ['style', props?.style],

        // Animation timing attributes
        ['begin', props?.begin],
        ['dur', props?.dur],
        ['end', props?.end],
        ['min', props?.min],
        ['max', props?.max],
        ['restart', props?.restart],
        ['repeatCount', props?.repeatCount],
        ['repeatDur', props?.repeatDur],
        ['fill', props?.fill],

        // Animation value attributes
        ['calcMode', props?.calcMode],
        ['values', props?.values],
        ['keyTimes', props?.keyTimes],
        ['keySplines', props?.keySplines],
        ['from', props?.from],
        ['to', props?.to],
        ['by', props?.by],

        // Other Animation attributes
        ['attributeName', props?.attributeName],
        ['additive', props?.additive],
        ['accumulate', props?.accumulate],
    ];
};

/**
 * Create <animate> element.
 */
export const createAnimate = (props?: IAnimationProps) : SVGAnimateElement => {

    const doc = props?.document || window.document;

    const $animate = doc.createElementNS(SVG_NAMESPACE, 'animate');

    setAttributes($animate, [
        ...getCommonAnimationAttributes(props),
    ]);

    return $animate;
};

export interface ICreateAnimateMotionProps extends IAnimationProps{
    keyPoints?: string;
    path?: string|number;
    rotate?: string|number;
}

/**
 * Create <animateMotion> element.
 */
export const createAnimateMotion = (props?: ICreateAnimateMotionProps) : SVGAnimateMotionElement => {

    const doc = props?.document || window.document;

    const $animateMotion = doc.createElementNS(SVG_NAMESPACE, 'animateMotion');

    setAttributes($animateMotion, [
        ['keyPoints', props?.keyPoints],
        ['path', props?.path],
        ['rotate', props?.rotate],
        ...getCommonAnimationAttributes(props),
    ]);

    return $animateMotion;
};