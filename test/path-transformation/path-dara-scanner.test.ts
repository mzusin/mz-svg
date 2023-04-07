import { scan } from '../../src/main/path/parse/scanner';

describe('Path Data Scanner', () => {

    test('Scan with undefined d', () => {
        expect(scan()).toStrictEqual({
            tokens: [],
            errors: [],
        });
    });

    test('Scan with empty d', () => {
        expect(scan('')).toStrictEqual({
            tokens: [],
            errors: [],
        });
    });

    test('Scan - d with multiple spaces', () => {
        expect(scan('   ')).toStrictEqual({
            tokens: [],
            errors: [],
        });
    });

    test('AAA1', () => {
        console.log(scan('M 0.0 0.0'));
        expect(scan('   ')).toStrictEqual({
            tokens: [],
            errors: [],
        });
    });

    test('AAA2', () => {
        console.log(scan(`M 0.0 0.0
        M 0.0 0.0`));
        expect(scan('   ')).toStrictEqual({
            tokens: [],
            errors: [],
        });
    });

    test('AAA3', () => {
        console.log(scan(`  M 0.0 0.0,   
          M 0.0 0.0  `));
        expect(scan('   ')).toStrictEqual({
            tokens: [],
            errors: [],
        });
    });
});


