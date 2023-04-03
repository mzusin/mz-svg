QUnit.module('Defs: createDefs', (hooks) => {

  QUnit.test('createDefs without parameters', (assert) => {
    const id = 'my-path';

    const $defs = mzSVG.createDefs();

    assert.strictEqual(!!$defs, true);
  });

  QUnit.test('createDefs with provided id', (assert) => {
    const id = 'my-path';

    const $defs = mzSVG.createDefs({
      id,
    });

    assert.strictEqual($defs.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createDefs with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $defs = mzSVG.createDefs({
      classes,
    });

    assert.strictEqual($defs.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });
});
