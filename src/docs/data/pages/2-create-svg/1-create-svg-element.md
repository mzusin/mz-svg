## How to create SVG Element

To create an SVG element, use the **createSVG()** function as follows:

```js
import { createSVG } from 'mz-svg';

const $svg = createSVG({
    width: 100,
    height: 200
}); // creates SVG element 100x200
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createSVG } from 'mz-svg/dist/mz-svg.node.cjs';

const $svg = createSVG({
    width: 100,
    height: 200,
    document: doc
});
console.log($svg);
```

In the browser, you can use the global **mzSVG** namespace:

```html
<script src="https://cdn.jsdelivr.net/npm/mzusin/dist/mz-svg.min.js"></script>
<script>
    const $svg = mzSVG.createSVG({
        width: 100,
        height: 200
    });
</script>
```