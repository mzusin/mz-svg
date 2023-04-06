import {
    createPattern,
    createSymbol,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Symbol: createSymbol', () => {

    test('createSymbol with provided x', () => {
        const x = 10;

        const $symbol = createSymbol({
            x,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('x')).toStrictEqual(x.toString());
    });

    test('createSymbol with provided y', () => {
        const y = 20;

        const $symbol = createSymbol({
            y,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('y')).toStrictEqual(y.toString());
    });

    test('createSymbol with provided refX', () => {
        const refX = 'left';

        const $symbol = createSymbol({
            refX,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('refX')).toStrictEqual(refX.toString());
    });

    test('createSymbol with provided refY', () => {
        const refY = 'bottom';

        const $symbol = createSymbol({
            refY,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('refY')).toStrictEqual(refY.toString());
    });

    test('createSVG with provided viewBox', () => {
        const viewBox = '0 0 100 100';

        const $symbol = createPattern({
            viewBox,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('viewBox')).toStrictEqual(viewBox);
    });

    test('createSymbol with provided width', () => {
        const width = 100;

        const $symbol = createSymbol({
            width,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('width')).toStrictEqual(width.toString());
    });

    test('createSymbol with provided height', () => {
        const height = 200;

        const $symbol = createSymbol({
            height,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('height')).toStrictEqual(height.toString());
    });

    test('createSVG with provided preserveAspectRatio', () => {
        const preserveAspectRatio = 'xMidYMid meet';

        const $symbol = createSymbol({
            preserveAspectRatio,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('preserveAspectRatio')).toStrictEqual(preserveAspectRatio);
    });

    test('createSymbol with provided fill', () => {
        const fill = 'none';

        const $symbol =  createSymbol({
            fill,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createSymbol with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $symbol =  createSymbol({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createSymbol with provided stroke', () => {
        const stroke = 'red';

        const $symbol =  createSymbol({
            stroke,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createSymbol with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $symbol =  createSymbol({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createSymbol with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $symbol =  createSymbol({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createSymbol with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $symbol =  createSymbol({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createSymbol with provided id', () => {
        const id = 'path-1';

        const $symbol =  createSymbol({
            id,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('id')).toStrictEqual(id);
    });

    test('createSymbol with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $symbol =  createSymbol({
            classes,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('class')).toStrictEqual(classes);
    });

    test('createSymbol with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $symbol =  createSymbol({
            style,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('style')).toStrictEqual(style);
    });

    test('createSymbol with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $symbol =  createSymbol({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createSymbol with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $symbol =  createSymbol({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createSymbol with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $symbol =  createSymbol({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createSymbol with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $symbol =  createSymbol({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createSymbol with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $symbol =  createSymbol({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createSymbol with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $symbol =  createSymbol({
            fillRule,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createSymbol with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $symbol =  createSymbol({
            filter,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createSymbol with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $symbol =  createSymbol({
            mask,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createSymbol with provided transform', () => {
        const transform = 'translate(50,50)';

        const $symbol =  createSymbol({
            transform,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createSymbol with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $symbol =  createSymbol({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createSymbol with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $symbol =  createSymbol({
            clipPath,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createSymbol with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $symbol =  createSymbol({
            clipRule,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createSymbol with provided opacity', () => {
        const opacity = 0.5;

        const $symbol =  createSymbol({
            opacity,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createSymbol with provided visibility', () => {
        const visibility = 'hidden';

        const $symbol =  createSymbol({
            visibility,
            document: createNodeDoc(),
        });

        expect($symbol.getAttribute('visibility')).toStrictEqual(visibility);
    });
});