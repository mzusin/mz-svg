import {
    createPolygon,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Polygon: createPolygon', () => {

    test('createPolygon with provided points', () => {
        const points = '0,100 50,25 50,75 100,0';

        const $polygon = createPolygon({
            points,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('points')).toStrictEqual(points);
    });

    test('createPolygon with provided fill', () => {
        const fill = 'none';

        const $polygon = createPolygon({
            fill,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createPolygon with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $polygon = createPolygon({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createPolygon with provided stroke', () => {
        const stroke = 'red';

        const $polygon = createPolygon({
            stroke,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createPolygon with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $polygon = createPolygon({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createPolygon with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $polygon = createPolygon({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createPolygon with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $polygon = createPolygon({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createPolygon with provided id', () => {
        const id = 'polygon-1';

        const $polygon = createPolygon({
            id,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('id')).toStrictEqual(id);
    });

    test('createPolygon with provided classes', () => {
        const classes = 'polygon-class-1 polygon-class-2';

        const $polygon = createPolygon({
            classes,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('class')).toStrictEqual(classes);
    });

    test('createPolygon with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $polygon = createPolygon({
            style,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('style')).toStrictEqual(style);
    });

    test('createPolygon with provided pathLength', () => {
        const pathLength = '50%';

        const $polygon = createPolygon({
            pathLength,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createPolygon with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $polygon = createPolygon({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createPolygon with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $polygon = createPolygon({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createPolygon with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $polygon = createPolygon({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createPolygon with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $polygon = createPolygon({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createPolygon with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $polygon = createPolygon({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createPolygon with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $polygon = createPolygon({
            fillRule,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createPolygon with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $polygon = createPolygon({
            filter,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createPolygon with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $polygon = createPolygon({
            mask,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createPolygon with provided transform', () => {
        const transform = 'translate(50,50)';

        const $polygon = createPolygon({
            transform,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createPolygon with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $polygon = createPolygon({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createPolygon with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $polygon = createPolygon({
            clipPath,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createPolygon with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $polygon = createPolygon({
            clipRule,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createPolygon with provided opacity', () => {
        const opacity = 0.5;

        const $polygon = createPolygon({
            opacity,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createPolygon with provided visibility', () => {
        const visibility = 'hidden';

        const $polygon = createPolygon({
            visibility,
            document: createNodeDoc(),
        });

        expect($polygon.getAttribute('visibility')).toStrictEqual(visibility);
    });
});