## Get SVG element as string

To get an SVG element as string, use the **getSVGAsString()** function as follows:

```js
import { getSVGAsString } from 'mz-svg';

const svgString = getSVGAsString($svg); // $svg is any SVG element
```

The same API for Node.js:


```js
import { getSVGAsString } from 'mz-svg/dist/mz-svg.node.cjs';

const svgString = getSVGAsString($svg);
```
