const htmlElementFromString = (html) => {
  const $div = document.createElement('div');
  $div.innerHTML = html;
  return $div.querySelector('svg');
};

const htmlSVGElementFromString = (html) => {
  const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  $svg.innerHTML = html;
  return $svg.children[0];
};

QUnit.module('Core: createSVG', (hooks) => {

  QUnit.test('createSVG 100x100', (assert) => {
    const $svg1 = mzSVG.createSVG({
      width: 100,
      height: 100,
    });
    const $svg2 = htmlElementFromString('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"></svg>');
    assert.strictEqual($svg1.isEqualNode($svg2), true);
  });

  QUnit.test('createSVG 100x200', (assert) => {
    const $svg1 = mzSVG.createSVG({
      width: 100,
      height: 200,
    });
    const $svg2 = htmlElementFromString('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="200" viewBox="0 0 100 200"></svg>');
    assert.strictEqual($svg1.isEqualNode($svg2), true);
  });

  QUnit.test('createSVG 200x100', (assert) => {
    const $svg1 = mzSVG.createSVG({
      width: 200,
      height: 100,
    });
    const $svg2 = htmlElementFromString('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100"></svg>');
    assert.strictEqual($svg1.isEqualNode($svg2), true);
  });

  QUnit.test('createSVG 0x0', (assert) => {
    const $svg1 = mzSVG.createSVG({
      width: 0,
      height: 0,
    });
    const $svg2 = htmlElementFromString('<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 0 0"></svg>');
    assert.strictEqual($svg1.isEqualNode($svg2), true);
  });

  QUnit.test('createSVG -10x-10 ---> 0x0', (assert) => {
    const $svg1 = mzSVG.createSVG({
      width: -10,
      height: -10,
    });
    const $svg2 = htmlElementFromString('<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 0 0"></svg>');
    assert.strictEqual($svg1.isEqualNode($svg2), true);
  });

  QUnit.test('createSVG aaa x aaa ---> 0x0', (assert) => {
    const $svg1 = mzSVG.createSVG({
      width: 'aaa',
      height: 'aaa',
    });
    const $svg2 = htmlElementFromString('<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 0 0"></svg>');
    assert.strictEqual($svg1.isEqualNode($svg2), true);
  });
});

QUnit.module('Core: createSVGFromString', (hooks) => {

  QUnit.test('createSVGFromString', (assert) => {
    const svg = `
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cy="50" cx="50" r="45" />
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>`;

    const $svg = mzSVG.createSVGFromString({
      svg,
    });

    assert.true(!!$svg);
  });

});

QUnit.module('Core: getSVGAsString', (hooks) => {

  QUnit.test('getSVGAsString', (assert) => {
    const svg = `
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
<radialGradient cy="25%" id="myGradient">
<stop offset="0" stop-color="white"></stop>
<stop offset="100%" stop-color="black"></stop>
</radialGradient>·
<circle cx="50" cy="50" r="45"></circle>
<ellipse cx="50" cy="150" rx="45" ry="25"></ellipse>
<rect fill="url(#myGradient)" height="90" width="90" x="5" y="205"></rect>
</svg>`;

    const $svg = mzSVG.createSVGFromString({
      svg,
    });
    const resultSVG = mzSVG.getSVGAsString($svg);

    assert.strictEqual(svg.trim(), resultSVG.trim());
  });

});
