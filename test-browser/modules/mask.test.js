QUnit.module('Mask: createMask', (hooks) => {

  QUnit.test('createMask with provided x', (assert) => {
    const x = 10;

    const $mask1 = mzSVG.createMask({
      x,
    });
    const $mask2 = htmlSVGElementFromString(`<mask x="${x}"></mask>`);

    assert.strictEqual($mask1.isEqualNode($mask2), true);
  });

  QUnit.test('createMask with provided y', (assert) => {
    const y = 10;

    const $mask1 = mzSVG.createMask({
      y,
    });
    const $mask2 = htmlSVGElementFromString(`<mask y="${y}"></mask>`);

    assert.strictEqual($mask1.isEqualNode($mask2), true);
  });

  QUnit.test('createMask with provided width', (assert) => {
    const width = 100;

    const $mask1 = mzSVG.createMask({
      width,
    });
    const $mask2 = htmlSVGElementFromString(`<mask width="${width}"></mask>`);

    assert.strictEqual($mask1.isEqualNode($mask2), true);
  });

  QUnit.test('createMask with provided height', (assert) => {
    const height = 300;

    const $mask1 = mzSVG.createMask({
      height,
    });
    const $mask2 = htmlSVGElementFromString(`<mask height="${height}"></mask>`);

    assert.strictEqual($mask1.isEqualNode($mask2), true);
  });

  QUnit.test('createMask with provided maskContentUnits', (assert) => {
    const maskContentUnits = 'userSpaceOnUse';

    const $mask1 = mzSVG.createMask({
      maskContentUnits,
    });
    const $mask2 = htmlSVGElementFromString(`<mask maskContentUnits="${maskContentUnits}"></mask>`);

    assert.strictEqual($mask1.isEqualNode($mask2), true);
  });

  QUnit.test('createMask with provided maskUnits', (assert) => {
    const maskUnits = 'userSpaceOnUse';

    const $mask1 = mzSVG.createMask({
      maskUnits,
    });
    const $mask2 = htmlSVGElementFromString(`<mask maskUnits="${maskUnits}"></mask>`);

    assert.strictEqual($mask1.isEqualNode($mask2), true);
  });

  QUnit.test('createMask with provided fill', (assert) => {
    const fill = 'none';

    const pattern1 = mzSVG.createMask({
      fill,
    });
    const pattern2 = htmlSVGElementFromString(`<mask fill="${ fill }"></mask>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createMask with provided stroke', (assert) => {
    const stroke = 'red';

    const pattern1 = mzSVG.createMask({
      stroke,
    });
    const pattern2 = htmlSVGElementFromString(`<mask stroke="${ stroke }"></mask>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createMask with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const pattern1 = mzSVG.createMask({
      strokeWidth,
    });
    const pattern2 = htmlSVGElementFromString(`<mask stroke-width="${ strokeWidth }"></mask>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createMask with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const pattern1 = mzSVG.createMask({
      strokeLinecap,
    });
    const pattern2 = htmlSVGElementFromString(`<mask stroke-linecap="${ strokeLinecap }"></mask>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createMask with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const pattern1 = mzSVG.createMask({
      strokeLinejoin,
    });
    const pattern2 = htmlSVGElementFromString(`<mask stroke-linejoin="${ strokeLinejoin }"></mask>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createMask with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const pattern1 = mzSVG.createMask({
      vectorEffect,
    });
    const pattern2 = htmlSVGElementFromString(`<mask vector-effect="${ vectorEffect }"></mask>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createMask with provided id', (assert) => {
    const id = 'my-path';

    const pattern = mzSVG.createMask({
      id,
    });

    assert.strictEqual(pattern.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createMask with provided classes', (assert) => {
    const classes = 'class1 class2';

    const pattern = mzSVG.createMask({
      classes,
    });

    assert.strictEqual(pattern.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createMask with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const pattern = mzSVG.createMask({
      style,
    });

    assert.strictEqual(pattern.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createMask with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const pattern = mzSVG.createMask({
      strokeOpacity,
    });

    assert.strictEqual(pattern.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createMask with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const pattern = mzSVG.createMask({
      strokeDasharray,
    });

    assert.strictEqual(pattern.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createMask with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const pattern = mzSVG.createMask({
      strokeDashoffset,
    });

    assert.strictEqual(pattern.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createMask with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const pattern = mzSVG.createMask({
      strokeMiterlimit,
    });

    assert.strictEqual(pattern.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createMask with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const pattern = mzSVG.createMask({
      fillOpacity,
    });

    assert.strictEqual(pattern.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createMask with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const pattern = mzSVG.createMask({
      fillRule,
    });

    assert.strictEqual(pattern.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createMask with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const pattern = mzSVG.createMask({
      filter,
    });

    assert.strictEqual(pattern.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createMask with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const pattern = mzSVG.createMask({
      mask,
    });

    assert.strictEqual(pattern.getAttribute('mask'), mask);
  });

  QUnit.test('createMask with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const pattern = mzSVG.createMask({
      transform,
    });

    assert.strictEqual(pattern.getAttribute('transform'), transform);
  });

  QUnit.test('createMask with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const pattern = mzSVG.createMask({
      shapeRendering,
    });

    assert.strictEqual(pattern.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createMask with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const pattern = mzSVG.createMask({
      clipPath,
    });

    assert.strictEqual(pattern.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createMask with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const pattern = mzSVG.createMask({
      clipRule,
    });

    assert.strictEqual(pattern.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createMask with provided opacity', (assert) => {
    const opacity = 0.5;

    const pattern = mzSVG.createMask({
      opacity,
    });

    assert.strictEqual(pattern.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createMask with provided visibility', (assert) => {
    const visibility = 'hidden';

    const pattern = mzSVG.createMask({
      visibility,
    });

    assert.strictEqual(pattern.getAttribute('visibility'), visibility);
  });
});
