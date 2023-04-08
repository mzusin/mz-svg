QUnit.module('Path Data: isPathValid', (hooks) => {

    QUnit.test('isPathValid() ---> true', (assert) => {
        const isValid = mzSVG.isPathValid(`M 10,30 
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`);
        assert.strictEqual(isValid, true);
    });

    QUnit.test('isPathValid() ---> false', (assert) => {
        const isValid = mzSVG.isPathValid(`M 10,30 
           A 20,20 0,10,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`);
        assert.strictEqual(isValid, false);
    });
});

QUnit.module('Path Data: parsePath', (hooks) => {

    QUnit.test('parsePath() M 10 20', (assert) => {
        const res = mzSVG.parsePath(`M 10 20`);
        assert.deepEqual(res, {
            "commands": [
                {
                    "command": "M",
                    "params": [ 10, 20 ]
                }
            ],
            "errors": []
        });
    });
});
