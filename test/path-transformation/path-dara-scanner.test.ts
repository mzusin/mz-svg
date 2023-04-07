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

    test('M 0 0', () => {
        expect(scan('M 0 0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                },
                {
                    "col": 4,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                }
            ]
        });
    });

    test('M 0.0 0.0', () => {
        expect(scan('M 0.0 0.0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 6,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                }
            ]
        });
    });

    test('Multiline 1', () => {
        expect(scan(`M 0.0 0.0
M 0.0 0.0`)).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 6,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 0,
                    "line": 1,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 1,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 6,
                    "line": 1,
                    "tokenType": "num",
                    "value": "0.0"
                }
            ]
        });
    });

    test('Multiline 2', () => {
        expect(scan(`M 0.0 0.0  M 0.0 0.0
M 0.0 0.0`)).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 6,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },

                {
                    "col": 11,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 13,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 17,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },

                {
                    "col": 0,
                    "line": 1,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 1,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 6,
                    "line": 1,
                    "tokenType": "num",
                    "value": "0.0"
                }
            ]
        });
    });

    test('Multiline with spaces', () => {
        expect(scan(`  M 0.0 0.0,   
          M 0.0 0.0  `)).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 4,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 8,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 10,
                    "line": 1,
                    "tokenType": "M"
                },
                {
                    "col": 12,
                    "line": 1,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 16,
                    "line": 1,
                    "tokenType": "num",
                    "value": "0.0"
                }
            ]
        });
    });

    test('M 0.0 0.0 with tabs', () => {
        expect(scan('\tM 0.0 0.0\t')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 1,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 3,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                },
                {
                    "col": 7,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.0"
                }
            ]
        });
    });

    test('M 1e+2 0', () => {
        expect(scan('M 1e+2 0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "1e+2"
                },
                {
                    "col": 7,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                }
            ]
        });
    });

    test('M +1e+2 0', () => {
        expect(scan('M +1e+2 0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "+1e+2"
                },
                {
                    "col": 8,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                }
            ]
        });
    });

    test('M 1e-2 0', () => {
        expect(scan('M 1e-2 0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "1e-2"
                },
                {
                    "col": 7,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                }
            ]
        });
    });

    test('M 0.1e-2 0', () => {
        // 0.1e-2 = 0.001
        expect(scan('M 0.1e-2 0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0.1e-2"
                },
                {
                    "col": 9,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                }
            ]
        });
    });

    test('M .1e-2 0', () => {
        // .1e-2 = 0.001
        expect(scan('M .1e-2 0')).toStrictEqual({
            "errors": [],
            "tokens": [
                {
                    "col": 0,
                    "line": 0,
                    "tokenType": "M"
                },
                {
                    "col": 2,
                    "line": 0,
                    "tokenType": "num",
                    "value": ".1e-2"
                },
                {
                    "col": 8,
                    "line": 0,
                    "tokenType": "num",
                    "value": "0"
                }
            ]
        });
    });
});


