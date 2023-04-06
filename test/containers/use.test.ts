import {
    createUse,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Use: createUse', () => {

    test('createUse with provided href', () => {
        const href = '#my-circle';

        const $use = createUse({
            href,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('href')).toStrictEqual(href);
    });

    test('createUse with provided id', () => {
        const id = 'use-1';

        const $use = createUse({
            id,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('id')).toStrictEqual(id);
    });

    test('createUse with provided classes', () => {
        const classes = 'use-class-1 use-class-2';

        const $use = createUse({
            classes,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('class')).toStrictEqual(classes);
    });

    test('createUse with provided x', () => {
        const x = 10;

        const $use = createUse({
            x,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('x')).toStrictEqual(x.toString());
    });

    test('createUse with provided y', () => {
        const y = 20;

        const $use = createUse({
            y,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('y')).toStrictEqual(y.toString());
    });

    test('createUse with provided width', () => {
        const width = 100;

        const $use = createUse({
            width,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('width')).toStrictEqual(width.toString());
    });

    test('createUse with provided height', () => {
        const height = 200;

        const $use = createUse({
            height,
            document: createNodeDoc(),
        });

        expect($use.getAttribute('height')).toStrictEqual(height.toString());
    });
});