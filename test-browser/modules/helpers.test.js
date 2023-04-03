QUnit.module('Helpers: appendOnce', (hooks) => {

  QUnit.test('appendOnce ---> should add only one element', (assert) => {
    const $svg = mzSVG.createSVG({
      width: 100,
      height: 200,
    });

    const $defs = mzSVG.createDefs();

    mzSVG.appendOnce($svg, $defs);
    mzSVG.appendOnce($svg, $defs);
    mzSVG.appendOnce($svg, $defs);

    const count = $svg.querySelectorAll('defs').length;

    assert.strictEqual(count, 1);
  });

  QUnit.test('appendOnce ---> last element should be defs', (assert) => {
    const $svg = mzSVG.createSVG({
      width: 100,
      height: 200,
    });

    const $rect = mzSVG.createRect({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });

    $svg.append($rect);

    const $defs = mzSVG.createDefs();

    mzSVG.appendOnce($svg, $defs);

    assert.strictEqual($svg.children[$svg.children.length - 1].tagName.toLowerCase().trim(), 'defs');
  });
});

QUnit.module('Helpers: prependOnce', (hooks) => {

  QUnit.test('prependOnce ---> should add only one element', (assert) => {
    const $svg = mzSVG.createSVG({
      width: 100,
      height: 200,
    });

    const $defs = mzSVG.createDefs();

    mzSVG.prependOnce($svg, $defs);
    mzSVG.prependOnce($svg, $defs);
    mzSVG.prependOnce($svg, $defs);

    const count = $svg.querySelectorAll('defs').length;

    assert.strictEqual(count, 1);
  });

  QUnit.test('prependOnce ---> last element should be defs', (assert) => {
    const $svg = mzSVG.createSVG({
      width: 100,
      height: 200,
    });

    const $rect = mzSVG.createRect({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });

    $svg.append($rect);

    const $defs = mzSVG.createDefs();

    mzSVG.prependOnce($svg, $defs);

    assert.strictEqual($svg.children[0].tagName.toLowerCase().trim(), 'defs');
  });
});
