## How to create SVG Path

The **createPath()** function is used to create an SVG path element. The function can accept the following parameters.

> All parameters are optional.

```js
import { createPath } from 'mz-svg';

const $path = createPath({
    
    id: 'my-path-id',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
    d: 'M150 0 L75 200 L225 200 Z',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
    stroke: '#00ffff',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
    strokeWidth: 1,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
    fill: '#ffffff',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
    strokeLinecap: 'round',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
    strokeLinejoin: 'round',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect
    vectorEffect: 'non-scaling-stroke',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
    pathLength: '10',
});
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createPath } from 'mz-svg';

const $path = createPath({
    d: 'M150 0 L75 200 L225 200 Z',
    document: doc,
});
```
