QUnit.module('Line', (hooks) => {

  QUnit.test('createLine with provided x1', (assert) => {
    const x1 = 10;

    const $line1 = mzSVG.createLine({
      x1,
    });
    const $line2 = htmlSVGElementFromString(`<line x1="${ x1 }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided x2', (assert) => {
    const x2 = 10;

    const $line1 = mzSVG.createLine({
      x2,
    });
    const $line2 = htmlSVGElementFromString(`<line x2="${ x2 }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided y1', (assert) => {
    const y1 = 20;

    const $line1 = mzSVG.createLine({
      y1,
    });
    const $line2 = htmlSVGElementFromString(`<line y1="${ y1 }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided y2', (assert) => {
    const y2 = 20;

    const $line1 = mzSVG.createLine({
      y2,
    });
    const $line2 = htmlSVGElementFromString(`<line y2="${ y2 }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided fill', (assert) => {
    const fill = 'none';

    const $line1 = mzSVG.createLine({
      fill,
    });
    const $line2 = htmlSVGElementFromString(`<line fill="${ fill }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided stroke', (assert) => {
    const stroke = 'red';

    const $line1 = mzSVG.createLine({
      stroke,
    });
    const $line2 = htmlSVGElementFromString(`<line stroke="${ stroke }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $line1 = mzSVG.createLine({
      strokeWidth,
    });
    const $line2 = htmlSVGElementFromString(`<line stroke-width="${ strokeWidth }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $line1 = mzSVG.createLine({
      strokeLinecap,
    });
    const $line2 = htmlSVGElementFromString(`<line stroke-linecap="${ strokeLinecap }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $line1 = mzSVG.createLine({
      strokeLinejoin,
    });
    const $line2 = htmlSVGElementFromString(`<line stroke-linejoin="${ strokeLinejoin }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $line1 = mzSVG.createLine({
      vectorEffect,
    });
    const $line2 = htmlSVGElementFromString(`<line vector-effect="${ vectorEffect }"></line>`);

    assert.strictEqual($line1.isEqualNode($line2), true);
  });

  QUnit.test('createLine with provided id', (assert) => {
    const id = 'my-path';

    const $line = mzSVG.createLine({
      id,
    });

    assert.strictEqual($line.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createLine with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $line = mzSVG.createLine({
      classes,
    });

    assert.strictEqual($line.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createLine with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $line = mzSVG.createLine({
      style,
    });

    assert.strictEqual($line.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createLine with provided pathLength', (assert) => {
    const pathLength = '100';

    const $line = mzSVG.createLine({
      pathLength,
    });

    assert.strictEqual($line.getAttribute('pathLength'), pathLength, 'creates a path with correct "pathLength" attribute');
  });

  QUnit.test('createLine with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $line = mzSVG.createLine({
      strokeOpacity,
    });

    assert.strictEqual($line.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createLine with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $line = mzSVG.createLine({
      strokeDasharray,
    });

    assert.strictEqual($line.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createLine with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $line = mzSVG.createLine({
      strokeDashoffset,
    });

    assert.strictEqual($line.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createLine with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $line = mzSVG.createLine({
      strokeMiterlimit,
    });

    assert.strictEqual($line.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createLine with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $line = mzSVG.createLine({
      fillOpacity,
    });

    assert.strictEqual($line.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createLine with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $line = mzSVG.createLine({
      fillRule,
    });

    assert.strictEqual($line.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createLine with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $line = mzSVG.createLine({
      filter,
    });

    assert.strictEqual($line.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createLine with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $line = mzSVG.createLine({
      mask,
    });

    assert.strictEqual($line.getAttribute('mask'), mask);
  });

  QUnit.test('createLine with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $line = mzSVG.createLine({
      transform,
    });

    assert.strictEqual($line.getAttribute('transform'), transform);
  });

  QUnit.test('createLine with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $line = mzSVG.createLine({
      shapeRendering,
    });

    assert.strictEqual($line.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createLine with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $line = mzSVG.createLine({
      clipPath,
    });

    assert.strictEqual($line.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createLine with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $line = mzSVG.createLine({
      clipRule,
    });

    assert.strictEqual($line.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createLine with provided opacity', (assert) => {
    const opacity = 0.5;

    const $line = mzSVG.createLine({
      opacity,
    });

    assert.strictEqual($line.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createLine with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $line = mzSVG.createLine({
      visibility,
    });

    assert.strictEqual($line.getAttribute('visibility'), visibility);
  });
});
