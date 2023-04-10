## Minify Path

SVG paths can contain a lot of redundant and useless information that can be safely removed or transformed without affecting the rendering of the SVG.

You can minimize the **"d"** property of a given path element using the **minifyPath()** function.

```js
import { minifyPath } from 'mz-svg';

const d = minifyPath('M 10 10 L 50 50 m 0 0 l -20 10 l 10 10'); 
// M10 10 50 50m0 0 -20 10 10 10
```

It's also possible to specify an optional **decimalPlaces** parameter. The default value for decimal places is 2.

```js
import { minifyPath } from 'mz-svg';

const d = minifyPath('M 0.100 0.252625 L 1.180000 12.999999', 1); 
// M.1 .3 1.2 13
```

> To allow any number of decimal places, pass Infinity as a parameter.

