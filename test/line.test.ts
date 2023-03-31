import {
    createLine,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Line: createLine', () => {

    test('createLine with provided x1', () => {
        const x1 = 10;

        const $rect = createLine({
            x1,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('x1')).toStrictEqual(x1.toString());
    });

    test('createLine with provided x2', () => {
        const x2 = 10;

        const $rect = createLine({
            x2,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('x2')).toStrictEqual(x2.toString());
    });

    test('createLine with provided y1', () => {
        const y1 = 20;

        const $rect = createLine({
            y1,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('y1')).toStrictEqual(y1.toString());
    });

    test('createLine with provided y2', () => {
        const y2 = 20;

        const $rect = createLine({
            y2,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('y2')).toStrictEqual(y2.toString());
    });

    test('createLine with provided fill', () => {
        const fill = 'none';

        const $rect = createLine({
            fill,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createLine with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $rect = createLine({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createLine with provided stroke', () => {
        const stroke = 'red';

        const $rect = createLine({
            stroke,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createLine with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $rect = createLine({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createLine with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $rect = createLine({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createLine with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $rect = createLine({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createLine with provided id', () => {
        const id = 'path-1';

        const $rect = createLine({
            id,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('id')).toStrictEqual(id);
    });

    test('createLine with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $rect = createLine({
            classes,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('class')).toStrictEqual(classes);
    });

    test('createLine with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $rect = createLine({
            style,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('style')).toStrictEqual(style);
    });

    test('createLine with provided pathLength', () => {
        const pathLength = '50%';

        const $rect = createLine({
            pathLength,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createLine with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $rect = createLine({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createLine with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $rect = createLine({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createLine with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $rect = createLine({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createLine with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $rect = createLine({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createLine with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $rect = createLine({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createLine with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $rect = createLine({
            fillRule,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createLine with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $rect = createLine({
            filter,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createLine with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $rect = createLine({
            mask,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createLine with provided transform', () => {
        const transform = 'translate(50,50)';

        const $rect = createLine({
            transform,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createLine with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $rect = createLine({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createLine with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $rect = createLine({
            clipPath,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createLine with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $rect = createLine({
            clipRule,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createLine with provided opacity', () => {
        const opacity = 0.5;

        const $rect = createLine({
            opacity,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createLine with provided visibility', () => {
        const visibility = 'hidden';

        const $rect = createLine({
            visibility,
            document: createNodeDoc(),
        });

        expect($rect.getAttribute('visibility')).toStrictEqual(visibility);
    });
});