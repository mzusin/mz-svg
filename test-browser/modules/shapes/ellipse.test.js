QUnit.module('Ellipse', (hooks) => {

  QUnit.test('createEllipse without properties', (assert) => {
    const $ellipse1 = mzSVG.createEllipse();
    const $ellipse2 = htmlSVGElementFromString(`<ellipse></ellipse>`);
    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided cx', (assert) => {
    const cx = 10;

    const $ellipse1 = mzSVG.createEllipse({
      cx,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse cx="${ cx }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided cy', (assert) => {
    const cy = 20;

    const $ellipse1 = mzSVG.createEllipse({
      cy,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse cy="${ cy }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided rx', (assert) => {
    const rx = 10;

    const $ellipse1 = mzSVG.createEllipse({
      rx,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse rx="${ rx }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided ry', (assert) => {
    const ry = 10;

    const $ellipse1 = mzSVG.createEllipse({
      ry,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse ry="${ ry }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided fill', (assert) => {
    const fill = 'none';

    const $ellipse1 = mzSVG.createEllipse({
      fill,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse fill="${ fill }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided stroke', (assert) => {
    const stroke = 'red';

    const $ellipse1 = mzSVG.createEllipse({
      stroke,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse stroke="${ stroke }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $ellipse1 = mzSVG.createEllipse({
      strokeWidth,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse stroke-width="${ strokeWidth }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $ellipse1 = mzSVG.createEllipse({
      strokeLinecap,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse stroke-linecap="${ strokeLinecap }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $ellipse1 = mzSVG.createEllipse({
      strokeLinejoin,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse stroke-linejoin="${ strokeLinejoin }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided vectorEffect', (assert) => {
    const vectorEffect = 'non-scaling-stroke';

    const $ellipse1 = mzSVG.createEllipse({
      vectorEffect,
    });
    const $ellipse2 = htmlSVGElementFromString(`<ellipse vector-effect="${ vectorEffect }"></ellipse>`);

    assert.strictEqual($ellipse1.isEqualNode($ellipse2), true);
  });

  QUnit.test('createEllipse with provided id', (assert) => {
    const id = 'my-path';

    const $ellipse = mzSVG.createEllipse({
      id,
    });

    assert.strictEqual($ellipse.getAttribute('id'), id, 'creates a path with correct "id" attribute');
  });

  QUnit.test('createEllipse with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $ellipse = mzSVG.createEllipse({
      classes,
    });

    assert.strictEqual($ellipse.getAttribute('class'), classes, 'creates a path with correct "class" attribute');
  });

  QUnit.test('createEllipse with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $ellipse = mzSVG.createEllipse({
      style,
    });

    assert.strictEqual($ellipse.getAttribute('style'), style, 'creates a path with correct "style" attribute');
  });

  QUnit.test('createEllipse with provided pathLength', (assert) => {
    const pathLength = '100';

    const $ellipse = mzSVG.createEllipse({
      pathLength,
    });

    assert.strictEqual($ellipse.getAttribute('pathLength'), pathLength, 'creates a path with correct "pathLength" attribute');
  });

  QUnit.test('createEllipse with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $ellipse = mzSVG.createEllipse({
      strokeOpacity,
    });

    assert.strictEqual($ellipse.getAttribute('stroke-opacity'), strokeOpacity, 'creates a path with correct "stroke-opacity" attribute');
  });

  QUnit.test('createEllipse with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $ellipse = mzSVG.createEllipse({
      strokeDasharray,
    });

    assert.strictEqual($ellipse.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a path with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createEllipse with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $ellipse = mzSVG.createEllipse({
      strokeDashoffset,
    });

    assert.strictEqual($ellipse.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a path with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createEllipse with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $ellipse = mzSVG.createEllipse({
      strokeMiterlimit,
    });

    assert.strictEqual($ellipse.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a path with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createEllipse with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $ellipse = mzSVG.createEllipse({
      fillOpacity,
    });

    assert.strictEqual($ellipse.getAttribute('fill-opacity'), fillOpacity, 'creates a path with correct "fill-opacity" attribute');
  });

  QUnit.test('createEllipse with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $ellipse = mzSVG.createEllipse({
      fillRule,
    });

    assert.strictEqual($ellipse.getAttribute('fill-rule'), fillRule, 'creates a path with correct "fill-rule" attribute');
  });

  QUnit.test('createEllipse with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $ellipse = mzSVG.createEllipse({
      filter,
    });

    assert.strictEqual($ellipse.getAttribute('filter'), filter, 'creates a path with correct "filter" attribute');
  });

  QUnit.test('createEllipse with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $ellipse = mzSVG.createEllipse({
      mask,
    });

    assert.strictEqual($ellipse.getAttribute('mask'), mask);
  });

  QUnit.test('createEllipse with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $ellipse = mzSVG.createEllipse({
      transform,
    });

    assert.strictEqual($ellipse.getAttribute('transform'), transform);
  });

  QUnit.test('createEllipse with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $ellipse = mzSVG.createEllipse({
      shapeRendering,
    });

    assert.strictEqual($ellipse.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createEllipse with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $ellipse = mzSVG.createEllipse({
      clipPath,
    });

    assert.strictEqual($ellipse.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createEllipse with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $ellipse = mzSVG.createEllipse({
      clipRule,
    });

    assert.strictEqual($ellipse.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createEllipse with provided opacity', (assert) => {
    const opacity = 0.5;

    const $ellipse = mzSVG.createEllipse({
      opacity,
    });

    assert.strictEqual($ellipse.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createEllipse with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $ellipse = mzSVG.createEllipse({
      visibility,
    });

    assert.strictEqual($ellipse.getAttribute('visibility'), visibility);
  });
});
