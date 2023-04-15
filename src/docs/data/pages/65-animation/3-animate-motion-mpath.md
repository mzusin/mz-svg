## How to create &lt;mpath> element

The **createMPath()** function is used to create an SVG &lt;mpath> element.

```js
import { createMPath } from 'mz-svg';

const $mpath = createMPath({
    xlinkHref: '#path1',
});
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createMPath } from 'mz-svg';

const $mpath = createMPath({
    xlinkHref: '#path1',
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createMPath } from 'mz-svg';

const $mpath = createMPath({
    
    id: 'my-animate-id',
    classes: 'css-class1 css-class2',
  
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
    xlinkHref: '#path1',
});
```

