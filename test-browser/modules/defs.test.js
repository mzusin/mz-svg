QUnit.module('Defs: createDefs', (hooks) => {

  QUnit.test('createDefs without parameters', (assert) => {
    const $defs = mzSVG.createDefs();

    assert.strictEqual(!!$defs, true);
  });

  QUnit.test('createDefs with provided id', (assert) => {
    const id = 'my-defs';

    const $defs = mzSVG.createDefs({
      id,
    });

    assert.strictEqual($defs.getAttribute('id'), id);
  });

  QUnit.test('createDefs with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $defs = mzSVG.createDefs({
      classes,
    });

    assert.strictEqual($defs.getAttribute('class'), classes);
  });
});
