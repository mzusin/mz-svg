export interface ICreateAnimateProps {
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
    repeatCount?: string;
    repeatDur?: string;
    fill?: string;
    calcMode?: string;
    values?: string;
    keyTimes?: string;
    keySplines?: string;
    from?: string;
    to?: string;
    by?: string;
    attributeName?: string;
    additive?: string;
    accumulate?: string;
}
/**
 * Create <animate> element.
 */
export declare const createAnimate: (props?: ICreateAnimateProps) => SVGAnimateElement;
