import { parsePath } from '../../src/index-esm';
import { pathDataMinify } from '../../src/main/path/minify';

describe('Path Data Minify', () => {

    test('Empty path', () => {
        const parsed = parsePath('')
        expect(pathDataMinify(parsed)).toStrictEqual('');
    });

    test('M 10 10 L 100 100', () => {
        const parsed = parsePath('M 10 10 L 100 100')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 100 100');
    });

    test('M 10 10 L 50 50 L 90 50', () => {
        const parsed = parsePath('M 10 10 L 50 50 L 90 50')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50 90 50');
    });

    test('M 10 10 L 50 50 m 0 0 l -20 10 l 10 10', () => {
        const parsed = parsePath('M 10 10 L 50 50 m 0 0 l -20 10 l 10 10')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50m0 0 -20 10 10 10');
    });

    test('M 10 10 L 50 50 V 10 V 10 V 10 z', () => {
        const parsed = parsePath('M 10 10 L 50 50 V 10 V 10 V 10 z')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50V10 10 10z');
    });

    test('M 10 10 L 50 50 v 10 v 10 v 10 z', () => {
        const parsed = parsePath('M 10 10 L 50 50 v 10 v 10 v 10 z')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50v10 10 10z');
    });

    test('M 0.100 0.252625 L 1.180000 12.999999', () => {
        const parsed = parsePath('M 0.100 0.252625 L 1.180000 12.999999')
        expect(pathDataMinify(parsed)).toStrictEqual('M.1 .25 1.18 13');
    });

});