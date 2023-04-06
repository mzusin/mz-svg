import {
    createRect,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Path: createRect', () => {

    test('createRect with provided x', () => {
        const x = 10;

        const $rect = createRect({
            x,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('x')).toStrictEqual(x.toString());
    });

    test('createRect with provided y', () => {
        const y = 20;

        const $rect = createRect({
            y,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('y')).toStrictEqual(y.toString());
    });

    test('createRect with provided rx', () => {
        const rx = 10;

        const $rect = createRect({
            rx,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('rx')).toStrictEqual(rx.toString());
    });

    test('createRect with provided ry', () => {
        const ry = 20;

        const $rect = createRect({
            ry,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('ry')).toStrictEqual(ry.toString());
    });

    test('createRect with provided width', () => {
        const width = 100;

        const $rect = createRect({
            width,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('width')).toStrictEqual(width.toString());
    });

    test('createRect with provided height', () => {
        const height = 200;

        const $rect = createRect({
            height,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('height')).toStrictEqual(height.toString());
    });

    test('createRect with provided fill', () => {
        const fill = 'none';

        const $rect = createRect({
            fill,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createRect with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $rect = createRect({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createRect with provided stroke', () => {
        const stroke = 'red';

        const $rect = createRect({
            stroke,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createRect with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $rect = createRect({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createRect with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $rect = createRect({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createRect with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $rect = createRect({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createRect with provided id', () => {
        const id = 'path-1';

        const $rect = createRect({
            id,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('id')).toStrictEqual(id);
    });

    test('createRect with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $rect = createRect({
            classes,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('class')).toStrictEqual(classes);
    });

    test('createRect with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $rect = createRect({
            style,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('style')).toStrictEqual(style);
    });

    test('createRect with provided pathLength', () => {
        const pathLength = '50%';

        const $rect = createRect({
            pathLength,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createRect with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $rect = createRect({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createRect with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $rect = createRect({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createRect with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $rect = createRect({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createRect with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $rect = createRect({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createRect with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $rect = createRect({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createRect with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $rect = createRect({
            fillRule,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createRect with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $rect = createRect({
            filter,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createRect with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $rect = createRect({
            mask,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createRect with provided transform', () => {
        const transform = 'translate(50,50)';

        const $rect = createRect({
            transform,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createRect with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $rect = createRect({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createRect with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $rect = createRect({
            clipPath,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createRect with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $rect = createRect({
            clipRule,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createRect with provided opacity', () => {
        const opacity = 0.5;

        const $rect = createRect({
            opacity,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createRect with provided visibility', () => {
        const visibility = 'hidden';

        const $rect = createRect({
            visibility,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('visibility')).toStrictEqual(visibility);
    });
});