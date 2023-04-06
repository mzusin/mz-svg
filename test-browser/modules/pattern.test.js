QUnit.module('Pattern: createPattern', (hooks) => {

  QUnit.test('createPattern without properties', (assert) => {
    const $pattern1 = mzSVG.createPattern();
    const $pattern2 = htmlSVGElementFromString(`<pattern></pattern>`);
    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided href', (assert) => {
    const href = 'example.svg#pattern';

    const $pattern1 = mzSVG.createPattern({
      href,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern href="${href}"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided patternContentUnits', (assert) => {
    const patternContentUnits = 'objectBoundingBox';

    const $pattern1 = mzSVG.createPattern({
      patternContentUnits,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern patternContentUnits="${patternContentUnits}"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided patternTransform', (assert) => {
    const patternTransform = 'rotate(45)';

    const $pattern1 = mzSVG.createPattern({
      patternTransform,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern patternTransform="${patternTransform}"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided patternUnits', (assert) => {
    const patternUnits = 'userSpaceOnUse';

    const $pattern1 = mzSVG.createPattern({
      patternUnits,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern patternUnits="${patternUnits}"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided preserveAspectRatio', (assert) => {
    const preserveAspectRatio = 'xMidYMid meet';

    const $pattern1 = mzSVG.createPattern({
      preserveAspectRatio,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern preserveAspectRatio="${preserveAspectRatio}"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided viewBox', (assert) => {
    const viewBox = '0 0 100 100';

    const $pattern1 = mzSVG.createPattern({
      viewBox,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern viewBox="${viewBox}"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided x', (assert) => {
    const x = 10;

    const $pattern1 = mzSVG.createPattern({
      x,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern x="${ x }"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided y', (assert) => {
    const y = 20;

    const $pattern1 = mzSVG.createPattern({
      y,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern y="${ y }"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided width', (assert) => {
    const width = 10;

    const $pattern1 = mzSVG.createPattern({
      width,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern width="${ width }"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided height', (assert) => {
    const height = 100;

    const $pattern1 = mzSVG.createPattern({
      height,
    });
    const $pattern2 = htmlSVGElementFromString(`<pattern height="${ height }"></pattern>`);

    assert.strictEqual($pattern1.isEqualNode($pattern2), true);
  });

  QUnit.test('createPattern with provided fill', (assert) => {
    const fill = 'none';

    const pattern1 = mzSVG.createPattern({
      fill,
    });
    const pattern2 = htmlSVGElementFromString(`<pattern fill="${ fill }"></pattern>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createPattern with provided stroke', (assert) => {
    const stroke = 'red';

    const pattern1 = mzSVG.createPattern({
      stroke,
    });
    const pattern2 = htmlSVGElementFromString(`<pattern stroke="${ stroke }"></pattern>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createPattern with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const pattern1 = mzSVG.createPattern({
      strokeWidth,
    });
    const pattern2 = htmlSVGElementFromString(`<pattern stroke-width="${ strokeWidth }"></pattern>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createPattern with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const pattern1 = mzSVG.createPattern({
      strokeLinecap,
    });
    const pattern2 = htmlSVGElementFromString(`<pattern stroke-linecap="${ strokeLinecap }"></pattern>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createPattern with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const pattern1 = mzSVG.createPattern({
      strokeLinejoin,
    });
    const pattern2 = htmlSVGElementFromString(`<pattern stroke-linejoin="${ strokeLinejoin }"></pattern>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createPattern with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const pattern1 = mzSVG.createPattern({
      vectorEffect,
    });
    const pattern2 = htmlSVGElementFromString(`<pattern vector-effect="${ vectorEffect }"></pattern>`);

    assert.strictEqual(pattern1.isEqualNode(pattern2), true);
  });

  QUnit.test('createPattern with provided id', (assert) => {
    const id = 'my-path';

    const pattern = mzSVG.createPattern({
      id,
    });

    assert.strictEqual(pattern.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createPattern with provided classes', (assert) => {
    const classes = 'class1 class2';

    const pattern = mzSVG.createPattern({
      classes,
    });

    assert.strictEqual(pattern.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createPattern with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const pattern = mzSVG.createPattern({
      style,
    });

    assert.strictEqual(pattern.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createPattern with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const pattern = mzSVG.createPattern({
      strokeOpacity,
    });

    assert.strictEqual(pattern.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createPattern with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const pattern = mzSVG.createPattern({
      strokeDasharray,
    });

    assert.strictEqual(pattern.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createPattern with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const pattern = mzSVG.createPattern({
      strokeDashoffset,
    });

    assert.strictEqual(pattern.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createPattern with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const pattern = mzSVG.createPattern({
      strokeMiterlimit,
    });

    assert.strictEqual(pattern.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createPattern with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const pattern = mzSVG.createPattern({
      fillOpacity,
    });

    assert.strictEqual(pattern.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createPattern with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const pattern = mzSVG.createPattern({
      fillRule,
    });

    assert.strictEqual(pattern.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createPattern with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const pattern = mzSVG.createPattern({
      filter,
    });

    assert.strictEqual(pattern.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createPattern with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const pattern = mzSVG.createPattern({
      mask,
    });

    assert.strictEqual(pattern.getAttribute('mask'), mask);
  });

  QUnit.test('createPattern with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const pattern = mzSVG.createPattern({
      transform,
    });

    assert.strictEqual(pattern.getAttribute('transform'), transform);
  });

  QUnit.test('createPattern with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const pattern = mzSVG.createPattern({
      shapeRendering,
    });

    assert.strictEqual(pattern.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createPattern with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const pattern = mzSVG.createPattern({
      clipPath,
    });

    assert.strictEqual(pattern.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createPattern with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const pattern = mzSVG.createPattern({
      clipRule,
    });

    assert.strictEqual(pattern.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createPattern with provided opacity', (assert) => {
    const opacity = 0.5;

    const pattern = mzSVG.createPattern({
      opacity,
    });

    assert.strictEqual(pattern.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createPattern with provided visibility', (assert) => {
    const visibility = 'hidden';

    const pattern = mzSVG.createPattern({
      visibility,
    });

    assert.strictEqual(pattern.getAttribute('visibility'), visibility);
  });
});
