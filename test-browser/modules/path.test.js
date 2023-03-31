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

  QUnit.test('createPath with provided id', (assert) => {
    const id = 'my-path';

    const $path = mzSVG.createPath({
      id,
    });

    assert.strictEqual($path.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createPath with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $path = mzSVG.createPath({
      classes,
    });

    assert.strictEqual($path.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createPath with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $path = mzSVG.createPath({
      style,
    });

    assert.strictEqual($path.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createPath with provided pathLength', (assert) => {
    const pathLength = '100';

    const $path = mzSVG.createPath({
      pathLength,
    });

    assert.strictEqual($path.getAttribute('pathLength'), pathLength, 'creates a path with correct "pathLength" attribute');
  });

  QUnit.test('createPath with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $path = mzSVG.createPath({
      strokeOpacity,
    });

    assert.strictEqual($path.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createPath with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $path = mzSVG.createPath({
      strokeDasharray,
    });

    assert.strictEqual($path.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createPath with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $path = mzSVG.createPath({
      strokeDashoffset,
    });

    assert.strictEqual($path.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createPath with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $path = mzSVG.createPath({
      strokeMiterlimit,
    });

    assert.strictEqual($path.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createPath with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $path = mzSVG.createPath({
      fillOpacity,
    });

    assert.strictEqual($path.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createPath with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $path = mzSVG.createPath({
      fillRule,
    });

    assert.strictEqual($path.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createPath with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $path = mzSVG.createPath({
      filter,
    });

    assert.strictEqual($path.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createPath with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $path = mzSVG.createPath({
      mask,
    });

    assert.strictEqual($path.getAttribute('mask'), mask);
  });

  QUnit.test('createPath with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $path = mzSVG.createPath({
      transform,
    });

    assert.strictEqual($path.getAttribute('transform'), transform);
  });

  QUnit.test('createPath with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $path = mzSVG.createPath({
      shapeRendering,
    });

    assert.strictEqual($path.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createPath with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $path = mzSVG.createPath({
      clipPath,
    });

    assert.strictEqual($path.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createPath with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $path = mzSVG.createPath({
      clipRule,
    });

    assert.strictEqual($path.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createPath with provided opacity', (assert) => {
    const opacity = 0.5;

    const $path = mzSVG.createPath({
      opacity,
    });

    assert.strictEqual($path.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createPath with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $path = mzSVG.createPath({
      visibility,
    });

    assert.strictEqual($path.getAttribute('visibility'), visibility);
  });
});
