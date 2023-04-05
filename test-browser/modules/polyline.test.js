QUnit.module('Polyline', (hooks) => {

  QUnit.test('createPolyline with provided points', (assert) => {
    const points = '0,100 50,25 50,75 100,0';

    const $polyline1 = mzSVG.createPolyline({
      points,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline points="${ points }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided fill', (assert) => {
    const fill = 'none';

    const $polyline1 = mzSVG.createPolyline({
      fill,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline fill="${ fill }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided stroke', (assert) => {
    const stroke = 'red';

    const $polyline1 = mzSVG.createPolyline({
      stroke,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline stroke="${ stroke }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $polyline1 = mzSVG.createPolyline({
      strokeWidth,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline stroke-width="${ strokeWidth }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $polyline1 = mzSVG.createPolyline({
      strokeLinecap,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline stroke-linecap="${ strokeLinecap }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $polyline1 = mzSVG.createPolyline({
      strokeLinejoin,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline stroke-linejoin="${ strokeLinejoin }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $polyline1 = mzSVG.createPolyline({
      vectorEffect,
    });
    const $polyline2 = htmlSVGElementFromString(`<polyline vector-effect="${ vectorEffect }"></polyline>`);

    assert.strictEqual($polyline1.isEqualNode($polyline2), true);
  });

  QUnit.test('createPolyline with provided id', (assert) => {
    const id = 'my-polyline';

    const $polyline = mzSVG.createPolyline({
      id,
    });

    assert.strictEqual($polyline.getAttribute('id'), id, 'creates a polyline with correct "id" attribute');
  });

  QUnit.test('createPolyline with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $polyline = mzSVG.createPolyline({
      classes,
    });

    assert.strictEqual($polyline.getAttribute('class'), classes, 'creates a polyline with correct "class" attribute');
  });

  QUnit.test('createPolyline with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $polyline = mzSVG.createPolyline({
      style,
    });

    assert.strictEqual($polyline.getAttribute('style'), style, 'creates a polyline with correct "style" attribute');
  });

  QUnit.test('createPolyline with provided pathLength', (assert) => {
    const pathLength = '100';

    const $polyline = mzSVG.createPolyline({
      pathLength,
    });

    assert.strictEqual($polyline.getAttribute('pathLength'), pathLength, 'creates a polyline with correct "pathLength" attribute');
  });

  QUnit.test('createPolyline with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $polyline = mzSVG.createPolyline({
      strokeOpacity,
    });

    assert.strictEqual($polyline.getAttribute('stroke-opacity'), strokeOpacity, 'creates a polyline with correct "stroke-opacity" attribute');
  });

  QUnit.test('createPolyline with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $polyline = mzSVG.createPolyline({
      strokeDasharray,
    });

    assert.strictEqual($polyline.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a polyline with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createPolyline with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $polyline = mzSVG.createPolyline({
      strokeDashoffset,
    });

    assert.strictEqual($polyline.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a polyline with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createPolyline with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $polyline = mzSVG.createPolyline({
      strokeMiterlimit,
    });

    assert.strictEqual($polyline.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a polyline with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createPolyline with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $polyline = mzSVG.createPolyline({
      fillOpacity,
    });

    assert.strictEqual($polyline.getAttribute('fill-opacity'), fillOpacity, 'creates a polyline with correct "fill-opacity" attribute');
  });

  QUnit.test('createPolyline with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $polyline = mzSVG.createPolyline({
      fillRule,
    });

    assert.strictEqual($polyline.getAttribute('fill-rule'), fillRule, 'creates a polyline with correct "fill-rule" attribute');
  });

  QUnit.test('createPolyline with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $polyline = mzSVG.createPolyline({
      filter,
    });

    assert.strictEqual($polyline.getAttribute('filter'), filter, 'creates a polyline with correct "filter" attribute');
  });

  QUnit.test('createPolyline with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $polyline = mzSVG.createPolyline({
      mask,
    });

    assert.strictEqual($polyline.getAttribute('mask'), mask);
  });

  QUnit.test('createPolyline with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $polyline = mzSVG.createPolyline({
      transform,
    });

    assert.strictEqual($polyline.getAttribute('transform'), transform);
  });

  QUnit.test('createPolyline with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $polyline = mzSVG.createPolyline({
      shapeRendering,
    });

    assert.strictEqual($polyline.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createPolyline with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $polyline = mzSVG.createPolyline({
      clipPath,
    });

    assert.strictEqual($polyline.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createPolyline with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $polyline = mzSVG.createPolyline({
      clipRule,
    });

    assert.strictEqual($polyline.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createPolyline with provided opacity', (assert) => {
    const opacity = 0.5;

    const $polyline = mzSVG.createPolyline({
      opacity,
    });

    assert.strictEqual($polyline.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createPolyline with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $polyline = mzSVG.createPolyline({
      visibility,
    });

    assert.strictEqual($polyline.getAttribute('visibility'), visibility);
  });
});
