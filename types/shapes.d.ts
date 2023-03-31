/**
 * Create SVG path.
 */
export declare const createPath: (props: {
    document?: Document;
    id?: string;
    classes?: string;
    style?: string;
    d?: string;
    pathLength?: string | number;
    stroke?: string;
    strokeWidth?: number | string;
    strokeOpacity?: number | string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeDasharray?: string;
    strokeDashoffset?: number | string;
    strokeMiterlimit?: number | string;
    fill?: string;
    fillOpacity?: number | string;
    fillRule?: string;
    filter?: string;
    mask?: string;
    transform?: string;
    vectorEffect?: string;
    shapeRendering?: string;
    clipPath?: string;
    clipRule?: string;
    opacity?: string | number;
    visibility?: string;
}) => SVGPathElement;
/**
 * Create SVG rectangle.
 */
export declare const createRect: (props: {
    document?: Document;
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height: number | string;
    stroke?: string;
    strokeWidth?: number | string;
    fill?: string;
    rx?: number | string;
    ry?: number | string;
}) => SVGRectElement;
/**
 * Create SVG circle.
 */
export declare const createCircle: (props: {
    document?: Document;
    cx?: string | number;
    cy?: string | number;
    r?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
    fill?: string;
}) => SVGCircleElement;
/**
 * Create SVG ellipse.
 */
export declare const createEllipse: (props: {
    document?: Document;
    cx?: string | number;
    cy?: string | number;
    rx?: string | number;
    ry?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
    fill?: string;
}) => SVGEllipseElement;
/**
 * Create SVG line.
 */
export declare const createLine: (props: {
    document?: Document;
    x1?: string | number;
    y1?: string | number;
    x2?: string | number;
    y2?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
    strokeLinecap?: string;
    strokeLinejoin?: string;
}) => SVGLineElement;
