import {
    createMask,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Mask: createMask', () => {

    test('createMask with provided x', () => {
        const x = 10;

        const $mask = createMask({
            x,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('x')).toStrictEqual(x.toString());
    });

    test('createMask with provided y', () => {
        const y = 20;

        const $mask = createMask({
            y,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('y')).toStrictEqual(y.toString());
    });

    test('createMask with provided width', () => {
        const width = 100;

        const $mask = createMask({
            width,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('width')).toStrictEqual(width.toString());
    });

    test('createMask with provided height', () => {
        const height = 200;

        const $mask = createMask({
            height,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('height')).toStrictEqual(height.toString());
    });

    test('createLink with provided maskContentUnits', () => {
        const maskContentUnits = 'userSpaceOnUse';

        const $mask = createMask({
            maskContentUnits,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('maskContentUnits')).toStrictEqual(maskContentUnits);
    });

    test('createMask with provided maskUnits', () => {
        const maskUnits = 'userSpaceOnUse';

        const $mask = createMask({
            maskUnits,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('maskUnits')).toStrictEqual(maskUnits);
    });

    test('createMask with provided fill', () => {
        const fill = 'none';

        const $mask =  createMask({
            fill,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createMask with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $mask =  createMask({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createMask with provided stroke', () => {
        const stroke = 'red';

        const $mask =  createMask({
            stroke,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createMask with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $mask =  createMask({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createMask with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $mask =  createMask({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createMask with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $mask =  createMask({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createMask with provided id', () => {
        const id = 'path-1';

        const $mask =  createMask({
            id,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('id')).toStrictEqual(id);
    });

    test('createMask with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $mask =  createMask({
            classes,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('class')).toStrictEqual(classes);
    });

    test('createMask with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $mask =  createMask({
            style,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('style')).toStrictEqual(style);
    });

    test('createMask with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $mask =  createMask({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createMask with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $mask =  createMask({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createMask with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $mask =  createMask({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createMask with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $mask =  createMask({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createMask with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $mask =  createMask({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createMask with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $mask =  createMask({
            fillRule,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createMask with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $mask =  createMask({
            filter,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createMask with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $mask =  createMask({
            mask,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createMask with provided transform', () => {
        const transform = 'translate(50,50)';

        const $mask =  createMask({
            transform,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createMask with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $mask =  createMask({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createMask with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $mask =  createMask({
            clipPath,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createMask with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $mask =  createMask({
            clipRule,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createMask with provided opacity', () => {
        const opacity = 0.5;

        const $mask =  createMask({
            opacity,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createMask with provided visibility', () => {
        const visibility = 'hidden';

        const $mask =  createMask({
            visibility,
            document: createNodeDoc(),
        });

        expect($mask.getAttribute('visibility')).toStrictEqual(visibility);
    });
});