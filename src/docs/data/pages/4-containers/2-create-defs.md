## How to create &lt;defs> element

The **createDefs()** function is used to create an SVG &lt;defs> element.

```js
import { createDefs } from 'mz-svg';

const $defs = createDefs();
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createDefs } from 'mz-svg/dist/mz-svg.node.cjs';

const $defs = createDefs({
    document: doc
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createDefs } from 'mz-svg';

const $defs = createDefs({
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/id
    id: 'my-defs-id',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class
    classes: 'css-class1 css-class2',
});
```

