import {
    createSVG,
} from '../src/index-esm';

// @ts-ignore
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

/**
 * Create document in Node.js environment using JSDOM.
 * https://github.com/jsdom/jsdom
 */
export const createNodeDoc = () => {
    const dom = new JSDOM(`<!DOCTYPE html><head><title>Document</title></head><body></body>`);
    return dom.window.document;
};

describe('Core: createSVG', () => {
    test('createSVG 100x200 ---> width should be 100', () => {

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('width')).toStrictEqual('100');
    });

    test('createSVG 100x200 ---> height be 200', () => {

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('height')).toStrictEqual('200');
    });

    test('createSVG 100x200 ---> viewBox should be 0 0 100 200', () => {

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('viewBox')).toStrictEqual('0 0 100 200');
    });

    test('createSVG 100x200 ---> it should not have any nested element', () => {

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: createNodeDoc(),
        });

        expect($svg.children.length).toStrictEqual(0);
    });

    test('createSVG 0x0 ---> width should be 0', () => {

        const $svg = createSVG({
            width: 0,
            height: 0,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('width')).toStrictEqual('0');
    });

    test('createSVG -10x-10 ---> width should be 0', () => {

        const $svg = createSVG({
            width: -10,
            height: -10,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('width')).toStrictEqual('0');
    });

    test('createSVG -aaa x aaa ---> width should be 0', () => {

        const $svg = createSVG({
            // @ts-ignore - needed for testing
            width: 'aaa',

            // @ts-ignore - needed for testing
            height: 'aaa',
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('width')).toStrictEqual('0');
    });

    test('createSVG 0x0 ---> height should be 0', () => {

        const $svg = createSVG({
            width: 0,
            height: 0,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('height')).toStrictEqual('0');
    });

    test('createSVG -10x-10 ---> height should be 0', () => {

        const $svg = createSVG({
            width: -10,
            height: -10,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('height')).toStrictEqual('0');
    });

    test('createSVG -aaa x aaa ---> height should be 0', () => {

        const $svg = createSVG({
            // @ts-ignore - needed for testing
            width: 'aaa',

            // @ts-ignore - needed for testing
            height: 'aaa',
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('height')).toStrictEqual('0');
    });

    test('createSVG 0x0 ---> viewBox should be 0', () => {

        const $svg = createSVG({
            width: 0,
            height: 0,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('viewBox')).toStrictEqual('0 0 0 0');
    });

    test('createSVG -10x-10 ---> viewBox should be 0', () => {

        const $svg = createSVG({
            width: -10,
            height: -10,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('viewBox')).toStrictEqual('0 0 0 0');
    });

    test('createSVG -aaa x aaa ---> viewBox should be 0', () => {

        const $svg = createSVG({
            // @ts-ignore - needed for testing
            width: 'aaa',

            // @ts-ignore - needed for testing
            height: 'aaa',
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('viewBox')).toStrictEqual('0 0 0 0');
    });
});