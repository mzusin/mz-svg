export interface IPrimitiveShapeProps {
    document?: Document;

    id?: string;
    classes?: string;
    style?: string;

    stroke?: string;
    strokeWidth?: number|string;
    strokeOpacity?: number|string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeDasharray?: string;
    strokeDashoffset?: number|string;
    strokeMiterlimit?: number|string;

    fill?: string;
    fillOpacity?: number|string;
    fillRule?: string;

    filter?: string;
    mask?: string;
    transform?: string;

    vectorEffect?: string; // 'non-scaling-stroke' - used to disable line scale
    shapeRendering?: string;

    clipPath?: string;
    clipRule?: string;

    opacity?: string|number;
    visibility?: string;
}