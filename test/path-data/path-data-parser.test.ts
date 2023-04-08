import { parsePath } from '../../src/index-esm';

describe('Path Data Parser', () => {

    describe('Empty strings and whitespaces', () => {

        test('parsePath with d = empty string', () => {
            const res = parsePath('');
            expect(res).toStrictEqual({ commands: [], errors: [] });
        });

        test('parsePath with d = string with whitespaces', () => {
            const res = parsePath('    ');
            expect(res).toStrictEqual({ commands: [], errors: [] });
        });

        test('parsePath with d = string with tabs and newlines', () => {
            const res = parsePath(`    \t
        `);
            expect(res).toStrictEqual({ commands: [], errors: [] });
        })
    });

    describe('It should start with M or m', () => {

        test('Non empty path doesn\'t begin with M or m ---> error', () => {
            const res = parsePath('L 10,30');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "A path data segment must begin with a 'moveto' command 'M' or 'm'."
                    }
                ]
            });
        });

        test('M without first number', () => {
            const res = parsePath('M');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "Expected number(s) after command M."
                    }
                ]
            });
        });

        test('M without second number', () => {
            const res = parsePath('M 0');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "Expected number(s) after command M."
                    }
                ]
            });
        });

        test('m without first number', () => {
            const res = parsePath('m');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "Expected number(s) after command m."
                    }
                ]
            });
        });

        test('m without second number', () => {
            const res = parsePath('m 0');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "Expected number(s) after command m."
                    }
                ]
            });
        });

        test('0', () => {
            const res = parsePath('0');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "A path data segment must begin with a 'moveto' command 'M' or 'm'."
                    }
                ]
            });
        });

        test('U', () => {
            const res = parsePath('0');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "A path data segment must begin with a 'moveto' command 'M' or 'm'."
                    }
                ]
            });
        });
    });

    describe('M/m commands', () => {

        test('M 10 20', () => {
            const res = parsePath('M 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 1.1', () => {
            const res = parsePath('M 1.1');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            1,
                            0.1
                        ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20', () => {
            const res = parsePath('m 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 10 ---> error, nums of args should be even', () => {
            const res = parsePath('M 10 20 10');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected a number."
                    }
                ]
            });
        });

        test('M 10 20 M ---> error', () => {
            const res = parsePath('M 10 20 M');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command M."
                    }
                ]
            });
        });

        test('M 10 20 M 10 ---> error', () => {
            const res = parsePath('M 10 20 M 10');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command M."
                    }
                ]
            });
        });

        test('M 10 20 100 200', () => {
            const res = parsePath('M 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 100 200 300 400', () => {
            const res = parsePath('M 10 20 100 200 300 400');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "L",
                        "params": [ 300, 400 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 100 200', () => {
            const res = parsePath('m 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 100 200 300 400', () => {
            const res = parsePath('m 10 20 100 200 300 400');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "l",
                        "params": [ 300, 400 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 M 10 20', () => {
            const res = parsePath('M 10 20 M 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 m 10 20', () => {
            const res = parsePath('m 10 20 m 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 100 200 M 10 20 100 200', () => {
            const res = parsePath('M 10 20 100 200 M 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 100 200 m 10 20 100 200 m 50 60 70 80', () => {
            const res = parsePath('m 10 20 100 200 m 10 20 100 200 m 50 60 70 80');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "m",
                        "params": [ 50, 60 ]
                    },
                    {
                        "command": "l",
                        "params": [ 70, 80 ]
                    }
                ],
                "errors": []
            });
        });

        test('M+ ---> error', () => {
            const res = parsePath('M+');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 1,
                        "line": 0,
                        "msg": "Unexpected character +"
                    }
                ]
            });
        });

        test('M00', () => {
            const res = parsePath('M00');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            0,
                            0
                        ]
                    }
                ],
                "errors": []
            });
        });
    });

    describe('Non existing command', () => {

        test('R ---> error', () => {
            const res = parsePath('R');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "Unexpected character R"
                    }
                ]
            });
        });

        test('R 10 20 ---> error', () => {
            const res = parsePath('R 10 20');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 0,
                        "line": 0,
                        "msg": "Unexpected character R"
                    }
                ]
            });
        });

        test('M 10 20 R 10 20 ---> error', () => {
            const res = parsePath('M 10 20 R 10 20');
            expect(res).toStrictEqual({
                "commands": [],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Unexpected character R"
                    }
                ]
            });
        });
    });

    describe('Z command', () => {

        test('M 10 20 z', () => {
            const res = parsePath('M 10 20 z');
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
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 Z', () => {
            const res = parsePath('M 10 20 Z');
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
                        "command": "Z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 m 10 20 z', () => {
            const res = parsePath('m 10 20 m 10 20 z');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 Z M 10 20 Z', () => {
            const res = parsePath('M 10 20 Z M 10 20 Z');
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
                        "command": "Z",
                        "params": []
                    },
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    },
                    {
                        "command": "Z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });
    });

    describe('L/l commands', () => {

        test('M 10 20 L 100 200', () => {
            const res = parsePath('M 10 20 L 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 l 100 200', () => {
            const res = parsePath('m 10 20 l 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 L 10 ---> error, nums of args should be even', () => {
            const res = parsePath('M 10 20 L 10');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                    "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command L."
                    }
                ]
            });
        });

        test('M 10 20 L ---> error', () => {
            const res = parsePath('M 10 20 L');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command L."
                    }
                ]
            });
        });

        test('M 10 20 M 30 40 L ---> error', () => {
            const res = parsePath('M 10 20 M 30 40 L');
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
                        "command": "M",
                        "params": [
                            30,
                            40
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 16,
                        "line": 0,
                        "msg": "Expected number(s) after command L."
                    }
                ]
            });
        });

        test('M 0 0 L 10 20 100 200', () => {
            const res = parsePath('M 0 0 L 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 L 10 20 100 200 300 400', () => {
            const res = parsePath('M 0 0 L 10 20 100 200 300 400');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "L",
                        "params": [ 300, 400 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 l 10 20 100 200', () => {
            const res = parsePath('M 0 0 l 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "l",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 5 5 l 10 20 100 200 300 400', () => {
            const res = parsePath('m 5 5 l 10 20 100 200 300 400');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 5, 5 ]
                    },
                    {
                        "command": "l",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "l",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "l",
                        "params": [ 300, 400 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 L 10 20 L 10 20', () => {
            const res = parsePath('M 0 0 L 10 20 L 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 0 0 l 10 20 L 10 20', () => {
            const res = parsePath('m 0 0 l 10 20 L 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "l",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 90 80 L 10 20 100 200 L 10 20 100 200', () => {
            const res = parsePath('M 90 80 L 10 20 100 200 L 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 90, 80 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "L",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "L",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

    });

    describe('H/h commands', () => {

        test('M 10 20 H 100', () => {
            const res = parsePath('M 10 20 H 100');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "H",
                        "params": [ 100 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 h 100', () => {
            const res = parsePath('M 10 20 h 100');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "h",
                        "params": [ 100 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 H 100 200 300', () => {
            const res = parsePath('M 10 20 H 100 200 300');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "H",
                        "params": [ 100 ]
                    },
                    {
                        "command": "H",
                        "params": [ 200 ]
                    },
                    {
                        "command": "H",
                        "params": [ 300 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 h 100 200 300', () => {
            const res = parsePath('M 10 20 h 100 200 300');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "h",
                        "params": [ 100 ]
                    },
                    {
                        "command": "h",
                        "params": [ 200 ]
                    },
                    {
                        "command": "h",
                        "params": [ 300 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 H  ---> error', () => {
            const res = parsePath('M 10 20 H ');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command H."
                    }
                ]
            });
        });

        test('M 10 20 H 30 H ---> error', () => {
            const res = parsePath('M 10 20 H 30 H');
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
                        "command": "H",
                        "params": [
                            30
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 13,
                        "line": 0,
                        "msg": "Expected number(s) after command H."
                    }
                ]
            });
        });

        test('M 10 20 H 100 200 h 300', () => {
            const res = parsePath('M 10 20 H 100 200 h 300');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "H",
                        "params": [ 100 ]
                    },
                    {
                        "command": "H",
                        "params": [ 200 ]
                    },
                    {
                        "command": "h",
                        "params": [ 300 ]
                    }
                ],
                "errors": []
            });
        });
    });

    describe('V/v commands', () => {

        test('M 10 20 V 100', () => {
            const res = parsePath('M 10 20 V 100');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "V",
                        "params": [ 100 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 v 100', () => {
            const res = parsePath('M 10 20 v 100');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "v",
                        "params": [ 100 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 V 100 200 300', () => {
            const res = parsePath('M 10 20 V 100 200 300');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "V",
                        "params": [ 100 ]
                    },
                    {
                        "command": "V",
                        "params": [ 200 ]
                    },
                    {
                        "command": "V",
                        "params": [ 300 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 h 100 200 300', () => {
            const res = parsePath('M 10 20 h 100 200 300');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "h",
                        "params": [ 100 ]
                    },
                    {
                        "command": "h",
                        "params": [ 200 ]
                    },
                    {
                        "command": "h",
                        "params": [ 300 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 V  ---> error', () => {
            const res = parsePath('M 10 20 V ');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command V."
                    }
                ]
            });
        });

        test('M 10 20 V 30 V ---> error', () => {
            const res = parsePath('M 10 20 V 30 V');
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
                        "command": "V",
                        "params": [
                            30
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 13,
                        "line": 0,
                        "msg": "Expected number(s) after command V."
                    }
                ]
            });
        });

        test('M 10 20 V 100 200 v 300', () => {
            const res = parsePath('M 10 20 V 100 200 v 300');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "V",
                        "params": [ 100 ]
                    },
                    {
                        "command": "V",
                        "params": [ 200 ]
                    },
                    {
                        "command": "v",
                        "params": [ 300 ]
                    }
                ],
                "errors": []
            });
        });
    });

    describe('V/v/H/h', () => {
        test('M 10 20 V 100 200 H 300 400 v 500 600 h 700 800', () => {
            const res = parsePath('M 10 20 V 100 200 H 300 400 v 500 600 h 700 800');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "V",
                        "params": [ 100 ]
                    },
                    {
                        "command": "V",
                        "params": [ 200 ]
                    },
                    {
                        "command": "H",
                        "params": [ 300 ]
                    },
                    {
                        "command": "H",
                        "params": [ 400 ]
                    },
                    {
                        "command": "v",
                        "params": [ 500 ]
                    },
                    {
                        "command": "v",
                        "params": [ 600 ]
                    },
                    {
                        "command": "h",
                        "params": [ 700 ]
                    },
                    {
                        "command": "h",
                        "params": [ 800 ]
                    },
                ],
                "errors": []
            });
        });
    });

    describe('C/c commands', () => {

        test('M 10 20 C 1 1 2 2 3 3', () => {
            const res = parsePath('M 10 20 C 1 1 2 2 3 3');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "C",
                        "params": [ 1, 1, 2, 2, 3, 3 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 c 1 1 2 2 3 3', () => {
            const res = parsePath('M 10 20 c 1 1 2 2 3 3');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "c",
                        "params": [ 1, 1, 2, 2, 3, 3 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 C 1 1 2 2 3 3 4 4 5 5 6 6', () => {
            const res = parsePath('M 10 20 C 1 1 2 2 3 3 4 4 5 5 6 6');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "C",
                        "params": [ 1, 1, 2, 2, 3, 3 ]
                    },
                    {
                        "command": "C",
                        "params": [ 4, 4, 5, 5, 6, 6 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 c 1 1 2 2 3 3 4 4 5 5 6 6', () => {
            const res = parsePath('M 10 20 c 1 1 2 2 3 3 4 4 5 5 6 6');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "c",
                        "params": [ 1, 1, 2, 2, 3, 3 ]
                    },
                    {
                        "command": "c",
                        "params": [ 4, 4, 5, 5, 6, 6 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 c 1 1 2 2 3 3 4 4 5 5 6 6 C 7 7 8 8 9 9', () => {
            const res = parsePath('M 10 20 c 1 1 2 2 3 3 4 4 5 5 6 6 C 7 7 8 8 9 9');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "c",
                        "params": [ 1, 1, 2, 2, 3, 3 ]
                    },
                    {
                        "command": "c",
                        "params": [ 4, 4, 5, 5, 6, 6 ]
                    },
                    {
                        "command": "C",
                        "params": [ 7, 7, 8, 8, 9, 9 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 C 1  ---> error', () => {
            const res = parsePath('M 10 20 C 1');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command C."
                    }
                ]
            });
        });

        test('M 10 20 C 1 2  ---> error', () => {
            const res = parsePath('M 10 20 C 1 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command C."
                    }
                ]
            });
        });

        test('M 10 20 C 1 2 3  ---> error', () => {
            const res = parsePath('M 10 20 C 1 2 3');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command C."
                    }
                ]
            });
        });

        test('M 10 20 C 1 2 3 4  ---> error', () => {
            const res = parsePath('M 10 20 C 1 2 3 4');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command C."
                    }
                ]
            });
        });

        test('M 10 20 C 1 2 3 4 5  ---> error', () => {
            const res = parsePath('M 10 20 C 1 2 3 4 5');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command C."
                    }
                ]
            });
        });

        test('M 10 20 C 1 2 3 4 5 6 c ---> error', () => {
            const res = parsePath('M 10 20 C 1 2 3 4 5 6 c');
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
                        "command": "C",
                        "params": [1, 2, 3, 4, 5, 6]
                    }
                ],
                "errors": [
                    {
                        "col": 22,
                        "line": 0,
                        "msg": "Expected number(s) after command c."
                    }
                ]
            });
        });

    });

    describe('S/s commands', () => {

        test('M 10 20 S 1 1 2 2', () => {
            const res = parsePath('M 10 20 S 1 1 2 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "S",
                        "params": [ 1, 1, 2, 2 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 s 1 1 2 2', () => {
            const res = parsePath('M 10 20 s 1 1 2 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "s",
                        "params": [ 1, 1, 2, 2 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 S 1 1 2 2 3 3 4 4', () => {
            const res = parsePath('M 10 20 S 1 1 2 2 3 3 4 4');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "S",
                        "params": [ 1, 1, 2, 2 ]
                    },
                    {
                        "command": "S",
                        "params": [ 3, 3, 4, 4 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 s 1 1 2 2 3 3 4 4', () => {
            const res = parsePath('M 10 20 s 1 1 2 2 3 3 4 4');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "s",
                        "params": [ 1, 1, 2, 2 ]
                    },
                    {
                        "command": "s",
                        "params": [ 3, 3, 4, 4 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 s 1 1 2 2 3 3 4 4 5 5 6 6 S 7 7 8 8', () => {
            const res = parsePath('M 10 20 s 1 1 2 2 3 3 4 4 5 5 6 6 S 7 7 8 8');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "s",
                        "params": [ 1, 1, 2, 2 ]
                    },
                    {
                        "command": "s",
                        "params": [ 3, 3, 4, 4 ]
                    },
                    {
                        "command": "s",
                        "params": [ 5, 5, 6, 6 ]
                    },
                    {
                        "command": "S",
                        "params": [ 7, 7, 8, 8 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 S 1  ---> error', () => {
            const res = parsePath('M 10 20 S 1');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command S."
                    }
                ]
            });
        });

        test('M 10 20 S 1 2  ---> error', () => {
            const res = parsePath('M 10 20 S 1 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command S."
                    }
                ]
            });
        });

        test('M 10 20 S 1 2 3  ---> error', () => {
            const res = parsePath('M 10 20 S 1 2 3');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command S."
                    }
                ]
            });
        });

    });

    describe('Q/q commands', () => {

        test('M 10 20 Q 1 1 2 2', () => {
            const res = parsePath('M 10 20 Q 1 1 2 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "Q",
                        "params": [ 1, 1, 2, 2 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 q 1 1 2 2', () => {
            const res = parsePath('M 10 20 q 1 1 2 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "q",
                        "params": [ 1, 1, 2, 2 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 Q 1 1 2 2 3 3 4 4', () => {
            const res = parsePath('M 10 20 Q 1 1 2 2 3 3 4 4');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "Q",
                        "params": [ 1, 1, 2, 2 ]
                    },
                    {
                        "command": "Q",
                        "params": [ 3, 3, 4, 4 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 q 1 1 2 2 3 3 4 4', () => {
            const res = parsePath('M 10 20 q 1 1 2 2 3 3 4 4');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "q",
                        "params": [ 1, 1, 2, 2 ]
                    },
                    {
                        "command": "q",
                        "params": [ 3, 3, 4, 4 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 q 1 1 2 2 3 3 4 4 5 5 6 6 S 7 7 8 8', () => {
            const res = parsePath('M 10 20 q 1 1 2 2 3 3 4 4 5 5 6 6 Q 7 7 8 8');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "q",
                        "params": [ 1, 1, 2, 2 ]
                    },
                    {
                        "command": "q",
                        "params": [ 3, 3, 4, 4 ]
                    },
                    {
                        "command": "q",
                        "params": [ 5, 5, 6, 6 ]
                    },
                    {
                        "command": "Q",
                        "params": [ 7, 7, 8, 8 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 Q 1  ---> error', () => {
            const res = parsePath('M 10 20 Q 1');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command Q."
                    }
                ]
            });
        });

        test('M 10 20 Q 1 2  ---> error', () => {
            const res = parsePath('M 10 20 Q 1 2');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command Q."
                    }
                ]
            });
        });

        test('M 10 20 Q 1 2 3  ---> error', () => {
            const res = parsePath('M 10 20 Q 1 2 3');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command Q."
                    }
                ]
            });
        });

    });

    describe('T/t commands', () => {

        test('M 10 20 T 100 200', () => {
            const res = parsePath('M 10 20 T 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 10 20 t 100 200', () => {
            const res = parsePath('m 10 20 t 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "t",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10 20 T 10 ---> error, nums of args should be even', () => {
            const res = parsePath('M 10 20 T 10');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command T."
                    }
                ]
            });
        });

        test('M 10 20 T ---> error', () => {
            const res = parsePath('M 10 20 T');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            10,
                            20
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 8,
                        "line": 0,
                        "msg": "Expected number(s) after command T."
                    }
                ]
            });
        });

        test('M 10 20 M 30 40 T ---> error', () => {
            const res = parsePath('M 10 20 M 30 40 T');
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
                        "command": "M",
                        "params": [
                            30,
                            40
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 16,
                        "line": 0,
                        "msg": "Expected number(s) after command T."
                    }
                ]
            });
        });

        test('M 0 0 T 10 20 100 200', () => {
            const res = parsePath('M 0 0 T 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 T 10 20 100 200 300 400', () => {
            const res = parsePath('M 0 0 T 10 20 100 200 300 400');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "T",
                        "params": [ 300, 400 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 t 10 20 100 200', () => {
            const res = parsePath('M 0 0 t 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "t",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "t",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 5 5 t 10 20 100 200 300 400', () => {
            const res = parsePath('m 5 5 t 10 20 100 200 300 400');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 5, 5 ]
                    },
                    {
                        "command": "t",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "t",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "t",
                        "params": [ 300, 400 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 T 10 20 T 10 20', () => {
            const res = parsePath('M 0 0 T 10 20 T 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('m 0 0 t 10 20 T 10 20', () => {
            const res = parsePath('m 0 0 t 10 20 T 10 20');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "m",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "t",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 90 80 T 10 20 100 200 T 10 20 100 200', () => {
            const res = parsePath('M 90 80 T 10 20 100 200 T 10 20 100 200');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 90, 80 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 100, 200 ]
                    },
                    {
                        "command": "T",
                        "params": [ 10, 20 ]
                    },
                    {
                        "command": "T",
                        "params": [ 100, 200 ]
                    }
                ],
                "errors": []
            });
        });

    });

    describe('A/a commands', () => {

        test('M600,350 l 50,-25 a25,25 -30 0,1 50,-25', () => {
            const res = parsePath('M600,350 l 50,-25 a25,25 -30 0,1 50,-25');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 600, 350 ]
                    },
                    {
                        "command": "l",
                        "params": [ 50, -25 ]
                    },
                    {
                        "command": "a",
                        "params": [ 25, 25, -30, 0, 1, 50, -25 ]
                    }
                ],
                "errors": []
            });
        });

        test('M600,350 l 50,-25 a25,25 -30 1000,1 50,-25 ---> error: 4th param (1000) of the arc can be 1 or 0 only', () => {
            const res = parsePath('M600,350 l 50,-25 a25,25 -30 1000,1 50,-25');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            600,
                            350
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            50,
                            -25
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 18,
                        "line": 0,
                        "msg": "Arc flags must be 0 or 1."
                    }
                ]
            });
        });

        test('M600,350 l 50,-25 a25,25 -30 0,2000 50,-25 ---> error: 5th param (2000) of the arc can be 1 or 0 only', () => {
            const res = parsePath('M600,350 l 50,-25 a25,25 -30 0,2000 50,-25');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [
                            600,
                            350
                        ]
                    },
                    {
                        "command": "l",
                        "params": [
                            50,
                            -25
                        ]
                    }
                ],
                "errors": [
                    {
                        "col": 18,
                        "line": 0,
                        "msg": "Arc flags must be 0 or 1."
                    }
                ]
            });
        });

        test('M 10,30 A 20,20 10,0,1 50,30 A 20,20 10,0,1 90,30', () => {
            const res = parsePath('M 10,30 A 20,20 10,0,1 50,30 A 20,20 10,0,1 90,30');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 30 ]
                    },
                    {
                        "command": "A",
                        "params": [ 20,20, 10,0,1, 50,30 ]
                    },
                    {
                        "command": "A",
                        "params": [ 20,20, 10,0,1, 90,30 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10,30 A 20,20 10,0,1 50,30 20,20 10,0,1 90,30', () => {
            const res = parsePath('M 10,30 A 20,20 10,0,1 50,30 20,20 10,0,1 90,30');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 30 ]
                    },
                    {
                        "command": "A",
                        "params": [ 20,20, 10,0,1, 50,30 ]
                    },
                    {
                        "command": "A",
                        "params": [ 20,20, 10,0,1, 90,30 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 10,30 a 20,20 10,0,1 50,30 a 20,20 10,0,1 90,30', () => {
            const res = parsePath('M 10,30 a 20,20 10,0,1 50,30 a 20,20 10,0,1 90,30');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 30 ]
                    },
                    {
                        "command": "a",
                        "params": [ 20,20, 10,0,1, 50,30 ]
                    },
                    {
                        "command": "a",
                        "params": [ 20,20, 10,0,1, 90,30 ]
                    }
                ],
                "errors": []
            });
        });

        test('M 0 0 a.625.625 0 01.84-.925', () => {
            const res = parsePath('M 0 0 a.625.625 0 01.84-.925');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "a",
                        "params": [ 0.625, 0.625, 0, 0, 1, 0.84, -0.925 ]
                    },
                ],
                "errors": []
            });
        });

        test('M 0 0 a.625.625 0 0 1 .84-.925', () => {
            const res = parsePath('M 0 0 a.625.625 0 01.84-.925');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "a",
                        "params": [ 0.625, 0.625, 0, 0, 1, 0.84, -0.925 ]
                    },
                ],
                "errors": []
            });
        });

        test('M 0 0 a 1.625 1.625 1.625 1 1 1.625 1.625', () => {
            const res = parsePath('M 0 0 a 1.625 1.625 1.625 1 1 1.625 1.625');
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 0, 0 ]
                    },
                    {
                        "command": "a",
                        "params": [ 1.625, 1.625, 1.625, 1, 1, 1.625, 1.625 ]
                    },
                ],
                "errors": []
            });
        });
    });

    describe('Combined', () => {

        test(`M 10,30 
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, () => {
            const res = parsePath(`M 10,30 
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`);
            expect(res).toStrictEqual({
                "commands": [
                    {
                        "command": "M",
                        "params": [ 10, 30 ]
                    },
                    {
                        "command": "A",
                        "params": [ 20,20, 0,0,1, 50,30 ]
                    },
                    {
                        "command": "A",
                        "params": [ 20,20, 0,0,1, 90,30 ]
                    },
                    {
                        "command": "Q",
                        "params": [ 90,60, 50,90 ]
                    },
                    {
                        "command": "Q",
                        "params": [ 10,60, 10,30 ]
                    },
                    {
                        "command": "z",
                        "params": []
                    }
                ],
                "errors": []
            });
        });
    });
});


