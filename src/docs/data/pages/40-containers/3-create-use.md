## How to create &lt;use> element

The **createUse()** function is used to create an SVG &lt;use> element.

```js
import { createUse } from 'mz-svg';

const $use = createUse();
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createUse } from 'mz-svg';

const $use = createUse({
    document: doc
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createUse } from 'mz-svg';

const $use = createUse({
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/id
    id: 'my-use-id',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class
    classes: 'css-class1 css-class2',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href
    href: '#my-circle',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x
    x: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y
    y: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
    width: 100,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
    height: 200,

});
```

