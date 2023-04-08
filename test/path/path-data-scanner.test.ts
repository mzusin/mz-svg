import { scan } from '../../src/main/path/scanner';

describe('Path Data Scanner', () => {

    describe('Tabs & spaces', () => {

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
    });

    describe('Basic Commands', () => {

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

        test('M 0 0 100 100', () => {
            expect(scan('M 0 0 100 100')).toStrictEqual({
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
                    },
                    {
                        "col": 6,
                        "line": 0,
                        "tokenType": "num",
                        "value": "100"
                    },
                    {
                        "col": 10,
                        "line": 0,
                        "tokenType": "num",
                        "value": "100"
                    }
                ]
            });
        });

        test('m 0 0 100 100', () => {
            expect(scan('m 0 0 100 100')).toStrictEqual({
                "errors": [],
                "tokens": [
                    {
                        "col": 0,
                        "line": 0,
                        "tokenType": "m"
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
                    },
                    {
                        "col": 6,
                        "line": 0,
                        "tokenType": "num",
                        "value": "100"
                    },
                    {
                        "col": 10,
                        "line": 0,
                        "tokenType": "num",
                        "value": "100"
                    }
                ]
            });
        });
    });

    describe('Numbers Notations', () => {
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

        test('M0.6.5', () => {
            expect(scan('M0.6.5')).toStrictEqual({
                "errors": [],
                "tokens": [
                    {
                        "col": 0,
                        "line": 0,
                        "tokenType": "M"
                    },
                    {
                        "col": 1,
                        "line": 0,
                        "tokenType": "num",
                        "value": "0.6"
                    },
                    {
                        "col": 4,
                        "line": 0,
                        "tokenType": "num",
                        "value": ".5"
                    }
                ]
            });
        });
    });

    describe('Commands Combinations', () => {

        test('Combination 1', () => {
            expect(scan(`M 10,30
A 20,20 0,0,1 50,30
A 20,20 0,0,1 90,30
Q 90,60 50,90
Q 10,60 10,30 z`)).toStrictEqual({
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
                        "value": "10"
                    },
                    {
                        "col": 5,
                        "line": 0,
                        "tokenType": "num",
                        "value": "30"
                    },
                    {
                        "col": 0,
                        "line": 1,
                        "tokenType": "A"
                    },
                    {
                        "col": 2,
                        "line": 1,
                        "tokenType": "num",
                        "value": "20"
                    },
                    {
                        "col": 5,
                        "line": 1,
                        "tokenType": "num",
                        "value": "20"
                    },
                    {
                        "col": 8,
                        "line": 1,
                        "tokenType": "num",
                        "value": "0"
                    },
                    {
                        "col": 10,
                        "line": 1,
                        "tokenType": "num",
                        "value": "0"
                    },
                    {
                        "col": 12,
                        "line": 1,
                        "tokenType": "num",
                        "value": "1"
                    },
                    {
                        "col": 14,
                        "line": 1,
                        "tokenType": "num",
                        "value": "50"
                    },
                    {
                        "col": 17,
                        "line": 1,
                        "tokenType": "num",
                        "value": "30"
                    },
                    {
                        "col": 0,
                        "line": 2,
                        "tokenType": "A"
                    },
                    {
                        "col": 2,
                        "line": 2,
                        "tokenType": "num",
                        "value": "20"
                    },
                    {
                        "col": 5,
                        "line": 2,
                        "tokenType": "num",
                        "value": "20"
                    },
                    {
                        "col": 8,
                        "line": 2,
                        "tokenType": "num",
                        "value": "0"
                    },
                    {
                        "col": 10,
                        "line": 2,
                        "tokenType": "num",
                        "value": "0"
                    },
                    {
                        "col": 12,
                        "line": 2,
                        "tokenType": "num",
                        "value": "1"
                    },
                    {
                        "col": 14,
                        "line": 2,
                        "tokenType": "num",
                        "value": "90"
                    },
                    {
                        "col": 17,
                        "line": 2,
                        "tokenType": "num",
                        "value": "30"
                    },
                    {
                        "col": 0,
                        "line": 3,
                        "tokenType": "Q"
                    },
                    {
                        "col": 2,
                        "line": 3,
                        "tokenType": "num",
                        "value": "90"
                    },
                    {
                        "col": 5,
                        "line": 3,
                        "tokenType": "num",
                        "value": "60"
                    },
                    {
                        "col": 8,
                        "line": 3,
                        "tokenType": "num",
                        "value": "50"
                    },
                    {
                        "col": 11,
                        "line": 3,
                        "tokenType": "num",
                        "value": "90"
                    },
                    {
                        "col": 0,
                        "line": 4,
                        "tokenType": "Q"
                    },
                    {
                        "col": 2,
                        "line": 4,
                        "tokenType": "num",
                        "value": "10"
                    },
                    {
                        "col": 5,
                        "line": 4,
                        "tokenType": "num",
                        "value": "60"
                    },
                    {
                        "col": 8,
                        "line": 4,
                        "tokenType": "num",
                        "value": "10"
                    },
                    {
                        "col": 11,
                        "line": 4,
                        "tokenType": "num",
                        "value": "30"
                    },
                    {
                        "col": 14,
                        "line": 4,
                        "tokenType": "z"
                    }
                ]
            });
        });

        test('M 100 100 L 200 200', () => {
            expect(scan('M 100 100 L 200 200')).toStrictEqual({
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
                        "value": "100"
                    },
                    {
                        "col": 6,
                        "line": 0,
                        "tokenType": "num",
                        "value": "100"
                    },
                    {
                        "col": 10,
                        "line": 0,
                        "tokenType": "L"
                    },
                    {
                        "col": 12,
                        "line": 0,
                        "tokenType": "num",
                        "value": "200"
                    },
                    {
                        "col": 16,
                        "line": 0,
                        "tokenType": "num",
                        "value": "200"
                    },
                ]
            });
        });

    });

});


