QUnit.module('Use: createUse', (hooks) => {

  QUnit.test('createUse without parameters', (assert) => {
    const $use = mzSVG.createUse();

    assert.strictEqual(!!$use, true);
  });

  QUnit.test('createUse with provided id', (assert) => {
    const id = 'my-use';

    const $use = mzSVG.createUse({
      id,
    });

    assert.strictEqual($use.getAttribute('id'), id);
  });

  QUnit.test('createUse with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $use = mzSVG.createUse({
      classes,
    });

    assert.strictEqual($use.getAttribute('class'), classes);
  });

  QUnit.test('createUse with provided href', (assert) => {
    const href = '#my-circle';

    const $use = mzSVG.createUse({
      href,
    });

    assert.strictEqual($use.getAttribute('href'), href);
  });

  QUnit.test('createUse with provided x', (assert) => {
    const x = 10;

    const $use = mzSVG.createUse({
      x,
    });

    assert.strictEqual($use.getAttribute('x'), x.toString());
  });

  QUnit.test('createUse with provided y', (assert) => {
    const y = 10;

    const $use = mzSVG.createUse({
      y,
    });

    assert.strictEqual($use.getAttribute('y'), y.toString());
  });

  QUnit.test('createUse with provided width', (assert) => {
    const width = 100;

    const $use = mzSVG.createUse({
      width,
    });

    assert.strictEqual($use.getAttribute('width'), width.toString());
  });

  QUnit.test('createUse with provided height', (assert) => {
    const height = 200;

    const $use = mzSVG.createUse({
      height,
    });

    assert.strictEqual($use.getAttribute('height'), height.toString());
  });
});
