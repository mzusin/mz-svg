import { createPath } from './primitive-shapes';

export const getRectPathD = (props: {
    x: number,
    y: number,
    width: number,
    height: number,
    rx?: number,
    ry?: number,
}) => {
    const {
        x, y,
        width, height,
        rx: _rx,
        ry: _ry,
    } = props;

    const rx = _rx || 0;
    const ry = _ry || 0;

    if (rx || ry){

        const top1 = `${ x } ${ y }`;
        const top2 = `${ x + rx } ${ y }`;
        const top3 = `${ x + width - rx } ${ y }`;
        const top4 = `${ x + width } ${ y }`;

        const right1 = `${ x + width } ${ y + ry }`;
        const right2 = `${ x + width } ${ y + height - ry }`;

        const bottom1 = `${ x + width } ${ y + height }`;
        const bottom2 = `${ x + width - rx } ${ y + height }`;
        const bottom3 = `${ x + rx } ${ y + height }`;
        const bottom4 = `${ x } ${ y + height }`;

        const left1 = `${ x } ${ y + height - ry }`;
        const left2 = `${ x } ${ y + ry }`;

        return `
            M${ top2 } 
            L${ top3 }
            C${ top3 } ${ top4 } ${ right1 } 
            L${ right2 } 
            C${ right2 } ${ bottom1 } ${ bottom2 } 
            L${ bottom3 } 
            C${ bottom3 } ${ bottom4 } ${ left1 } 
            L${ left2 } 
            C${ left2 } ${ top1 } ${ top2 } Z`.replace(/\s\s+/g, ' ').trim();
    }

    return `M${ x + width } ${ y } L${ x + width } ${ height + y } L${ x } ${ height + y } L${ x } ${ y } L${ x + width } ${ y } Z`;
};

export const createRectPath = (props: {
    document?: Document;
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;

    // -------------------------

    id?: string;
    classes?: string;
    style?: string;

    pathLength?: string|number;

    stroke?: string;
    strokeWidth?: number|string;
    strokeOpacity?: number|string;
    strokeLinecap?: string; // 'round'
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
}) : SVGPathElement => {

    const pathProps = {
        ...props,
        d: getRectPathD({
            x: props.x,
            y: props.y,
            width: props.width,
            height: props.height,
            rx: props.rx,
            ry: props.ry,
        }),
    };

    return createPath(pathProps);
};