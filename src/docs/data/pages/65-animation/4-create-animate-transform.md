## How to create &lt;animateTransform> element

The **createAnimateTransform()** function is used to create an SVG &lt;animateTransform> element.

```js
import { createAnimateTransform } from 'mz-svg';

const $animateTransform = createAnimateTransform({
    attributeName: 'transform',
    attributeType: 'XML',
    type: 'rotate',
    from: '0 60 70',
    to: '360 60 70',
    dur: '10s',
    repeatCount: 'indefinite'
});
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createAnimateTransform } from 'mz-svg';

const $animateTransform = createAnimateTransform({
    attributeName: 'transform',
    attributeType: 'XML',
    type: 'rotate',
    from: '0 60 70',
    to: '360 60 70',
    dur: '10s',
    repeatCount: 'indefinite'
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createAnimateTransform } from 'mz-svg';

const $animateTransform = createAnimateTransform({
    
    id: 'my-animate-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
    type: 'rotate',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName
    attributeName: 'transform',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeType
    attributeType: 'XML',

    // Animation timing attributes ------------------------------
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin
    begin: '0s',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur
    dur: '1s',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end
    end: '5s',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/min
    min: '0s',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/max
    max: '10s',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/restart
    restart: 'always',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatCount
    repeatCount: 2,
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatDur
    repeatDur: '3s',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
    fill: 'freeze',

    // Animation value attributes ------------------------------
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode
    calcMode: 'spline',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
    values: '0; 100; 50',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyTimes
    keyTimes: '0; 0.5; 1',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keySplines
    keySplines: '0.42 0 0.58 1; 0.42 0 0.58 1',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/From
    from: 0,
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/To
    to: 100,
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by
    by: 10,

    // Other Animation attributes ------------------------------
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive
    additive: 'replace',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate
    accumulate: 'sum',
});
```

