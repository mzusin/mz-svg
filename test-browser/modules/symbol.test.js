QUnit.module('Symbol: createSymbol', (hooks) => {

  QUnit.test('createSymbol without properties', (assert) => {
    const $symbol1 = mzSVG.createSymbol();
    const $symbol2 = htmlSVGElementFromString(`<symbol></symbol>`);
    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided viewBox', (assert) => {
    const viewBox = '0 0 100 200';

    const $symbol1 = mzSVG.createSymbol({
      viewBox,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol viewBox="${viewBox}"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided refX', (assert) => {
    const refX = 'left';

    const $symbol1 = mzSVG.createSymbol({
      refX,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol refX="${refX}"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided refY', (assert) => {
    const refY = 'bottom';

    const $symbol1 = mzSVG.createSymbol({
      refY,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol refY="${refY}"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided preserveAspectRatio', (assert) => {
    const preserveAspectRatio = 'xMidYMid meet';

    const $symbol1 = mzSVG.createSymbol({
      preserveAspectRatio,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol preserveAspectRatio="${preserveAspectRatio}"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided viewBox', (assert) => {
    const viewBox = '0 0 100 100';

    const $symbol1 = mzSVG.createSymbol({
      viewBox,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol viewBox="${viewBox}"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided x', (assert) => {
    const x = 10;

    const $symbol1 = mzSVG.createSymbol({
      x,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol x="${ x }"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided y', (assert) => {
    const y = 20;

    const $symbol1 = mzSVG.createSymbol({
      y,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol y="${ y }"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided width', (assert) => {
    const width = 10;

    const $symbol1 = mzSVG.createSymbol({
      width,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol width="${ width }"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided height', (assert) => {
    const height = 100;

    const $symbol1 = mzSVG.createSymbol({
      height,
    });
    const $symbol2 = htmlSVGElementFromString(`<symbol height="${ height }"></symbol>`);

    assert.strictEqual($symbol1.isEqualNode($symbol2), true);
  });

  QUnit.test('createSymbol with provided fill', (assert) => {
    const fill = 'none';

    const pattern1 = mzSVG.createSymbol({
      fill,
    });
    const pattern2 = htmlSVGElementFromString(`<symbol fill="${ fill }"></symbol>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createSymbol with provided stroke', (assert) => {
    const stroke = 'red';

    const pattern1 = mzSVG.createSymbol({
      stroke,
    });
    const pattern2 = htmlSVGElementFromString(`<symbol stroke="${ stroke }"></symbol>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createSymbol with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const pattern1 = mzSVG.createSymbol({
      strokeWidth,
    });
    const pattern2 = htmlSVGElementFromString(`<symbol stroke-width="${ strokeWidth }"></symbol>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createSymbol with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const pattern1 = mzSVG.createSymbol({
      strokeLinecap,
    });
    const pattern2 = htmlSVGElementFromString(`<symbol stroke-linecap="${ strokeLinecap }"></symbol>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createSymbol with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const pattern1 = mzSVG.createSymbol({
      strokeLinejoin,
    });
    const pattern2 = htmlSVGElementFromString(`<symbol stroke-linejoin="${ strokeLinejoin }"></symbol>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createSymbol with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const pattern1 = mzSVG.createSymbol({
      vectorEffect,
    });
    const pattern2 = htmlSVGElementFromString(`<symbol vector-effect="${ vectorEffect }"></symbol>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createSymbol with provided id', (assert) => {
    const id = 'my-path';

    const pattern = mzSVG.createSymbol({
      id,
    });

    assert.strictEqual(pattern.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createSymbol with provided classes', (assert) => {
    const classes = 'class1 class2';

    const pattern = mzSVG.createSymbol({
      classes,
    });

    assert.strictEqual(pattern.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createSymbol with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const pattern = mzSVG.createSymbol({
      style,
    });

    assert.strictEqual(pattern.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createSymbol with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const pattern = mzSVG.createSymbol({
      strokeOpacity,
    });

    assert.strictEqual(pattern.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createSymbol with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const pattern = mzSVG.createSymbol({
      strokeDasharray,
    });

    assert.strictEqual(pattern.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createSymbol with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const pattern = mzSVG.createSymbol({
      strokeDashoffset,
    });

    assert.strictEqual(pattern.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createSymbol with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const pattern = mzSVG.createSymbol({
      strokeMiterlimit,
    });

    assert.strictEqual(pattern.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createSymbol with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const pattern = mzSVG.createSymbol({
      fillOpacity,
    });

    assert.strictEqual(pattern.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createSymbol with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const pattern = mzSVG.createSymbol({
      fillRule,
    });

    assert.strictEqual(pattern.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createSymbol with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const pattern = mzSVG.createSymbol({
      filter,
    });

    assert.strictEqual(pattern.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createSymbol with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const pattern = mzSVG.createSymbol({
      mask,
    });

    assert.strictEqual(pattern.getAttribute('mask'), mask);
  });

  QUnit.test('createSymbol with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const pattern = mzSVG.createSymbol({
      transform,
    });

    assert.strictEqual(pattern.getAttribute('transform'), transform);
  });

  QUnit.test('createSymbol with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const pattern = mzSVG.createSymbol({
      shapeRendering,
    });

    assert.strictEqual(pattern.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createSymbol with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const pattern = mzSVG.createSymbol({
      clipPath,
    });

    assert.strictEqual(pattern.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createSymbol with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const pattern = mzSVG.createSymbol({
      clipRule,
    });

    assert.strictEqual(pattern.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createSymbol with provided opacity', (assert) => {
    const opacity = 0.5;

    const pattern = mzSVG.createSymbol({
      opacity,
    });

    assert.strictEqual(pattern.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createSymbol with provided visibility', (assert) => {
    const visibility = 'hidden';

    const pattern = mzSVG.createSymbol({
      visibility,
    });

    assert.strictEqual(pattern.getAttribute('visibility'), visibility);
  });
});
