import { parseD } from '../../src/index-esm';

describe('Path Data Parser', () => {

    test('parseD with d = empty string', () => {
        const res = parseD('');
        expect(res).toStrictEqual({ commands: [], errors: [] });
    });

    test('parseD with d = string with whitespaces', () => {
        const res = parseD('    ');
        expect(res).toStrictEqual({ commands: [], errors: [] });
    });

    test('parseD with d = string with tabs and newlines', () => {
        const res = parseD(`    \t
        `);
        expect(res).toStrictEqual({ commands: [], errors: [] });
    });

    test('Non empty path doesn\'t begin with M or m ---> error', () => {
        const res = parseD('L 10,30');
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
        const res = parseD('M');
        expect(res).toStrictEqual({
            "commands": [],
            "errors": [
                {
                    "col": 0,
                    "line": 0,
                    "msg": "Expected number(s) after attribute M."
                }
            ]
        });
    });

    test('M without second number', () => {
        const res = parseD('M 0');
        expect(res).toStrictEqual({
            "commands": [],
            "errors": [
                {
                    "col": 0,
                    "line": 0,
                    "msg": "Expected number(s) after attribute M."
                }
            ]
        });
    });

    test('m without first number', () => {
        const res = parseD('m');
        expect(res).toStrictEqual({
            "commands": [],
            "errors": [
                {
                    "col": 0,
                    "line": 0,
                    "msg": "Expected number(s) after attribute m."
                }
            ]
        });
    });

    test('m without second number', () => {
        const res = parseD('m 0');
        expect(res).toStrictEqual({
            "commands": [],
            "errors": [
                {
                    "col": 0,
                    "line": 0,
                    "msg": "Expected number(s) after attribute m."
                }
            ]
        });
    });

    test('M 10 20', () => {
        const res = parseD('M 10 20');
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

    test('m 10 20', () => {
        const res = parseD('m 10 20');
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
        const res = parseD('M 10 20 10');
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
        const res = parseD('M 10 20 M');
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
                    "msg": "Expected number(s) after attribute M."
                }
            ]
        });
    });

    test('M 10 20 M 10 ---> error', () => {
        const res = parseD('M 10 20 M 10');
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
                    "msg": "Expected number(s) after attribute M."
                }
            ]
        });
    });

    test('M 10 20 100 200', () => {
        const res = parseD('M 10 20 100 200');
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
        const res = parseD('M 10 20 100 200 300 400');
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
        const res = parseD('m 10 20 100 200');
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
        const res = parseD('m 10 20 100 200 300 400');
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
        const res = parseD('M 10 20 M 10 20');
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
        const res = parseD('m 10 20 m 10 20');
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
        const res = parseD('M 10 20 100 200 M 10 20 100 200');
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
        const res = parseD('m 10 20 100 200 m 10 20 100 200 m 50 60 70 80');
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

    test('R ---> error', () => {
        const res = parseD('R');
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
        const res = parseD('R 10 20');
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
        const res = parseD('M 10 20 R 10 20');
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

    test('M 10 20 z', () => {
        const res = parseD('M 10 20 z');
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
        const res = parseD('M 10 20 Z');
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
        const res = parseD('m 10 20 m 10 20 z');
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
        const res = parseD('M 10 20 Z M 10 20 Z');
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


