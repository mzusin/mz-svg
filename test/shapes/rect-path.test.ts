import {
    getRectPathD,
} from '../../src/index-esm';

describe('Shape Paths: createRectPath', () => {

    test('createRectPath: 10, 10, 100, 100', () => {
        const d = getRectPathD({
            x: 10,
            y: 10,
            width: 100,
            height: 100,
        });

        expect(d).toStrictEqual('M110 10 L110 110 L10 110 L10 10 L110 10 Z');
    });

    test('createRectPath: 0, 0, 50, 100', () => {
        const d = getRectPathD({
            x: 0,
            y: 0,
            width: 50,
            height: 100,
        });

        expect(d).toStrictEqual('M50 0 L50 100 L0 100 L0 0 L50 0 Z');
    });

    test('createRectPath: 0, 0, 100, 100, and rx=10, ry=10', () => {
        const d = getRectPathD({
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            rx: 10,
            ry: 10,
        });

        expect(d).toStrictEqual('M10 0 L90 0 C90 0 100 0 100 10 L100 90 C100 90 100 100 90 100 L10 100 C10 100 0 100 0 90 L0 10 C0 10 0 0 10 0 Z');
    });

    test('createRectPath: 50, 60, 100, 100, and rx=20, ry=10', () => {
        const d = getRectPathD({
            x: 50,
            y: 60,
            width: 100,
            height: 100,
            rx: 20,
            ry: 10,
        });

        expect(d).toStrictEqual('M70 60 L130 60 C130 60 150 60 150 70 L150 150 C150 150 150 160 130 160 L70 160 C70 160 50 160 50 150 L50 70 C50 70 50 60 70 60 Z');
    });
});