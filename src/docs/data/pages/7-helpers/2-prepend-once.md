## prependOnce() helper

This helper function adds the child element to the **end** of the parent element only once. If the parent already has an element with the same **tag name**, that element will not be added.

```js
const $svg = createSVG({
    width: 100,
    height: 200,
});

const $defs = createDefs();

prependOnce($svg, $defs);
```