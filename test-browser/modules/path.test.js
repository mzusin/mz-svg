QUnit.module('Path', (hooks) => {

  QUnit.test('createPath with provided d', (assert) => {
    const d = 'M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90';

    const $path1 = mzSVG.createPath({
      d,
    });
    const $path2 = htmlSVGElementFromString(`<path d="${ d }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });

  QUnit.test('createPath with provided fill', (assert) => {
    const fill = 'none';

    const $path1 = mzSVG.createPath({
      fill,
    });
    const $path2 = htmlSVGElementFromString(`<path fill="${ fill }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });

  QUnit.test('createPath with provided stroke', (assert) => {
    const stroke = 'red';

    const $path1 = mzSVG.createPath({
      stroke,
    });
    const $path2 = htmlSVGElementFromString(`<path stroke="${ stroke }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });

  QUnit.test('createPath with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $path1 = mzSVG.createPath({
      strokeWidth,
    });
    const $path2 = htmlSVGElementFromString(`<path stroke-width="${ strokeWidth }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });

  QUnit.test('createPath with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $path1 = mzSVG.createPath({
      strokeLinecap,
    });
    const $path2 = htmlSVGElementFromString(`<path stroke-linecap="${ strokeLinecap }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });

  QUnit.test('createPath with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $path1 = mzSVG.createPath({
      strokeLinejoin,
    });
    const $path2 = htmlSVGElementFromString(`<path stroke-linejoin="${ strokeLinejoin }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });

  QUnit.test('createPath with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $path1 = mzSVG.createPath({
      vectorEffect,
    });
    const $path2 = htmlSVGElementFromString(`<path vector-effect="${ vectorEffect }"></path>`);

    assert.strictEqual($path1.isEqualNode($path2), true);
  });
});
