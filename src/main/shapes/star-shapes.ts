import { createPath } from './primitive-shapes';
import { DEFAULT_DECIMAL_PLACES } from '../core';
import { setDecimalPlaces } from 'mz-math';

export const createStar = (props: {
    document?: Document;
    raysNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;

    decimalPlaces?: number;

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
        centerX, centerY,
        outerRadius, innerRadius,
    } = props;

    const MIN_RAY_NUMBERS = 4;
    const dots: [number, number][] = [];

    const raysNumber = Math.max(MIN_RAY_NUMBERS, Number(props.raysNumber) || MIN_RAY_NUMBERS);
    const decimalPlaces = (props.decimalPlaces === null || props.decimalPlaces === undefined) ? DEFAULT_DECIMAL_PLACES : props.decimalPlaces;

    const angleDiff = 2 * Math.PI / raysNumber;
    const halfAngle = angleDiff / 2;

    for(let i= 0, angle= 1.5 * Math.PI; i<raysNumber; i++, angle += angleDiff){
        // outer circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle) * outerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle) * outerRadius, decimalPlaces),
        ]);

        // inner circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle + halfAngle) * innerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle + halfAngle) * innerRadius, decimalPlaces),
        ]);
    }

    let d = `M ${dots[0][0]} ${dots[0][1]} `;
    d += dots.map(dot => `L ${dot[0]} ${dot[1]}`).join(' ');
    d += ' Z';

    const pathProps = {
        ...props,
        d,
    };

    return createPath(pathProps);
};