import { createPath } from './primitive-shapes';

export const createStar = (props: {
    document?: Document;
    raysNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;

    // --------------------

    id?: string;
    classes?: string;
    style?: string;

    d?: string;
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

    const {
        raysNumber,
        centerX, centerY,
        outerRadius, innerRadius,
    } = props;

    const dots: [number, number][] = [];

    const angleDiff = 2 * Math.PI / 5;
    const halfAngle = angleDiff / 2;

    for(let i= 0, angle= 1.5 * Math.PI; i<raysNumber; i++, angle+=angleDiff){
        // outer circle
        dots.push([
            centerX + Math.cos(angle) * outerRadius,
            centerY + Math.sin(angle) * outerRadius
        ]);

        // inner circle
        dots.push([
            centerX + Math.cos(angle + halfAngle) * innerRadius,
            centerY + Math.sin(angle + halfAngle) * innerRadius,
        ]);
    }

    let d = `M ${dots[0][0]},${dots[0][1]} `;
    d += dots.map(dot => ` L ${dot[0]},${dot[1]} `);
    d += 'Z';

    const pathProps = {
        ...props,
        d,
    };

    return createPath(pathProps);
};