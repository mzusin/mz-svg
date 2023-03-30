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

QUnit.module('Core', (hooks) => {

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
