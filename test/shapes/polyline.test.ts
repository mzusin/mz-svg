import {
    createPolyline,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Polyline: createPolyline', () => {

    test('createPolyline with provided points', () => {
        const points = '0,100 50,25 50,75 100,0';

        const $polyline = createPolyline({
            points,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('points')).toStrictEqual(points);
    });

    test('createPolyline with provided fill', () => {
        const fill = 'none';

        const $polyline = createPolyline({
            fill,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createPolyline with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $polyline = createPolyline({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createPolyline with provided stroke', () => {
        const stroke = 'red';

        const $polyline = createPolyline({
            stroke,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createPolyline with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $polyline = createPolyline({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createPolyline with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $polyline = createPolyline({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createPolyline with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $polyline = createPolyline({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createPolyline with provided id', () => {
        const id = 'polyline-1';

        const $polyline = createPolyline({
            id,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('id')).toStrictEqual(id);
    });

    test('createPolyline with provided classes', () => {
        const classes = 'polyline-class-1 polyline-class-2';

        const $polyline = createPolyline({
            classes,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('class')).toStrictEqual(classes);
    });

    test('createPolyline with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $polyline = createPolyline({
            style,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('style')).toStrictEqual(style);
    });

    test('createPolyline with provided pathLength', () => {
        const pathLength = '50%';

        const $polyline = createPolyline({
            pathLength,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createPolyline with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $polyline = createPolyline({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createPolyline with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $polyline = createPolyline({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createPolyline with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $polyline = createPolyline({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createPolyline with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $polyline = createPolyline({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createPolyline with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $polyline = createPolyline({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createPolyline with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $polyline = createPolyline({
            fillRule,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createPolyline with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $polyline = createPolyline({
            filter,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createPolyline with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $polyline = createPolyline({
            mask,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createPolyline with provided transform', () => {
        const transform = 'translate(50,50)';

        const $polyline = createPolyline({
            transform,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createPolyline with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $polyline = createPolyline({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createPolyline with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $polyline = createPolyline({
            clipPath,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createPolyline with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $polyline = createPolyline({
            clipRule,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createPolyline with provided opacity', () => {
        const opacity = 0.5;

        const $polyline = createPolyline({
            opacity,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createPolyline with provided visibility', () => {
        const visibility = 'hidden';

        const $polyline = createPolyline({
            visibility,
            document: createNodeDoc(),
        });

        expect($polyline.getAttribute('visibility')).toStrictEqual(visibility);
    });
});