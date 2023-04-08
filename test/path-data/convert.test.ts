import { pathDataToRelative } from '../../src/main/path/convert';
import { parsePath } from '../../src/index-esm';

describe('Path Data Convert', () => {

    describe('ToRelative', () => {

        test('Empty path', () => {
            const parsed = parsePath('')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({ commands: [], errors: [] });
        });

        test('M10 10 L30 30', () => {
            const parsed = parsePath('M10 10 L30 40')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            20,
                            30
                        ]
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 l30 40', () => {
            const parsed = parsePath('M10 10 l30 40')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            30,
                            40
                        ]
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 l30 40Z', () => {
            const parsed = parsePath('M10 10 l30 40Z')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            30,
                            40
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 H20 Z', () => {
            const parsed = parsePath('M10 10 H20 Z')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "h",
                        "params": [
                            10
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 h20 Z', () => {
            const parsed = parsePath('M10 10 h20 Z')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "h",
                        "params": [
                            20
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 V20 Z', () => {
            const parsed = parsePath('M10 10 V20 Z')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "v",
                        "params": [
                            10
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 v20 Z', () => {
            const parsed = parsePath('M10 10 v20 Z')
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "v",
                        "params": [
                            20
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M10 10 C 20 40 40 40 50 10 60 -20 70 -20 90 10', () => {
            const parsed = parsePath('M10 10 C 20 40 40 40 50 10   60 -20 70 -20 90 10');
            // should be: M10 10 c 10 30 30 30 40 0 c 10 -30 20 -30 40 0
            const res = pathDataToRelative(parsed);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "c",
                        "params": [
                            10,
                            30,
                            30,
                            30,
                            40,
                            0,
                        ]
                    },
                    {
                        "command": "c",
                        "params": [
                            10,
                            -30,
                            20,
                            -30,
                            40,
                            0,
                        ]
                    }
                ],
                "errors": []
            });
        });

        test('M10 10H40h50', () => {
            const parsed = parsePath('M10 10H40h50')
            const res = pathDataToRelative(parsed);

            // M10 10h30 50
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "h",
                        "params": [
                            30
                        ]
                    },
                    {
                        "command": "h",
                        "params": [ 50 ]
                    }
                ],
                "errors": []
            });
        });

        test('M10 10V40v50', () => {
            const parsed = parsePath('M10 10V40v50')
            const res = pathDataToRelative(parsed);

            // M10 10v30 50
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "v",
                        "params": [
                            30
                        ]
                    },
                    {
                        "command": "v",
                        "params": [ 50 ]
                    }
                ],
                "errors": []
            });
        });

        test('M40 30A20 40 -45 0 1 60 80', () => {
            const parsed = parsePath('M40 30A20 40 -45 0 1 60 80')
            const res = pathDataToRelative(parsed);

            // M40 30a20 40-45 0 1 20 50
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            40,
                            30
                        ]
                    },
                    {
                        "command": "a",
                        "params": [
                            20, 40, -45, 0, 1, 20, 50
                        ]
                    },
                ],
                "errors": []
            });
        });

        test('M10 10 L20 10 L20 20 Z L10 20 L20 20 z L9 9', () => {
            const parsed = parsePath('M10 10 L20 10 L20 20 Z L10 20 L20 20 z L9 9')
            const res = pathDataToRelative(parsed);

            // M10 10 l 10 0 0 10 z l 0 10 10 0 z l-1-1
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [
                            10,
                            10
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            10, 0
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            0, 10
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    },
                    {
                        "command": "l",
                        "params": [
                            0, 10
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            10, 0
                        ]
                    },
                    {
                        "command": "z",
                        "params": []
                    },
                    {
                        "command": "l",
                        "params": [
                            -1, -1
                        ]
                    },
                ],
                "errors": []
            });
        });
    });

});