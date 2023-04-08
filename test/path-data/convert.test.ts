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
    });

});