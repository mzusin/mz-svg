import { IPrimitiveShapeProps } from '../interfaces';
export interface ICreateGroupProps extends IPrimitiveShapeProps {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
}
export declare const createGroup: (props?: ICreateGroupProps) => SVGGElement;
export declare const createDefs: (props?: {
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
export declare const createUse: (props?: ICreateUseProps) => SVGUseElement;
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
export declare const createPattern: (props?: ICreatePatternProps) => SVGPatternElement;
export interface ICreateClipPathProps extends IPrimitiveShapeProps {
    clipPathUnits?: string;
}
export declare const createClipPath: (props?: ICreateClipPathProps) => SVGClipPathElement;
export interface ICreateMaskProps extends IPrimitiveShapeProps {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    maskContentUnits?: string;
    maskUnits?: string;
}
export declare const createMask: (props?: ICreateMaskProps) => SVGMaskElement;
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
export declare const createSymbol: (props?: ICreateSymbolProps) => SVGSymbolElement;
