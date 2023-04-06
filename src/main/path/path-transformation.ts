import { parseD } from './parse-path-data';

/**
 * SVG paths transformations that works with 'path data' - https://www.w3.org/TR/SVG11/paths.html#PathData
 */
export const transformPath = (props?: {
    d?: string;
    $path?: SVGPathElement;
}) : null|string|SVGPathElement => {

    // if no path props is provided ---> null
    if(!props || (!props.d && !props.$path)) return null;

    // if both $path and d are provided ---> $path has more priority
    let d = props.$path?.getAttribute('d') ?? props.d;
    if(!d) return null;

    parseD(d);

    if(props.$path) return props.$path;
    return d;
};