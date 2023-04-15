## How to create &lt;animateMotion> element

The **createAnimateMotion()** function is used to create an SVG path element.

```js
import { createAnimateMotion } from 'mz-svg';

const $createAnimateMotion = createAnimateMotion({
    path: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z',
    dur: '10s',
    repeatCount: 'indefinite'
});
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createAnimateMotion } from 'mz-svg';

const $createAnimateMotion = createAnimateMotion({
    path: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z',
    dur: '10s',
    repeatCount: 'indefinite'
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createAnimateMotion } from 'mz-svg';

const $createAnimateMotion = createAnimateMotion({
    
    id: 'my-animate-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyPoints
    keyPoints: '0;0.5;1',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/path
    path: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rotate
    rotate: 0,

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
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName
    attributeName: 'opacity',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive
    additive: 'replace',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate
    accumulate: 'sum',
});
```

