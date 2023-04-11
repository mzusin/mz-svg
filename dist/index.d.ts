declare module 'mz-svg' {

    export interface IPrimitiveShapeProps {
        document?: Document;
        id?: string;
        classes?: string;
        style?: string;
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
    }

    export interface ICreateSVGProps extends IPrimitiveShapeProps {
        x?: string | number;
        y?: string | number;
        width?: string | number;
        height?: string | number;
        preserveAspectRatio?: string;
        viewBox?: string;
        autoViewBox?: boolean;
    }

    export const createSVG: (props?: ICreateSVGProps) => SVGSVGElement;

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

    export interface ICreatePathProps extends IPrimitiveShapeProps {
        d?: string;
        pathLength?: string | number;
    }
    export const createPath: (props: ICreatePathProps) => SVGPathElement;
    export interface ICreateRectProps extends IPrimitiveShapeProps {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        rx?: number | string;
        ry?: number | string;
        pathLength?: string | number;
    }
    export const createRect: (props: ICreateRectProps) => SVGRectElement;

    export const getRectPathD: (props: {
        x: number;
        y: number;
        width: number;
        height: number;
        rx?: number;
        ry?: number;
    }) => string;

    export interface ICreateRectPathProps extends IPrimitiveShapeProps {
        x: number;
        y: number;
        width: number;
        height: number;
        rx?: number;
        ry?: number;
    }
    export const createRectPath: (props: ICreateRectPathProps) => SVGPathElement;

    export interface ICreateCircleProps extends IPrimitiveShapeProps {
        cx?: string | number;
        cy?: string | number;
        r?: string | number;
        pathLength?: string | number;
    }
    export const createCircle: (props: ICreateCircleProps) => SVGCircleElement;
    export interface ICreateEllipseProps extends IPrimitiveShapeProps {
        cx?: string | number;
        cy?: string | number;
        rx?: string | number;
        ry?: string | number;
        pathLength?: string | number;
    }
    export const createEllipse: (props: ICreateEllipseProps) => SVGEllipseElement;
    export interface ICreateLineProps extends IPrimitiveShapeProps {
        x1?: string | number;
        y1?: string | number;
        x2?: string | number;
        y2?: string | number;
        pathLength?: string | number;
    }
    export const createLine: (props: ICreateLineProps) => SVGLineElement;
    export interface ICreatePolygonProps extends IPrimitiveShapeProps {
        points?: string;
        pathLength?: string | number;
    }
    export const createPolygon: (props: ICreatePolygonProps) => SVGPolygonElement;

    export interface ICreatePolylineProps extends IPrimitiveShapeProps {
        points?: string;
        pathLength?: string | number;
    }

    export interface ICreateFlowerProps extends IPrimitiveShapeProps {
        petalsNumber: number;
        centerX: number;
        centerY: number;
        outerRadius: number;
        innerRadius: number;
        decimalPlaces?: number;
        pathLength?: string | number;
    }
    export const createFlower: (props: ICreateFlowerProps) => SVGPathElement;

    export const createPolyline: (props: ICreatePolygonProps) => SVGPolylineElement;

    export interface ICreateStarProps extends IPrimitiveShapeProps {
        raysNumber: number;
        centerX: number;
        centerY: number;
        outerRadius: number;
        innerRadius: number;
        decimalPlaces?: number;
        pathLength?: string | number;
        type?: number;
    }
    export const createStar: (props: ICreateStarProps) => SVGPathElement;
    export const createStar1: (props: ICreateStarProps) => SVGPathElement;
    export const createStar2: (props: ICreateStarProps) => SVGPathElement;
    export const createStar3: (props: ICreateStarProps) => SVGPathElement;


    export const createGroup: (props: IPrimitiveShapeProps) => SVGGElement;

    export interface ICreatePatternProps extends IPrimitiveShapeProps {
        x?: string | number;
        y?: string | number;
        width?: string | number;
        height?: string | number;
        href?: string;
        patternContentUnits?: string | number;
        patternTransform?: string;
        patternUnits?: string;
        preserveAspectRatio?: string;
        viewBox?: string;
    }
    export const createPattern: (props: ICreatePatternProps) => SVGPatternElement;

    export interface ICreateClipPathProps extends IPrimitiveShapeProps {
        clipPathUnits?: string;
    }

    export const createClipPath: (props?: ICreateClipPathProps) => SVGClipPathElement;

    export const createDefs: (props: {
        document?: Document;
        id?: string;
        classes?: string;
    }) => SVGDefsElement;

    export interface ICreateUseProps extends IPrimitiveShapeProps {
        href?: string;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    }
    export const createUse: (props?: ICreateUseProps) => SVGUseElement;

    export interface ICreateMaskProps extends IPrimitiveShapeProps {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        maskContentUnits?: string;
        maskUnits?: string;
    }
    export const createMask: (props?: ICreateMaskProps) => SVGMaskElement;

    export interface ICreateSymbolProps extends IPrimitiveShapeProps {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        preserveAspectRatio?: string;
        refX?: number | string;
        refY?: number | string;
        viewBox?: string;
    }
    export const createSymbol: (props?: ICreateSymbolProps) => SVGSymbolElement;

    export const appendOnce: ($parent: SVGSVGElement | SVGElement, $el: SVGElement) => void;
    export const prependOnce: ($parent: SVGSVGElement | SVGElement, $el: SVGElement) => void;

    export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    export const XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';

    export interface IPathDataError {
        line: number;
        col: number;
        msg: string;
    }

    export interface IPathDataToken {
        tokenType: string;
        value?: string | number;
        line: number;
        col: number;
    }

    export interface IPathDataScanResult {
        tokens: IPathDataToken[];
        errors: IPathDataError[];
    }

    export interface IPathDataCommand {
        command: EPathDataCommand;
        params: number[];
    }

    export interface IPathData {
        commands: IPathDataCommand[];
        errors: IPathDataError[];
    }
    export enum EPathDataCommand {
        MoveToAbs = "M",
        MoveToRel = "m",
        ClosePathAbs = "Z",
        ClosePathRel = "z",
        LineToAbs = "L",
        LineToRel = "l",
        LineToHorizontalAbs = "H",
        LineToHorizontalRel = "h",
        LineToVerticalAbs = "V",
        LineToVerticalRel = "v",
        CubicCurveToAbs = "C",
        CubicCurveToRel = "c",
        CubicCurveToSmoothAbs = "S",
        CubicCurveToSmoothRel = "s",
        QuadraticCurveToAbs = "Q",
        QuadraticCurveToRel = "q",
        QuadraticCurveToSmoothAbs = "T",
        QuadraticCurveToSmoothRel = "t",
        ArcAbs = "A",
        ArcRel = "a"
    }

    export const isPathValid: (d?: string) => boolean;
    export const parsePath: (d?: string) => IPathData;
    export const pathToRel: (d?: string, beautify?: boolean, decimalPlaces?: number) => string | undefined;
    export const pathToAbs: (d?: string, beautify?: boolean, decimalPlaces?: number) => string | undefined;
    export const minifyPath: (d?: string, decimalPlaces?: number) => string | undefined;
    export const beautifyPath: (d?: string, decimalPlaces?: number) => string | undefined;
}