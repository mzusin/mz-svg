import { IPrimitiveShapeProps } from '../interfaces';
/**
 * SVG namespace that is defined in SVG v1.0 Specification
 * and subsequently added to by SVG 1.1, SVG 1.2 and SVG 2
 */
export declare const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
export declare const XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
export declare const DEFAULT_DECIMAL_PLACES = 2;
export interface ICreateSVGProps extends IPrimitiveShapeProps {
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
    preserveAspectRatio?: string;
    viewBox?: string;
    autoViewBox?: boolean;
}
/**
 * Create new SVG element in browser or Node.js environment.
 * In case of Node.js, JSDom document can be provided.
 */
export declare const createSVG: (props?: ICreateSVGProps) => SVGSVGElement;
/**
 * Create SVG document from string
 */
export declare const createSVGFromString: (props: {
    document?: Document;
    svg: string;
}) => SVGSVGElement;
export declare const getSVGAsString: ($svg: SVGSVGElement) => string;
export declare const setAttributes: ($svgElement: SVGElement, attr: [string, string | number | undefined][]) => void;
export declare const getCommonAttributes: (props?: IPrimitiveShapeProps) => [string, string | number | undefined][];
