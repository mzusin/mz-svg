export interface IAnimationProps {
    document?: Document;
    id?: string;
    classes?: string;
    style?: string;
    begin?: string;
    dur?: string;
    end?: string;
    min?: string;
    max?: string;
    restart?: string;
    repeatCount?: number | string;
    repeatDur?: string;
    fill?: string;
    calcMode?: string;
    values?: string;
    keyTimes?: string;
    keySplines?: string;
    from?: number | string;
    to?: number | string;
    by?: number | string;
    attributeName?: string;
    additive?: string;
    accumulate?: string;
}
export declare const getCommonAnimationAttributes: (props?: IAnimationProps) => [string, string | number | undefined][];
/**
 * Create <animate> element.
 */
export declare const createAnimate: (props?: IAnimationProps) => SVGAnimateElement;
export interface ICreateAnimateMotionProps extends IAnimationProps {
    keyPoints?: string;
    path?: string | number;
    rotate?: string | number;
}
/**
 * Create <animateMotion> element.
 */
export declare const createAnimateMotion: (props?: ICreateAnimateMotionProps) => SVGAnimateMotionElement;
export interface ICreateAnimateTransformProps extends IAnimationProps {
    type?: string;
    attributeType?: string;
}
/**
 * Create <animateTransform> element.
 */
export declare const createAnimateTransform: (props?: ICreateAnimateTransformProps) => SVGAnimateTransformElement;
export interface ICreateMPathProps {
    document?: Document;
    id?: string;
    classes?: string;
    xlinkHref?: string;
}
/**
 * Create <mpath> element.
 */
export declare const createMPath: (props?: ICreateMPathProps) => SVGMPathElement;
