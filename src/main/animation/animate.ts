import { setAttributes, SVG_NAMESPACE } from '../core';

export interface ICreateAnimateProps{
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

/**
 * Create <animate> element.
 */
export const createAnimate = (props?: ICreateAnimateProps) : SVGAnimateElement => {

    const doc = props?.document || window.document;

    const $animate = doc.createElementNS(SVG_NAMESPACE, 'animate');

    setAttributes($animate, [
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
    ]);

    return $animate;
};