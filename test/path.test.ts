import {
    createPath,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Path: createPath', () => {

    test('createPath with provided d', () => {
        const d = 'M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90';

        const $path = createPath({
            d,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('d')).toStrictEqual(d);
    });

    test('createPath with provided fill', () => {
        const fill = 'none';

        const $path = createPath({
            fill,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createPath with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $path = createPath({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createPath with provided stroke', () => {
        const stroke = 'red';

        const $path = createPath({
            stroke,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createPath with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $path = createPath({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createPath with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $path = createPath({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createPath with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $path = createPath({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createPath with provided id', () => {
        const id = 'path-1';

        const $path = createPath({
            id,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('id')).toStrictEqual(id);
    });

    test('createPath with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $path = createPath({
            classes,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('class')).toStrictEqual(classes);
    });

    test('createPath with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $path = createPath({
            style,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('style')).toStrictEqual(style);
    });

    test('createPath with provided pathLength', () => {
        const pathLength = '50%';

        const $path = createPath({
            pathLength,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createPath with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $path = createPath({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createPath with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $path = createPath({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createPath with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $path = createPath({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createPath with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $path = createPath({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createPath with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $path = createPath({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createPath with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $path = createPath({
            fillRule,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createPath with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $path = createPath({
            filter,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createPath with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $path = createPath({
            mask,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createPath with provided transform', () => {
        const transform = 'translate(50,50)';

        const $path = createPath({
            transform,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createPath with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $path = createPath({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createPath with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $path = createPath({
            clipPath,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createPath with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $path = createPath({
            clipRule,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createPath with provided opacity', () => {
        const opacity = 0.5;

        const $path = createPath({
            opacity,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createPath with provided visibility', () => {
        const visibility = 'hidden';

        const $path = createPath({
            visibility,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('visibility')).toStrictEqual(visibility);
    });
});