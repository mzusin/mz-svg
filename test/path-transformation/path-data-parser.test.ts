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
});


