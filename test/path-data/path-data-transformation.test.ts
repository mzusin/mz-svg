import { transformPath, createPath } from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Path Data Transformations', () => {

    test('No props is provided', () => {
        expect(transformPath()).toStrictEqual(null);
    });

    test('Props is provided, but d and $path are empty', () => {
        const res = transformPath({
            // ...
        });
        expect(res).toStrictEqual(null);
    });

    test('Props is provided, but d is an empty string $path doesn\'t have d', () => {
        const res = transformPath({
            d: '',
            $path: createPath({
                document: createNodeDoc()
            }),
        });
        expect(res).toStrictEqual(null);
    });
});


