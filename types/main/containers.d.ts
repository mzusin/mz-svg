import { IPrimitiveShapeProps } from '../interfaces';
export declare const createGroup: (props: IPrimitiveShapeProps) => SVGGElement;
export declare const createDefs: (props?: {
    document?: Document;
    id?: string;
    classes?: string;
}) => SVGDefsElement;
export declare const createUse: (props?: {
    document?: Document;
    href?: string;
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    id?: string;
    classes?: string;
}) => SVGUseElement;
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
export declare const createPattern: (props: ICreatePatternProps) => SVGPatternElement;
