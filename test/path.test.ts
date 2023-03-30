import {
    createPath,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Path: createPath', () => {

    test('createPath with provided d', () => {
        const d = 'M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90';

        const $path = createPath({
            d,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('d')).toStrictEqual(d);
    });

    test('createPath with provided fill', () => {
        const fill = 'none';

        const $path = createPath({
            fill,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('fill')).toStrictEqual(fill);
    });

    test('createPath with provided strokeWidth', () => {
        const strokeWidth = 10;

        const $path = createPath({
            strokeWidth,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-width')).toStrictEqual(strokeWidth.toString());
    });

    test('createPath with provided stroke', () => {
        const stroke = 'red';

        const $path = createPath({
            stroke,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke')).toStrictEqual(stroke);
    });

    test('createPath with provided strokeLinecap', () => {
        const strokeLinecap = 'round';

        const $path = createPath({
            strokeLinecap,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-linecap')).toStrictEqual(strokeLinecap);
    });

    test('createPath with provided strokeLinejoin', () => {
        const strokeLinejoin = 'round';

        const $path = createPath({
            strokeLinejoin,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('stroke-linejoin')).toStrictEqual(strokeLinejoin);
    });

    test('createPath with provided vectorEffect', () => {
        const vectorEffect = 'non-scaling-stroke';

        const $path = createPath({
            vectorEffect,
            document: createNodeDoc(),
        });

        expect($path.getAttribute('vector-effect')).toStrictEqual(vectorEffect);
    });
});