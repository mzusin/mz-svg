import {
    createGroup,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Group: createGroup', () => {

    test('createGroup with provided fill', () => {
        const fill = 'none';

        const $group = createGroup({
            fill,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createGroup with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $group = createGroup({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createGroup with provided stroke', () => {
        const stroke = 'red';

        const $group = createGroup({
            stroke,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createGroup with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $group = createGroup({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createGroup with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $group = createGroup({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createGroup with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $group = createGroup({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createGroup with provided id', () => {
        const id = 'path-1';

        const $group = createGroup({
            id,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('id')).toStrictEqual(id);
    });

    test('createGroup with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $group = createGroup({
            classes,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('class')).toStrictEqual(classes);
    });

    test('createGroup with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $group = createGroup({
            style,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('style')).toStrictEqual(style);
    });

    test('createGroup with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $group = createGroup({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createGroup with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $group = createGroup({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createGroup with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $group = createGroup({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createGroup with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $group = createGroup({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createGroup with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $group = createGroup({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createGroup with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $group = createGroup({
            fillRule,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createGroup with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $group = createGroup({
            filter,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createGroup with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $group = createGroup({
            mask,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createGroup with provided transform', () => {
        const transform = 'translate(50,50)';

        const $group = createGroup({
            transform,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createGroup with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $group = createGroup({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createGroup with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $group = createGroup({
            clipPath,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createGroup with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $group = createGroup({
            clipRule,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createGroup with provided opacity', () => {
        const opacity = 0.5;

        const $group = createGroup({
            opacity,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createGroup with provided visibility', () => {
        const visibility = 'hidden';

        const $group = createGroup({
            visibility,
            document: createNodeDoc(),
        });

        expect($group.getAttribute('visibility')).toStrictEqual(visibility);
    });
});