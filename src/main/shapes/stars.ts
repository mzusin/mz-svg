import { createPath } from './primitive-shapes';
import { DEFAULT_DECIMAL_PLACES } from '../core';
import { setDecimalPlaces } from 'mz-math';
import { IPrimitiveShapeProps } from '../../interfaces';
import { pathToRel } from '../path';

export interface ICreateStarProps extends IPrimitiveShapeProps{
    raysNumber: number;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    decimalPlaces?: number;
    pathLength?: string|number;
}

export const createStar = (props: ICreateStarProps) : SVGPathElement => {

    const {
        centerX, centerY,
        outerRadius, innerRadius,
    } = props;

    const MIN_RAYS_NUMBER = 3;
    const dots: [number, number][] = [];

    const raysNumber = Math.max(MIN_RAYS_NUMBER, Number(props.raysNumber) || MIN_RAYS_NUMBER);
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

    let d = `M ${ dots[0][0] } ${ dots[0][1] } `;
    d += dots.map(dot => `L ${ dot[0] } ${ dot[1] }`).join(' ');
    d += 'Z';
    d = pathToRel(d) || d;

    const pathProps = {
        ...props,
        d,
    };

    return createPath(pathProps);
};

export const createStar2 = (props: ICreateStarProps) : SVGPathElement => {

    const {
        centerX, centerY,
        outerRadius, innerRadius,
    } = props;

    const MIN_RAYS_NUMBER = 3;
    const dots: [number, number][] = [];

    const raysNumber = Math.max(MIN_RAYS_NUMBER, Number(props.raysNumber) || MIN_RAYS_NUMBER);
    const decimalPlaces = (props.decimalPlaces === null || props.decimalPlaces === undefined) ? DEFAULT_DECIMAL_PLACES : props.decimalPlaces;

    const angleDiff = 2 * Math.PI / raysNumber;
    const halfAngle = angleDiff / 2;

    for(let i= 0, angle= 1.5 * Math.PI; i<=raysNumber; i++, angle += angleDiff){

        // inner circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle) * innerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle) * innerRadius, decimalPlaces),
        ]);

        // outer circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle + halfAngle) * outerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle + halfAngle) * outerRadius, decimalPlaces),
        ]);
    }

    let d = `M ${ dots[0][0] } ${ dots[0][1] } `;

    for(let i = 0; i < dots.length; i += 2){
        const dot1 = dots[i];
        const dot2 = dots[i + 1];
        d += `S${ dot1[0] } ${ dot1[1] } ${ dot2[0] } ${ dot2[1] }`;
    }

    d += 'Z';
    d = pathToRel(d) || d;

    const pathProps = {
        ...props,
        d,
    };

    return createPath(pathProps);
};

export const createStar3 = (props: ICreateStarProps) : SVGPathElement => {

    const {
        centerX, centerY,
        outerRadius, innerRadius,
    } = props;

    const MIN_RAYS_NUMBER = 3;
    const dots: [number, number][] = [];

    const raysNumber = Math.max(MIN_RAYS_NUMBER, Number(props.raysNumber) || MIN_RAYS_NUMBER);
    const decimalPlaces = (props.decimalPlaces === null || props.decimalPlaces === undefined) ? DEFAULT_DECIMAL_PLACES : props.decimalPlaces;

    const angleDiff = 2 * Math.PI / raysNumber;
    const halfAngle = angleDiff / 2;

    for(let i= 0, angle= 1.5 * Math.PI; i<=raysNumber; i++, angle += angleDiff){

        // inner circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle) * innerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle) * innerRadius, decimalPlaces),
        ]);

        // outer circle
        dots.push([
            setDecimalPlaces(centerX + Math.cos(angle + halfAngle) * outerRadius, decimalPlaces),
            setDecimalPlaces(centerY + Math.sin(angle + halfAngle) * outerRadius, decimalPlaces),
        ]);
    }

    let d = `M ${ dots[0][0] } ${ dots[0][1] } `;

    for(let i = 0; i < dots.length; i += 2){
        const dot1 = dots[i];
        const dot2 = dots[i + 1];
        d += `S${ dot1[0] } ${ dot1[1] } ${ dot2[0] } ${ dot2[1] } L ${ dot2[0] } ${ dot2[1] }`;
    }

    d += 'Z';
    d = pathToRel(d) || d;

    const pathProps = {
        ...props,
        d,
    };

    return createPath(pathProps);
};