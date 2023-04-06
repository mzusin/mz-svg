QUnit.module('Circle', (hooks) => {

  QUnit.test('createCircle without properties', (assert) => {
    const $circle1 = mzSVG.createCircle();
    const $circle2 = htmlSVGElementFromString(`<circle></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided cx', (assert) => {
    const cx = 10;

    const $circle1 = mzSVG.createCircle({
      cx,
    });
    const $circle2 = htmlSVGElementFromString(`<circle cx="${ cx }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided cy', (assert) => {
    const cy = 20;

    const $circle1 = mzSVG.createCircle({
      cy,
    });
    const $circle2 = htmlSVGElementFromString(`<circle cy="${ cy }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided r', (assert) => {
    const r = 10;

    const $circle1 = mzSVG.createCircle({
      r,
    });
    const $circle2 = htmlSVGElementFromString(`<circle r="${ r }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided fill', (assert) => {
    const fill = 'none';

    const $circle1 = mzSVG.createCircle({
      fill,
    });
    const $circle2 = htmlSVGElementFromString(`<circle fill="${ fill }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided stroke', (assert) => {
    const stroke = 'red';

    const $circle1 = mzSVG.createCircle({
      stroke,
    });
    const $circle2 = htmlSVGElementFromString(`<circle stroke="${ stroke }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $circle1 = mzSVG.createCircle({
      strokeWidth,
    });
    const $circle2 = htmlSVGElementFromString(`<circle stroke-width="${ strokeWidth }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $circle1 = mzSVG.createCircle({
      strokeLinecap,
    });
    const $circle2 = htmlSVGElementFromString(`<circle stroke-linecap="${ strokeLinecap }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $circle1 = mzSVG.createCircle({
      strokeLinejoin,
    });
    const $circle2 = htmlSVGElementFromString(`<circle stroke-linejoin="${ strokeLinejoin }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $circle1 = mzSVG.createCircle({
      vectorEffect,
    });
    const $circle2 = htmlSVGElementFromString(`<circle vector-effect="${ vectorEffect }"></circle>`);

    assert.strictEqual($circle1.isEqualNode($circle2), true);
  });

  QUnit.test('createCircle with provided id', (assert) => {
    const id = 'my-path';

    const $circle = mzSVG.createCircle({
      id,
    });

    assert.strictEqual($circle.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createCircle with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $circle = mzSVG.createCircle({
      classes,
    });

    assert.strictEqual($circle.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createCircle with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $circle = mzSVG.createCircle({
      style,
    });

    assert.strictEqual($circle.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createCircle with provided pathLength', (assert) => {
    const pathLength = '100';

    const $circle = mzSVG.createCircle({
      pathLength,
    });

    assert.strictEqual($circle.getAttribute('pathLength'), pathLength, 'creates a path with correct "pathLength" attribute');
  });

  QUnit.test('createCircle with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $circle = mzSVG.createCircle({
      strokeOpacity,
    });

    assert.strictEqual($circle.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createCircle with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $circle = mzSVG.createCircle({
      strokeDasharray,
    });

    assert.strictEqual($circle.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createCircle with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $circle = mzSVG.createCircle({
      strokeDashoffset,
    });

    assert.strictEqual($circle.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createCircle with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $circle = mzSVG.createCircle({
      strokeMiterlimit,
    });

    assert.strictEqual($circle.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createCircle with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $circle = mzSVG.createCircle({
      fillOpacity,
    });

    assert.strictEqual($circle.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createCircle with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $circle = mzSVG.createCircle({
      fillRule,
    });

    assert.strictEqual($circle.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createCircle with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $circle = mzSVG.createCircle({
      filter,
    });

    assert.strictEqual($circle.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createCircle with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $circle = mzSVG.createCircle({
      mask,
    });

    assert.strictEqual($circle.getAttribute('mask'), mask);
  });

  QUnit.test('createCircle with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $circle = mzSVG.createCircle({
      transform,
    });

    assert.strictEqual($circle.getAttribute('transform'), transform);
  });

  QUnit.test('createCircle with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $circle = mzSVG.createCircle({
      shapeRendering,
    });

    assert.strictEqual($circle.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createCircle with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $circle = mzSVG.createCircle({
      clipPath,
    });

    assert.strictEqual($circle.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createCircle with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $circle = mzSVG.createCircle({
      clipRule,
    });

    assert.strictEqual($circle.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createCircle with provided opacity', (assert) => {
    const opacity = 0.5;

    const $circle = mzSVG.createCircle({
      opacity,
    });

    assert.strictEqual($circle.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createCircle with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $circle = mzSVG.createCircle({
      visibility,
    });

    assert.strictEqual($circle.getAttribute('visibility'), visibility);
  });
});
