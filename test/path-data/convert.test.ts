import { pathDataToAbsolute, pathDataToRelative, pathDataToString } from '../../src/main/path/convert';
import { parsePath, pathToAbs, pathToRel } from '../../src/index-esm';

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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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
                        "command": "M",
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

        test('M10 20L0 0 5 5 10 10', () => {
            const parsed = parsePath('M10 20L0 0 5 5 10 10')
            const res = pathDataToRelative(parsed);

            // M10 20l-10 -20 5 5 5 5
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            -10,
                            -20
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            5,
                            5
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            5,
                            5
                        ]
                    }
                ],
                "errors": []
            });
        });

        test('pathToRel', () => {
            const d = pathToRel(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`);
            expect(d).toStrictEqual('M10 30a20 20 0 0 1 40 0 20 20 0 0 1 40 0q0 30 -40 60 -40 -30 -40 -60z');
        });

        test('pathToRel with beautify = true', () => {
            const d = pathToRel(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, true);
            expect(d).toStrictEqual('M 10 30 a 20 20 0 0 1 40 0 a 20 20 0 0 1 40 0 q 0 30 -40 60 q -40 -30 -40 -60 z');
        });

        test('pathToRel with decimal places = 1', () => {
            const d = pathToRel(`M -0.100 -0.252625 L -1.180000 -12.999999`, false, 1);
            expect(d).toStrictEqual('M-.1 -.3l-1.1 -12.7');
        });
    });

    describe('ToAbsolute', () => {

        test('Empty path', () => {
            const parsed = parsePath('')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('');
        });

        test('M10 10 l 30 30', () => {
            const parsed = parsePath('M10 10 l 30 30')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 L 40 40');
        });

        test('M10 10 L30 30', () => {
            const parsed = parsePath('M10 10 L30 30')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 L 30 30');
        });

        test('M10 10 c 10 30 30 30 40, 0 10 -30 20 -30 40 0', () => {
            const parsed = parsePath('M10 10 c 10 30 30 30 40, 0 10 -30 20 -30 40 0')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 C 20 40 40 40 50 10 C 60 -20 70 -20 90 10');
        });

        test('M10 10H40h50', () => {
            const parsed = parsePath('M10 10H40h50')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 H 40 H 90');
        });

        test('M10 10V40v50', () => {
            const parsed = parsePath('M10 10V40v50')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 V 40 V 90');
        });

        test('M40 30a20 40 -45 0 1 20 50', () => {
            const parsed = parsePath('M40 30a20 40 -45 0 1 20 50')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 40 30 A 20 40 -45 0 1 60 80');
        });

        test('M10 10 l10 0 l0 10 Z l 0 10 l 10 0 z l-1-1', () => {
            const parsed = parsePath('M10 10 l10 0 l0 10 Z l 0 10 l 10 0 z l-1-1')
            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 L 20 10 L 20 20 Z L 10 20 L 20 20 Z L 9 9');
        });

        test(`Very long path 1`, () => {
            const parsed = parsePath(`M233.51,56.8c-0.57,0.24-1.33,0.52-2.28,0.86c-0.95,0.33-1.93,0.5-2.92,0.5s-1.84-0.27-2.53-0.82
\tc-0.69-0.55-1.03-1.49-1.03-2.82V36.25h7.85V28.9h-7.85V16.77h-9.56V28.9h-17.84V16.77h-9.56V28.9h-4.92v7.35h4.92v21.48
\tc0,1.67,0.26,3.08,0.79,4.25c0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5
\tc2.05,0,4-0.28,5.85-0.86c1.86-0.57,3.42-1.14,4.71-1.71l-1.93-7.56c-0.57,0.24-1.33,0.52-2.28,0.86c-0.95,0.33-1.93,0.5-2.92,0.5
\tc-1,0-1.84-0.27-2.53-0.82c-0.69-0.55-1.03-1.49-1.03-2.82V36.25h17.84v21.48c0,1.67,0.26,3.08,0.79,4.25
\tc0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5c2.05,0,4-0.28,5.85-0.86
\tc1.86-0.57,3.42-1.14,4.71-1.71L233.51,56.8z`);

            const res = pathDataToAbsolute(parsed);
            expect(pathDataToString(res)).toStrictEqual(`M 233.51 56.8 C 232.94 57.04 232.18 57.32 231.23 57.66 C 230.28 57.99 229.3 58.16 228.31 58.16 S 226.47 57.89 225.78 57.34 C 225.09 56.79 224.75 55.85 224.75 54.52 V 36.25 H 232.6 V 28.9 H 224.75 V 16.77 H 215.19 V 28.9 H 197.35 V 16.77 H 187.79 V 28.9 H 182.87 V 36.25 H 187.79 V 57.73 C 187.79 59.4 188.05 60.81 188.58 61.98 C 189.1 63.15 189.8 64.1 190.68 64.83 C 191.56 65.57 192.58 66.1 193.75 66.44 C 194.91 66.77 196.16 66.94 197.5 66.94 C 199.55 66.94 201.5 66.66 203.35 66.08 C 205.21 65.51 206.77 64.94 208.06 64.37 L 206.13 56.81 C 205.56 57.05 204.8 57.33 203.85 57.67 C 202.9 58 201.92 58.17 200.93 58.17 C 199.93 58.17 199.09 57.9 198.4 57.35 C 197.71 56.8 197.37 55.86 197.37 54.53 V 36.25 H 215.21 V 57.73 C 215.21 59.4 215.47 60.81 216 61.98 C 216.52 63.15 217.22 64.1 218.1 64.83 C 218.98 65.57 220 66.1 221.17 66.44 C 222.33 66.77 223.58 66.94 224.92 66.94 C 226.97 66.94 228.92 66.66 230.77 66.08 C 232.63 65.51 234.19 64.94 235.48 64.37 L 233.51 56.8 Z`);
        });

        test('pathToAbs', () => {
            const d = pathToAbs(`M 10 30 a 20 20 0 0 1 40 0 a 20 20 0 0 1 40 0 q 0 30 -40 60 q -40 -30 -40 -60 z`);
            expect(d).toStrictEqual('M10 30A20 20 0 0 1 50 30 20 20 0 0 1 90 30Q90 60 50 90 10 60 10 30Z');
        });

        test('pathToAbs with beautify = true', () => {
            const d = pathToAbs(`M 10 30 a 20 20 0 0 1 40 0 a 20 20 0 0 1 40 0 q 0 30 -40 60 q -40 -30 -40 -60 z`, true);
            expect(d).toStrictEqual('M 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Q 10 60 10 30 Z');
        });

        test('pathToAbs with decimal places = 1', () => {
            const d = pathToAbs(`M -0.100 -0.252625 l -1.180000 -12.999999`, false, 1);
            expect(d).toStrictEqual('M-.1 -.3 -1.3 -13.3');
        });
    });

    describe('ToString', () => {

        test('Empty path', () => {
            const parsed = parsePath('')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('');
        });

        test('M10 10 L30 30', () => {
            const parsed = parsePath('M10 10 L30 40')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 l 20 30');
        });

        test('M10 10 l30 40', () => {
            const parsed = parsePath('M10 10 l30 40')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 l 30 40');
        });

        test('M10 10 l30 40Z', () => {
            const parsed = parsePath('M10 10 l30 40Z')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 l 30 40 z');
        });

        test('M10 10 H20 Z', () => {
            const parsed = parsePath('M10 10 H20 Z')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 h 10 z');
        });

        test('M10 10 h20 Z', () => {
            const parsed = parsePath('M10 10 h20 Z')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 h 20 z');
        });

        test('M10 10 V20 Z', () => {
            const parsed = parsePath('M10 10 V20 Z')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 v 10 z');
        });

        test('M10 10 v20 Z', () => {
            const parsed = parsePath('M10 10 v20 Z')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 v 20 z');
        });

        test('M10 10 C 20 40 40 40 50 10 60 -20 70 -20 90 10', () => {
            const parsed = parsePath('M10 10 C 20 40 40 40 50 10 60 -20 70 -20 90 10');
            // should be: M10 10 c 10 30 30 30 40 0 c 10 -30 20 -30 40 0
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 c 10 30 30 30 40 0 c 10 -30 20 -30 40 0');
        });

        test('M10 10H40h50', () => {
            const parsed = parsePath('M10 10H40h50')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 h 30 h 50');
        });

        test('M10 10V40v50', () => {
            const parsed = parsePath('M10 10V40v50')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 v 30 v 50');
        });

        test('M40 30A20 40 -45 0 1 60 80', () => {
            const parsed = parsePath('M40 30A20 40 -45 0 1 60 80')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 40 30 a 20 40 -45 0 1 20 50');
        });

        test('M10 10 L20 10 L20 20 Z L10 20 L20 20 z L9 9', () => {
            const parsed = parsePath('M10 10 L20 10 L20 20 Z L10 20 L20 20 z L9 9')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 l 10 0 l 0 10 z l 0 10 l 10 0 z l -1 -1');
        });

        test('M10 20L0 0 5 5 10 10', () => {
            const parsed = parsePath('M10 20L0 0 5 5 10 10')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 20 l -10 -20 l 5 5 l 5 5');
        });

        test(`Very long path 1`, () => {
            const parsed = parsePath(`M233.51,56.8c-0.57,0.24-1.33,0.52-2.28,0.86c-0.95,0.33-1.93,0.5-2.92,0.5s-1.84-0.27-2.53-0.82
\tc-0.69-0.55-1.03-1.49-1.03-2.82V36.25h7.85V28.9h-7.85V16.77h-9.56V28.9h-17.84V16.77h-9.56V28.9h-4.92v7.35h4.92v21.48
\tc0,1.67,0.26,3.08,0.79,4.25c0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5
\tc2.05,0,4-0.28,5.85-0.86c1.86-0.57,3.42-1.14,4.71-1.71l-1.93-7.56c-0.57,0.24-1.33,0.52-2.28,0.86c-0.95,0.33-1.93,0.5-2.92,0.5
\tc-1,0-1.84-0.27-2.53-0.82c-0.69-0.55-1.03-1.49-1.03-2.82V36.25h17.84v21.48c0,1.67,0.26,3.08,0.79,4.25
\tc0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5c2.05,0,4-0.28,5.85-0.86
\tc1.86-0.57,3.42-1.14,4.71-1.71L233.51,56.8z`);

            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual(`M 233.51 56.8 c -0.57 0.24 -1.33 0.52 -2.28 0.86 c -0.95 0.33 -1.93 0.5 -2.92 0.5 s -1.84 -0.27 -2.53 -0.82 c -0.69 -0.55 -1.03 -1.49 -1.03 -2.82 v -18.27 h 7.85 v -7.35 h -7.85 v -12.13 h -9.56 v 12.13 h -17.84 v -12.13 h -9.56 v 12.13 h -4.92 v 7.35 h 4.92 v 21.48 c 0 1.67 0.26 3.08 0.79 4.25 c 0.52 1.17 1.22 2.12 2.1 2.85 c 0.88 0.74 1.9 1.27 3.07 1.61 c 1.16 0.33 2.41 0.5 3.75 0.5 c 2.05 0 4 -0.28 5.85 -0.86 c 1.86 -0.57 3.42 -1.14 4.71 -1.71 l -1.93 -7.56 c -0.57 0.24 -1.33 0.52 -2.28 0.86 c -0.95 0.33 -1.93 0.5 -2.92 0.5 c -1 0 -1.84 -0.27 -2.53 -0.82 c -0.69 -0.55 -1.03 -1.49 -1.03 -2.82 v -18.28 h 17.84 v 21.48 c 0 1.67 0.26 3.08 0.79 4.25 c 0.52 1.17 1.22 2.12 2.1 2.85 c 0.88 0.74 1.9 1.27 3.07 1.61 c 1.16 0.33 2.41 0.5 3.75 0.5 c 2.05 0 4 -0.28 5.85 -0.86 c 1.86 -0.57 3.42 -1.14 4.71 -1.71 l -1.97 -7.57 z`);
        });

        test('M 10 10 L 20 20 m 5 5 L 30 30', () => {
            const parsed = parsePath('M 10 10 L 20 20 m 5 5 L 30 30')
            const res = pathDataToRelative(parsed);
            expect(pathDataToString(res)).toStrictEqual('M 10 10 l 10 10 m 5 5 l 5 5');
        });
    });

});