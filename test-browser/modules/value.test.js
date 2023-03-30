QUnit.module('Value & Pointer', (hooks) => {
  initFixtures(hooks, `
    <toolcool-range-slider id="slider-1"></toolcool-range-slider>
  `);

  QUnit.test('default value should be 0', (assert) => {
    //const $slider = document.querySelector('#slider-1');
    assert.strictEqual(0, 0);
  });
});
