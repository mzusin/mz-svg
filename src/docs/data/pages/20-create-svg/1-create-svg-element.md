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
import { createSVG } from 'mz-svg';

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

To create an SVG with a viewBox property:

```js
import { createSVG } from 'mz-svg';

const $svg = createSVG({
    width: 100,
    height: 200,
    viewBox: '0 0 100 200'
}); 
```

It is also possible to automatically generate a viewBox property:

```js
import { createSVG } from 'mz-svg';

const $svg = createSVG({
    width: 100,
    height: 200,
    autoViewBox: true,
}); 
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createPath } from 'mz-svg';

const $path = createPath({
    
    id: 'my-path-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x
    x: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y
    y: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
    width: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
    height: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
    preserveAspectRatio: 'xMidYMid meet',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
    viewBox: '0, 0, 100, 100',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
    stroke: '#00ffff',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
    strokeWidth: 1,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity
    strokeOpacity: 0.3,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
    strokeLinecap: 'round',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
    strokeLinejoin: 'round',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
    strokeDasharray: '0 4 0',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset
    strokeDashoffset: '3',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
    strokeMiterlimit: '8',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
    fill: '#ffffff',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity
    fillOpacity: 0.7,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
    fillRule: 'evenodd',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter
    filter: 'url(#my-filter)',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask
    mask: 'url(#my-mask)',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
    transform: 'scale(1 0.5)',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect
    vectorEffect: 'non-scaling-stroke',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering
    shapeRendering: 'geometricPrecision',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath
    clipPath: 'url(#my-clip)',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
    clipRule: 'evenodd',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity
    opacity: 0.3,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility
    visibility: 'hidden',
});
```

