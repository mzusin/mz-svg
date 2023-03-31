QUnit.module('Rect', (hooks) => {

  QUnit.test('createRect with provided x', (assert) => {
    const x = 10;

    const $rect1 = mzSVG.createRect({
      x,
    });
    const $rect2 = htmlSVGElementFromString(`<rect x="${ x }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided y', (assert) => {
    const y = 20;

    const $rect1 = mzSVG.createRect({
      y,
    });
    const $rect2 = htmlSVGElementFromString(`<rect y="${ y }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided rx', (assert) => {
    const rx = 10;

    const $rect1 = mzSVG.createRect({
      rx,
    });
    const $rect2 = htmlSVGElementFromString(`<rect rx="${ rx }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided ry', (assert) => {
    const ry = 10;

    const $rect1 = mzSVG.createRect({
      ry,
    });
    const $rect2 = htmlSVGElementFromString(`<rect ry="${ ry }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided width', (assert) => {
    const width = 10;

    const $rect1 = mzSVG.createRect({
      width,
    });
    const $rect2 = htmlSVGElementFromString(`<rect width="${ width }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided height', (assert) => {
    const height = 100;

    const $rect1 = mzSVG.createRect({
      height,
    });
    const $rect2 = htmlSVGElementFromString(`<rect height="${ height }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided fill', (assert) => {
    const fill = 'none';

    const $rect1 = mzSVG.createRect({
      fill,
    });
    const $rect2 = htmlSVGElementFromString(`<rect fill="${ fill }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided stroke', (assert) => {
    const stroke = 'red';

    const $rect1 = mzSVG.createRect({
      stroke,
    });
    const $rect2 = htmlSVGElementFromString(`<rect stroke="${ stroke }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $rect1 = mzSVG.createRect({
      strokeWidth,
    });
    const $rect2 = htmlSVGElementFromString(`<rect stroke-width="${ strokeWidth }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $rect1 = mzSVG.createRect({
      strokeLinecap,
    });
    const $rect2 = htmlSVGElementFromString(`<rect stroke-linecap="${ strokeLinecap }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $rect1 = mzSVG.createRect({
      strokeLinejoin,
    });
    const $rect2 = htmlSVGElementFromString(`<rect stroke-linejoin="${ strokeLinejoin }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $rect1 = mzSVG.createRect({
      vectorEffect,
    });
    const $rect2 = htmlSVGElementFromString(`<rect vector-effect="${ vectorEffect }"></rect>`);

    assert.strictEqual($rect1.isEqualNode($rect2), true);
  });

  QUnit.test('createRect with provided id', (assert) => {
    const id = 'my-path';

    const $rect = mzSVG.createRect({
      id,
    });

    assert.strictEqual($rect.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createRect with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $rect = mzSVG.createRect({
      classes,
    });

    assert.strictEqual($rect.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createRect with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $rect = mzSVG.createRect({
      style,
    });

    assert.strictEqual($rect.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createRect with provided pathLength', (assert) => {
    const pathLength = '100';

    const $rect = mzSVG.createRect({
      pathLength,
    });

    assert.strictEqual($rect.getAttribute('pathLength'), pathLength, 'creates a path with correct "pathLength" attribute');
  });

  QUnit.test('createRect with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $rect = mzSVG.createRect({
      strokeOpacity,
    });

    assert.strictEqual($rect.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createRect with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $rect = mzSVG.createRect({
      strokeDasharray,
    });

    assert.strictEqual($rect.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createRect with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $rect = mzSVG.createRect({
      strokeDashoffset,
    });

    assert.strictEqual($rect.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createRect with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $rect = mzSVG.createRect({
      strokeMiterlimit,
    });

    assert.strictEqual($rect.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createRect with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $rect = mzSVG.createRect({
      fillOpacity,
    });

    assert.strictEqual($rect.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createRect with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $rect = mzSVG.createRect({
      fillRule,
    });

    assert.strictEqual($rect.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createRect with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $rect = mzSVG.createRect({
      filter,
    });

    assert.strictEqual($rect.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createRect with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $rect = mzSVG.createRect({
      mask,
    });

    assert.strictEqual($rect.getAttribute('mask'), mask);
  });

  QUnit.test('createRect with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $rect = mzSVG.createRect({
      transform,
    });

    assert.strictEqual($rect.getAttribute('transform'), transform);
  });

  QUnit.test('createRect with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $rect = mzSVG.createRect({
      shapeRendering,
    });

    assert.strictEqual($rect.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createRect with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $rect = mzSVG.createRect({
      clipPath,
    });

    assert.strictEqual($rect.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createRect with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $rect = mzSVG.createRect({
      clipRule,
    });

    assert.strictEqual($rect.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createRect with provided opacity', (assert) => {
    const opacity = 0.5;

    const $rect = mzSVG.createRect({
      opacity,
    });

    assert.strictEqual($rect.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createRect with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $rect = mzSVG.createRect({
      visibility,
    });

    assert.strictEqual($rect.getAttribute('visibility'), visibility);
  });
});
