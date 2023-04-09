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

});