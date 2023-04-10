import { createPath } from './primitive-shapes';
import { DEFAULT_DECIMAL_PLACES } from '../core';
import { setDecimalPlaces } from 'mz-math';
import { IPrimitiveShapeProps } from '../../interfaces';
import { pathToRel } from '../path';
import { mod } from 'mz-math';

export interface ICreateFlowerProps extends IPrimitiveShapeProps{
    petalsNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    decimalPlaces?: number;
    pathLength?: string|number;
}

export const createFlower = (props: ICreateFlowerProps) : SVGPathElement => {

    const {
        centerX, centerY,
        outerRadius, innerRadius,
    } = props;

    const MIN_PETALS_NUMBER = 3;
    const dots: [number, number][] = [];

    const petalsNumber = Math.max(MIN_PETALS_NUMBER, Number(props.petalsNumber) || MIN_PETALS_NUMBER);
    const decimalPlaces = (props.decimalPlaces === null || props.decimalPlaces === undefined) ? DEFAULT_DECIMAL_PLACES : props.decimalPlaces;

    const angleDiff = 2 * Math.PI / petalsNumber;

    for(let i= 0, angle= 1.5 * Math.PI; i<petalsNumber; i++, angle += angleDiff){

        // inner circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle) * innerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle) * innerRadius, decimalPlaces),
        ]);

        // outer circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle) * outerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle) * outerRadius, decimalPlaces),
        ]);
    }

    let d = `M ${ dots[0][0] } ${ dots[0][1] } `;

    for(let i= 0; i < dots.length; i += 2){
        const outerDot = dots[mod(i + 1, dots.length)];
        const innerDot2 = dots[mod(i + 2, dots.length)];
        const outerDot2 = dots[mod(i + 3, dots.length)];

        d += `C ${ outerDot[0] } ${ outerDot[1] } ${ outerDot2[0] } ${ outerDot2[1] } ${ innerDot2[0] } ${ innerDot2[1] } `;
    }

    d += 'Z';
    d = pathToRel(d) || d;

    const pathProps = {
        ...props,
        d,
    };

    return createPath(pathProps);
};