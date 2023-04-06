import {
    createPattern,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Pattern: createPattern', () => {

    test('createPattern with provided x', () => {
        const x = 10;

        const $pattern = createPattern({
            x,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('x')).toStrictEqual(x.toString());
    });

    test('createPattern with provided y', () => {
        const y = 20;

        const $pattern = createPattern({
            y,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('y')).toStrictEqual(y.toString());
    });

    test('createPattern with provided width', () => {
        const width = 100;

        const $pattern = createPattern({
            width,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('width')).toStrictEqual(width.toString());
    });

    test('createPattern with provided height', () => {
        const height = 200;

        const $pattern = createPattern({
            height,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('height')).toStrictEqual(height.toString());
    });

    test('createLink with provided href', () => {
        const href = 'https://www.example.com';

        const $pattern = createPattern({
            href,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('href')).toStrictEqual(href);
    });

    test('createPattern with provided patternContentUnits', () => {
        const patternContentUnits = 'userSpaceOnUse';

        const $pattern = createPattern({
            patternContentUnits,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('patternContentUnits')).toStrictEqual(patternContentUnits);
    });

    test('createPattern with provided patternTransform', () => {
        const patternTransform = 'rotate(45)';

        const $pattern = createPattern({
            patternTransform,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('patternTransform')).toStrictEqual(patternTransform);
    });

    test('createPattern with provided patternUnits', () => {
        const patternUnits = 'objectBoundingBox';

        const $pattern = createPattern({
            patternUnits,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('patternUnits')).toStrictEqual(patternUnits);
    });

    test('createSVG with provided preserveAspectRatio', () => {
        const preserveAspectRatio = 'xMidYMid meet';

        const $pattern = createPattern({
            preserveAspectRatio,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('preserveAspectRatio')).toStrictEqual(preserveAspectRatio);
    });

    test('createSVG with provided viewBox', () => {
        const viewBox = '0 0 100 100';

        const $pattern = createPattern({
            viewBox,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('viewBox')).toStrictEqual(viewBox);
    });

    test('createPattern with provided fill', () => {
        const fill = 'none';

        const $pattern =  createPattern({
            fill,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createPattern with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $pattern =  createPattern({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createPattern with provided stroke', () => {
        const stroke = 'red';

        const $pattern =  createPattern({
            stroke,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createPattern with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $pattern =  createPattern({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createPattern with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $pattern =  createPattern({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createPattern with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $pattern =  createPattern({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createPattern with provided id', () => {
        const id = 'path-1';

        const $pattern =  createPattern({
            id,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('id')).toStrictEqual(id);
    });

    test('createPattern with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $pattern =  createPattern({
            classes,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('class')).toStrictEqual(classes);
    });

    test('createPattern with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $pattern =  createPattern({
            style,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('style')).toStrictEqual(style);
    });

    test('createPattern with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $pattern =  createPattern({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createPattern with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $pattern =  createPattern({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createPattern with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $pattern =  createPattern({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createPattern with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $pattern =  createPattern({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createPattern with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $pattern =  createPattern({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createPattern with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $pattern =  createPattern({
            fillRule,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createPattern with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $pattern =  createPattern({
            filter,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createPattern with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $pattern =  createPattern({
            mask,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createPattern with provided transform', () => {
        const transform = 'translate(50,50)';

        const $pattern =  createPattern({
            transform,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createPattern with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $pattern =  createPattern({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createPattern with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $pattern =  createPattern({
            clipPath,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createPattern with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $pattern =  createPattern({
            clipRule,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createPattern with provided opacity', () => {
        const opacity = 0.5;

        const $pattern =  createPattern({
            opacity,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createPattern with provided visibility', () => {
        const visibility = 'hidden';

        const $pattern =  createPattern({
            visibility,
            document: createNodeDoc(),
        });

        expect($pattern.getAttribute('visibility')).toStrictEqual(visibility);
    });
});