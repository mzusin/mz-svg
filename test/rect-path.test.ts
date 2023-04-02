import {
    getRectPathD,
} from '../src/index-esm';

describe('Path: createRectPath', () => {

    test('createRectPath: 10, 10, 100, 100', () => {
        const d = getRectPathD({
            x: 10,
            y: 10,
            width: 100,
            height: 100,
        });

        expect(d).toStrictEqual('M 110 10 L110 110 L10 110 L10 10 L110 10 Z');
    });

    test('createRectPath: 0, 0, 50, 100', () => {
        const d = getRectPathD({
            x: 0,
            y: 0,
            width: 50,
            height: 100,
        });

        expect(d).toStrictEqual('M 50 0 L50 100 L0 100 L0 0 L50 0 Z');
    });

    test('createRectPath: 0, 0, 100, 100, and rx=10, ry=10, ', () => {
        const d = getRectPathD({
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            rx: 10,
            ry: 10,
        });

        expect(d).toStrictEqual('M 10 0 L90 0 C95 0 100 5 100 10 L100 90 C100 95 95 100 90 100 L10 100 C5 100 0 95 0 90 L 0 10 C 0 5 5 0 10 0');
    });
});