declare module 'mz-svg' {

    export const createSVG: (props: {
        width: number;
        height: number;
        document?: Document;
    }) => SVGSVGElement;

    export const createSVGFromString: (props: {
        document?: Document;
        svg: string;
    }) => SVGSVGElement;

    export const getSVGAsString: ($svg: SVGSVGElement) => string;

    export const saveSVG: (props: {
        absOutFilePath: string;
        $svg?: SVGSVGElement;
        svgString?: string;
    }) => void;

    export const download: (props: {
        $svg?: SVGSVGElement;
        svgString?: string;
        outfileName?: string;
        ext?: string;
    }) => Promise<{
        isError: boolean;
        msg?: string | undefined;
    }>;

    export const createPath: (props: {
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

    export const createRect: (props: {
        document?: Document;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        rx?: number | string;
        ry?: number | string;
        id?: string;
        classes?: string;
        style?: string;
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
    }) => SVGRectElement;

    export const createCircle: (props: {
        document?: Document;
        cx?: string | number;
        cy?: string | number;
        r?: string | number;
        id?: string;
        classes?: string;
        style?: string;
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
    }) => SVGCircleElement;

    export const createEllipse: (props: {
        document?: Document;
        cx?: string | number;
        cy?: string | number;
        rx?: string | number;
        ry?: string | number;
        id?: string;
        classes?: string;
        style?: string;
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
    }) => SVGEllipseElement;

    export const createLine: (props: {
        document?: Document;
        x1?: string | number;
        y1?: string | number;
        x2?: string | number;
        y2?: string | number;
        id?: string;
        classes?: string;
        style?: string;
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
    }) => SVGLineElement;

    export const createStar: (props: {
        document?: Document;
        raysNumber: number;
        centerX: number;
        centerY: number;
        outerRadius: number;
        innerRadius: number;
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


    export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
}