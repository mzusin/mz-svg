## How to create SVG Rectangle

The **createRect()** function is used to create an SVG rectangle element.

```js
import { createRect } from 'mz-svg';

const $rect = createRect({
    x: 0,
    y: 0,
    width: 100,
    height: 200,
});
```

To create a rounded rectangle, use the **rx** and **ry** properties:

```js
import { createRect } from 'mz-svg';

const $rect = createRect({
    x: 0,
    y: 0,
    width: 100,
    height: 200,
    rx: 10,
    ry: 10,
});
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createRect } from 'mz-svg';

const $rect = createRect({
    document: doc,
    x: 0,
    y: 0,
    width: 100,
    height: 200,
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createRect } from 'mz-svg';

const $rect = createRect({
    
    id: 'my-rect-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x
    x: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y
    y: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx
    rx: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry
    ry: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
    width: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
    height: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
    pathLength: '10',

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

