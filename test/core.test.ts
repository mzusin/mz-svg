import {
    createSVG, createSVGFromString, getSVGAsString,
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

    test('createSVG -x = -10', () => {

        const $svg = createSVG({
            x: -10,
            y: -10,
            width: 10,
            height: 10,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('x')).toStrictEqual('-10');
    });

    test('createSVG y = -10', () => {

        const $svg = createSVG({
            x: -10,
            y: -10,
            width: 10,
            height: 10,
            document: createNodeDoc(),
        });

        expect($svg.getAttribute('y')).toStrictEqual('-10');
    });
});

describe('Core: createSVGFromString', () => {

    test('createSVGFromString', () => {

        const svg = `
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cy="50" cx="50" r="45" />
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>`;

        const $svg = createSVGFromString({
            svg,
            document: createNodeDoc(),
        });

        expect($svg).toBeTruthy();
    });
});

describe('Core: getSVGAsString', () => {

    test('getSVGAsString', () => {

        const svg = `
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
<radialGradient cy="25%" id="myGradient">
<stop offset="0" stop-color="white"></stop>
<stop offset="100%" stop-color="black"></stop>
</radialGradient>·
<circle cx="50" cy="50" r="45"></circle>
<ellipse cx="50" cy="150" rx="45" ry="25"></ellipse>
<rect fill="url(#myGradient)" height="90" width="90" x="5" y="205"></rect>
</svg>`;

        const $svg = createSVGFromString({
            svg,
            document: createNodeDoc(),
        });
        const resultSVG = getSVGAsString($svg);

        expect(svg.trim()).toStrictEqual(resultSVG.trim());
    });
});

