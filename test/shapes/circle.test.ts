import {
    createCircle,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Path: createCircle', () => {

    test('createCircle with provided cx', () => {
        const cx = 10;

        const $circle = createCircle({
            cx,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('cx')).toStrictEqual(cx.toString());
    });

    test('createCircle with provided cy', () => {
        const cy = 20;

        const $circle = createCircle({
            cy,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('cy')).toStrictEqual(cy.toString());
    });

    test('createCircle with provided r', () => {
        const r = 10;

        const $circle = createCircle({
            r,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('r')).toStrictEqual(r.toString());
    });


    test('createCircle with provided fill', () => {
        const fill = 'none';

        const $circle = createCircle({
            fill,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createCircle with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $circle = createCircle({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createCircle with provided stroke', () => {
        const stroke = 'red';

        const $circle = createCircle({
            stroke,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createCircle with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $circle = createCircle({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createCircle with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $circle = createCircle({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createCircle with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $circle = createCircle({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createCircle with provided id', () => {
        const id = 'path-1';

        const $circle = createCircle({
            id,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('id')).toStrictEqual(id);
    });

    test('createCircle with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $circle = createCircle({
            classes,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('class')).toStrictEqual(classes);
    });

    test('createCircle with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $circle = createCircle({
            style,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('style')).toStrictEqual(style);
    });

    test('createCircle with provided pathLength', () => {
        const pathLength = '50%';

        const $circle = createCircle({
            pathLength,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createCircle with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $circle = createCircle({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createCircle with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $circle = createCircle({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createCircle with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $circle = createCircle({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createCircle with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $circle = createCircle({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createCircle with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $circle = createCircle({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createCircle with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $circle = createCircle({
            fillRule,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createCircle with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $circle = createCircle({
            filter,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createCircle with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $circle = createCircle({
            mask,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createCircle with provided transform', () => {
        const transform = 'translate(50,50)';

        const $circle = createCircle({
            transform,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createCircle with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $circle = createCircle({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createCircle with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $circle = createCircle({
            clipPath,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createCircle with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $circle = createCircle({
            clipRule,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createCircle with provided opacity', () => {
        const opacity = 0.5;

        const $circle = createCircle({
            opacity,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createCircle with provided visibility', () => {
        const visibility = 'hidden';

        const $circle = createCircle({
            visibility,
            document: createNodeDoc(),
        });

        expect($circle.getAttribute('visibility')).toStrictEqual(visibility);
    });
});