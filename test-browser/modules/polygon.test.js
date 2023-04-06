QUnit.module('Polygon', (hooks) => {

  QUnit.test('createPolygon without properties', (assert) => {
    const $polygon1 = mzSVG.createPolygon();
    const $polygon2 = htmlSVGElementFromString(`<polygon></polygon>`);
    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided points', (assert) => {
    const points = '0,100 50,25 50,75 100,0';

    const $polygon1 = mzSVG.createPolygon({
      points,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon points="${ points }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided fill', (assert) => {
    const fill = 'none';

    const $polygon1 = mzSVG.createPolygon({
      fill,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon fill="${ fill }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided stroke', (assert) => {
    const stroke = 'red';

    const $polygon1 = mzSVG.createPolygon({
      stroke,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon stroke="${ stroke }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $polygon1 = mzSVG.createPolygon({
      strokeWidth,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon stroke-width="${ strokeWidth }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $polygon1 = mzSVG.createPolygon({
      strokeLinecap,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon stroke-linecap="${ strokeLinecap }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $polygon1 = mzSVG.createPolygon({
      strokeLinejoin,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon stroke-linejoin="${ strokeLinejoin }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $polygon1 = mzSVG.createPolygon({
      vectorEffect,
    });
    const $polygon2 = htmlSVGElementFromString(`<polygon vector-effect="${ vectorEffect }"></polygon>`);

    assert.strictEqual($polygon1.isEqualNode($polygon2), true);
  });

  QUnit.test('createPolygon with provided id', (assert) => {
    const id = 'my-polygon';

    const $polygon = mzSVG.createPolygon({
      id,
    });

    assert.strictEqual($polygon.getAttribute('id'), id, 'creates a polygon with correct "id" attribute');
  });

  QUnit.test('createPolygon with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $polygon = mzSVG.createPolygon({
      classes,
    });

    assert.strictEqual($polygon.getAttribute('class'), classes, 'creates a polygon with correct "class" attribute');
  });

  QUnit.test('createPolygon with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $polygon = mzSVG.createPolygon({
      style,
    });

    assert.strictEqual($polygon.getAttribute('style'), style, 'creates a polygon with correct "style" attribute');
  });

  QUnit.test('createPolygon with provided pathLength', (assert) => {
    const pathLength = '100';

    const $polygon = mzSVG.createPolygon({
      pathLength,
    });

    assert.strictEqual($polygon.getAttribute('pathLength'), pathLength, 'creates a polygon with correct "pathLength" attribute');
  });

  QUnit.test('createPolygon with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $polygon = mzSVG.createPolygon({
      strokeOpacity,
    });

    assert.strictEqual($polygon.getAttribute('stroke-opacity'), strokeOpacity, 'creates a polygon with correct "stroke-opacity" attribute');
  });

  QUnit.test('createPolygon with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $polygon = mzSVG.createPolygon({
      strokeDasharray,
    });

    assert.strictEqual($polygon.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a polygon with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createPolygon with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $polygon = mzSVG.createPolygon({
      strokeDashoffset,
    });

    assert.strictEqual($polygon.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a polygon with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createPolygon with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $polygon = mzSVG.createPolygon({
      strokeMiterlimit,
    });

    assert.strictEqual($polygon.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a polygon with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createPolygon with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $polygon = mzSVG.createPolygon({
      fillOpacity,
    });

    assert.strictEqual($polygon.getAttribute('fill-opacity'), fillOpacity, 'creates a polygon with correct "fill-opacity" attribute');
  });

  QUnit.test('createPolygon with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $polygon = mzSVG.createPolygon({
      fillRule,
    });

    assert.strictEqual($polygon.getAttribute('fill-rule'), fillRule, 'creates a polygon with correct "fill-rule" attribute');
  });

  QUnit.test('createPolygon with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $polygon = mzSVG.createPolygon({
      filter,
    });

    assert.strictEqual($polygon.getAttribute('filter'), filter, 'creates a polygon with correct "filter" attribute');
  });

  QUnit.test('createPolygon with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $polygon = mzSVG.createPolygon({
      mask,
    });

    assert.strictEqual($polygon.getAttribute('mask'), mask);
  });

  QUnit.test('createPolygon with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $polygon = mzSVG.createPolygon({
      transform,
    });

    assert.strictEqual($polygon.getAttribute('transform'), transform);
  });

  QUnit.test('createPolygon with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $polygon = mzSVG.createPolygon({
      shapeRendering,
    });

    assert.strictEqual($polygon.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createPolygon with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $polygon = mzSVG.createPolygon({
      clipPath,
    });

    assert.strictEqual($polygon.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createPolygon with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $polygon = mzSVG.createPolygon({
      clipRule,
    });

    assert.strictEqual($polygon.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createPolygon with provided opacity', (assert) => {
    const opacity = 0.5;

    const $polygon = mzSVG.createPolygon({
      opacity,
    });

    assert.strictEqual($polygon.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createPolygon with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $polygon = mzSVG.createPolygon({
      visibility,
    });

    assert.strictEqual($polygon.getAttribute('visibility'), visibility);
  });
});
