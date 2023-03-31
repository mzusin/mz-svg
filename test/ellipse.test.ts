import {
    createEllipse,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Ellipse: createEllipse', () => {

    test('createEllipse with provided cx', () => {
        const cx = 10;

        const $ellipse = createEllipse({
            cx,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('cx')).toStrictEqual(cx.toString());
    });

    test('createEllipse with provided cy', () => {
        const cy = 20;

        const $ellipse = createEllipse({
            cy,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('cy')).toStrictEqual(cy.toString());
    });

    test('createEllipse with provided rx', () => {
        const rx = 10;

        const $ellipse = createEllipse({
            rx,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('rx')).toStrictEqual(rx.toString());
    });

    test('createEllipse with provided ry', () => {
        const ry = 10;

        const $ellipse = createEllipse({
            ry,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('ry')).toStrictEqual(ry.toString());
    });

    test('createEllipse with provided fill', () => {
        const fill = 'none';

        const $ellipse = createEllipse({
            fill,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createEllipse with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $ellipse = createEllipse({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createEllipse with provided stroke', () => {
        const stroke = 'red';

        const $ellipse = createEllipse({
            stroke,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createEllipse with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $ellipse = createEllipse({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createEllipse with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $ellipse = createEllipse({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createEllipse with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $ellipse = createEllipse({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });

    test('createEllipse with provided id', () => {
        const id = 'ellipse-1';

        const $ellipse = createEllipse({
            id,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('id')).toStrictEqual(id);
    });

    test('createEllipse with provided classes', () => {
        const classes = 'ellipse-class-1 ellipse-class-2';

        const $ellipse = createEllipse({
            classes,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('class')).toStrictEqual(classes);
    });

    test('createEllipse with provided style', () => {
        const style = 'stroke: red; fill: blue;';

        const $ellipse = createEllipse({
            style,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('style')).toStrictEqual(style);
    });

    test('createEllipse with provided pathLength', () => {
        const pathLength = '50%';

        const $ellipse = createEllipse({
            pathLength,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('pathLength')).toStrictEqual(pathLength);
    });

    test('createEllipse with provided strokeOpacity', () => {
        const strokeOpacity = 0.5;

        const $ellipse = createEllipse({
            strokeOpacity,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-opacity')).toStrictEqual(strokeOpacity.toString());
    });

    test('createEllipse with provided strokeDasharray', () => {
        const strokeDasharray = '5 10';

        const $ellipse = createEllipse({
            strokeDasharray,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-dasharray')).toStrictEqual(strokeDasharray);
    });

    test('createEllipse with provided strokeDashoffset', () => {
        const strokeDashoffset = '10%';

        const $ellipse = createEllipse({
            strokeDashoffset,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-dashoffset')).toStrictEqual(strokeDashoffset);
    });

    test('createEllipse with provided strokeMiterlimit', () => {
        const strokeMiterlimit = 2;

        const $ellipse = createEllipse({
            strokeMiterlimit,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('stroke-miterlimit')).toStrictEqual(strokeMiterlimit.toString());
    });

    test('createEllipse with provided fillOpacity', () => {
        const fillOpacity = 0.5;

        const $ellipse = createEllipse({
            fillOpacity,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('fill-opacity')).toStrictEqual(fillOpacity.toString());
    });

    test('createEllipse with provided fillRule', () => {
        const fillRule = 'evenodd';

        const $ellipse = createEllipse({
            fillRule,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('fill-rule')).toStrictEqual(fillRule);
    });

    test('createEllipse with provided filter', () => {
        const filter = 'url(#drop-shadow)';

        const $ellipse = createEllipse({
            filter,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('filter')).toStrictEqual(filter);
    });

    test('createEllipse with provided mask', () => {
        const mask = 'url(#my-mask)';

        const $ellipse = createEllipse({
            mask,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('mask')).toStrictEqual(mask);
    });

    test('createEllipse with provided transform', () => {
        const transform = 'translate(50,50)';

        const $ellipse = createEllipse({
            transform,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('transform')).toStrictEqual(transform);
    });

    test('createEllipse with provided shapeRendering', () => {
        const shapeRendering = 'crispEdges';

        const $ellipse = createEllipse({
            shapeRendering,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('shape-rendering')).toStrictEqual(shapeRendering);
    });

    test('createEllipse with provided clipPath', () => {
        const clipPath = 'url(#my-clip)';

        const $ellipse = createEllipse({
            clipPath,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('clip-path')).toStrictEqual(clipPath);
    });

    test('createEllipse with provided clipRule', () => {
        const clipRule = 'evenodd';

        const $ellipse = createEllipse({
            clipRule,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('clip-rule')).toStrictEqual(clipRule);
    });

    test('createEllipse with provided opacity', () => {
        const opacity = 0.5;

        const $ellipse = createEllipse({
            opacity,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('opacity')).toStrictEqual(opacity.toString());
    });

    test('createEllipse with provided visibility', () => {
        const visibility = 'hidden';

        const $ellipse = createEllipse({
            visibility,
            document: createNodeDoc(),
        });

        expect($ellipse.getAttribute('visibility')).toStrictEqual(visibility);
    });
});