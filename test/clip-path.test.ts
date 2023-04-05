import {
    createClipPath,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('ClipPath: createClipPath', () => {

    test('createClipPath with provided x', () => {
        const clipPathUnits = 'userSpaceOnUse';

        const $clipPath = createClipPath({
            clipPathUnits,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('clipPathUnits')).toStrictEqual(clipPathUnits);
    });

    test('createClipPath with provided fill', () => {
        const fill = 'none';

        const $clipPath =  createClipPath({
            fill,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createClipPath with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $clipPath =  createClipPath({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createClipPath with provided stroke', () => {
        const stroke = 'red';

        const $clipPath =  createClipPath({
            stroke,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createClipPath with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $clipPath =  createClipPath({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createClipPath with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $clipPath =  createClipPath({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createClipPath with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $clipPath =  createClipPath({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createClipPath with provided id', () => {
        const id = 'path-1';

        const $clipPath =  createClipPath({
            id,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('id')).toStrictEqual(id);
    });

    test('createClipPath with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $clipPath =  createClipPath({
            classes,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('class')).toStrictEqual(classes);
    });

    test('createClipPath with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $clipPath =  createClipPath({
            style,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('style')).toStrictEqual(style);
    });

    test('createClipPath with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $clipPath =  createClipPath({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createClipPath with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $clipPath =  createClipPath({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createClipPath with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $clipPath =  createClipPath({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createClipPath with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $clipPath =  createClipPath({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createClipPath with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $clipPath =  createClipPath({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createClipPath with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $clipPath =  createClipPath({
            fillRule,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createClipPath with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $clipPath =  createClipPath({
            filter,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createClipPath with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $clipPath =  createClipPath({
            mask,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createClipPath with provided transform', () => {
        const transform = 'translate(50,50)';

        const $clipPath =  createClipPath({
            transform,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createClipPath with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $clipPath =  createClipPath({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createClipPath with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $clipPath =  createClipPath({
            clipPath,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createClipPath with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $clipPath =  createClipPath({
            clipRule,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createClipPath with provided opacity', () => {
        const opacity = 0.5;

        const $clipPath =  createClipPath({
            opacity,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createClipPath with provided visibility', () => {
        const visibility = 'hidden';

        const $clipPath =  createClipPath({
            visibility,
            document: createNodeDoc(),
        });

        expect($clipPath.getAttribute('visibility')).toStrictEqual(visibility);
    });
});