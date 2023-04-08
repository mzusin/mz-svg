QUnit.module('Group', (hooks) => {

  QUnit.test('create an empty group', (assert) => {
    const $group1 = mzSVG.createGroup();
    const $group2 = htmlSVGElementFromString(`<g></g>`);
    assert.strictEqual($group1.isEqualNode($group2), true);
  });

  QUnit.test('createGroup with provided fill', (assert) => {
    const fill = 'none';

    const $group1 = mzSVG.createGroup({
      fill,
    });
    const $group2 = htmlSVGElementFromString(`<g fill="${ fill }"></g>`);

    assert.strictEqual($group1.isEqualNode($group2), true);
  });

  QUnit.test('createGroup with provided stroke', (assert) => {
    const stroke = 'red';

    const $group1 = mzSVG.createGroup({
      stroke,
    });
    const $group2 = htmlSVGElementFromString(`<g stroke="${ stroke }"></g>`);

    assert.strictEqual($group1.isEqualNode($group2), true);
  });

  QUnit.test('createGroup with provided strokeWidth', (assert) => {
    const strokeWidth = 10;

    const $group1 = mzSVG.createGroup({
      strokeWidth,
    });
    const $group2 = htmlSVGElementFromString(`<g stroke-width="${ strokeWidth }"></g>`);

    assert.strictEqual($group1.isEqualNode($group2), true);
  });

  QUnit.test('createGroup with provided strokeLinecap', (assert) => {
    const strokeLinecap = 'round';

    const $group1 = mzSVG.createGroup({
      strokeLinecap,
    });
    const $group2 = htmlSVGElementFromString(`<g stroke-linecap="${ strokeLinecap }"></g>`);

    assert.strictEqual($group1.isEqualNode($group2), true);
  });

  QUnit.test('createGroup with provided strokeLinejoin', (assert) => {
    const strokeLinejoin = 'round';

    const $group1 = mzSVG.createGroup({
      strokeLinejoin,
    });
    const $group2 = htmlSVGElementFromString(`<g stroke-linejoin="${ strokeLinejoin }"></g>`);

    assert.strictEqual($group1.isEqualNode($group2), true);
  });

  QUnit.test('createGroup with provided id', (assert) => {
    const id = 'my-group';

    const $group = mzSVG.createGroup({
      id,
    });

    assert.strictEqual($group.getAttribute('id'), id, 'creates a group with correct "id" attribute');
  });

  QUnit.test('createGroup with provided classes', (assert) => {
    const classes = 'class1 class2';

    const $group = mzSVG.createGroup({
      classes,
    });

    assert.strictEqual($group.getAttribute('class'), classes, 'creates a group with correct "class" attribute');
  });

  QUnit.test('createGroup with provided style', (assert) => {
    const style = 'fill: red; stroke: blue;';

    const $group = mzSVG.createGroup({
      style,
    });

    assert.strictEqual($group.getAttribute('style'), style, 'creates a group with correct "style" attribute');
  });

  QUnit.test('createGroup with provided strokeOpacity', (assert) => {
    const strokeOpacity = '0.5';

    const $group = mzSVG.createGroup({
      strokeOpacity,
    });

    assert.strictEqual($group.getAttribute('stroke-opacity'), strokeOpacity, 'creates a group with correct "stroke-opacity" attribute');
  });

  QUnit.test('createGroup with provided strokeDasharray', (assert) => {
    const strokeDasharray = '10, 5';

    const $group = mzSVG.createGroup({
      strokeDasharray,
    });

    assert.strictEqual($group.getAttribute('stroke-dasharray'), strokeDasharray, 'creates a group with correct "stroke-dasharray" attribute');
  });

  QUnit.test('createGroup with provided strokeDashoffset', (assert) => {
    const strokeDashoffset = '5';

    const $group = mzSVG.createGroup({
      strokeDashoffset,
    });

    assert.strictEqual($group.getAttribute('stroke-dashoffset'), strokeDashoffset, 'creates a group with correct "stroke-dashoffset" attribute');
  });

  QUnit.test('createGroup with provided strokeMiterlimit', (assert) => {
    const strokeMiterlimit = '10';

    const $group = mzSVG.createGroup({
      strokeMiterlimit,
    });

    assert.strictEqual($group.getAttribute('stroke-miterlimit'), strokeMiterlimit, 'creates a group with correct "stroke-miterlimit" attribute');
  });

  QUnit.test('createGroup with provided fillOpacity', (assert) => {
    const fillOpacity = '0.5';

    const $group = mzSVG.createGroup({
      fillOpacity,
    });

    assert.strictEqual($group.getAttribute('fill-opacity'), fillOpacity, 'creates a group with correct "fill-opacity" attribute');
  });

  QUnit.test('createGroup with provided fillRule', (assert) => {
    const fillRule = 'evenodd';

    const $group = mzSVG.createGroup({
      fillRule,
    });

    assert.strictEqual($group.getAttribute('fill-rule'), fillRule, 'creates a group with correct "fill-rule" attribute');
  });

  QUnit.test('createGroup with provided filter', (assert) => {
    const filter = 'url(#blur)';

    const $group = mzSVG.createGroup({
      filter,
    });

    assert.strictEqual($group.getAttribute('filter'), filter, 'creates a group with correct "filter" attribute');
  });

  QUnit.test('createGroup with provided mask', (assert)=> {
    const mask = 'url(#myMask)';

    const $group = mzSVG.createGroup({
      mask,
    });

    assert.strictEqual($group.getAttribute('mask'), mask);
  });

  QUnit.test('createGroup with provided transform', (assert) => {
    const transform = 'translate(10,20) rotate(30)';

    const $group = mzSVG.createGroup({
      transform,
    });

    assert.strictEqual($group.getAttribute('transform'), transform);
  });

  QUnit.test('createGroup with provided shapeRendering', (assert) => {
    const shapeRendering = 'geometricPrecision';

    const $group = mzSVG.createGroup({
      shapeRendering,
    });

    assert.strictEqual($group.getAttribute('shape-rendering'), shapeRendering);
  });

  QUnit.test('createGroup with provided clipPath', (assert) => {
    const clipPath = 'url(#myClipPath)';

    const $group = mzSVG.createGroup({
      clipPath,
    });

    assert.strictEqual($group.getAttribute('clip-path'), clipPath);
  });

  QUnit.test('createGroup with provided clipRule', (assert) => {
    const clipRule = 'evenodd';

    const $group = mzSVG.createGroup({
      clipRule,
    });

    assert.strictEqual($group.getAttribute('clip-rule'), clipRule);
  });

  QUnit.test('createGroup with provided opacity', (assert) => {
    const opacity = 0.5;

    const $group = mzSVG.createGroup({
      opacity,
    });

    assert.strictEqual($group.getAttribute('opacity'), String(opacity));
  });

  QUnit.test('createGroup with provided visibility', (assert) => {
    const visibility = 'hidden';

    const $group = mzSVG.createGroup({
      visibility,
    });

    assert.strictEqual($group.getAttribute('visibility'), visibility);
  });
});
