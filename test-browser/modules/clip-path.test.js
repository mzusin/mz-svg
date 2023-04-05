QUnit.module('ClipPath', (hooks) => {

  QUnit.test('createClipPath with provided fill', (assert) => {
    const fill = 'none';

    const $clipPath1 = mzSVG.createClipPath({
      fill,
    });
    const $clipPath2 = htmlSVGElementFromString(`<clipPath fill="${ fill }"></clipPath>`);

    assert.strictEqual($clipPath1.isEqualNode($clipPath2), true);
  });

  QUnit.test('createClipPath with provided stroke', (assert) => {
    const stroke = 'red';

    const $clipPath1 = mzSVG.createClipPath({
      stroke,
    });
    const $clipPath2 = htmlSVGElementFromString(`<clipPath stroke="${ stroke }"></clipPath>`);

    assert.strictEqual($clipPath1.isEqualNode($clipPath2), true);
  });

  QUnit.test('createClipPath with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $clipPath1 = mzSVG.createClipPath({
      strokeWidth,
    });
    const $clipPath2 = htmlSVGElementFromString(`<clipPath stroke-width="${ strokeWidth }"></clipPath>`);

    assert.strictEqual($clipPath1.isEqualNode($clipPath2), true);
  });

  QUnit.test('createClipPath with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $clipPath1 = mzSVG.createClipPath({
      strokeLinecap,
    });
    const $clipPath2 = htmlSVGElementFromString(`<clipPath stroke-linecap="${ strokeLinecap }"></clipPath>`);

    assert.strictEqual($clipPath1.isEqualNode($clipPath2), true);
  });

  QUnit.test('createClipPath with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $clipPath1 = mzSVG.createClipPath({
      strokeLinejoin,
    });
    const $clipPath2 = htmlSVGElementFromString(`<clipPath stroke-linejoin="${ strokeLinejoin }"></clipPath>`);

    assert.strictEqual($clipPath1.isEqualNode($clipPath2), true);
  });

  QUnit.test('createClipPath with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $clipPath1 = mzSVG.createClipPath({
      vectorEffect,
    });
    const $clipPath2 = htmlSVGElementFromString(`<clipPath vector-effect="${ vectorEffect }"></clipPath>`);

    assert.strictEqual($clipPath1.isEqualNode($clipPath2), true);
  });

  QUnit.test('createClipPath with provided id', (assert) => {
    const id = 'my-path';

    const $clipPath = mzSVG.createClipPath({
      id,
    });

    assert.strictEqual($clipPath.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createClipPath with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $clipPath = mzSVG.createClipPath({
      classes,
    });

    assert.strictEqual($clipPath.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createClipPath with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $clipPath = mzSVG.createClipPath({
      style,
    });

    assert.strictEqual($clipPath.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createClipPath with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $clipPath = mzSVG.createClipPath({
      strokeOpacity,
    });

    assert.strictEqual($clipPath.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createClipPath with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $clipPath = mzSVG.createClipPath({
      strokeDasharray,
    });

    assert.strictEqual($clipPath.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createClipPath with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $clipPath = mzSVG.createClipPath({
      strokeDashoffset,
    });

    assert.strictEqual($clipPath.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createClipPath with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $clipPath = mzSVG.createClipPath({
      strokeMiterlimit,
    });

    assert.strictEqual($clipPath.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createClipPath with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $clipPath = mzSVG.createClipPath({
      fillOpacity,
    });

    assert.strictEqual($clipPath.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createClipPath with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $clipPath = mzSVG.createClipPath({
      fillRule,
    });

    assert.strictEqual($clipPath.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createClipPath with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $clipPath = mzSVG.createClipPath({
      filter,
    });

    assert.strictEqual($clipPath.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createClipPath with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $clipPath = mzSVG.createClipPath({
      mask,
    });

    assert.strictEqual($clipPath.getAttribute('mask'), mask);
  });

  QUnit.test('createClipPath with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $clipPath = mzSVG.createClipPath({
      transform,
    });

    assert.strictEqual($clipPath.getAttribute('transform'), transform);
  });

  QUnit.test('createClipPath with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $clipPath = mzSVG.createClipPath({
      shapeRendering,
    });

    assert.strictEqual($clipPath.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createClipPath with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $clipPath = mzSVG.createClipPath({
      clipPath,
    });

    assert.strictEqual($clipPath.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createClipPath with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $clipPath = mzSVG.createClipPath({
      clipRule,
    });

    assert.strictEqual($clipPath.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createClipPath with provided opacity', (assert) => {
    const opacity = 0.5;

    const $clipPath = mzSVG.createClipPath({
      opacity,
    });

    assert.strictEqual($clipPath.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createClipPath with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $clipPath = mzSVG.createClipPath({
      visibility,
    });

    assert.strictEqual($clipPath.getAttribute('visibility'), visibility);
  });
});
