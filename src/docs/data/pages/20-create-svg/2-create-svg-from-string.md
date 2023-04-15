## Create SVG element from string

To create an SVG element from string, use the **createSVGFromString()** function as follows:

```js
import { createSVGFromString } from 'mz-svg';

const svg = `
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cy="50" cx="50" r="45" />
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>`;

const $svg = createSVGFromString({
    svg
});
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createSVGFromString } from 'mz-svg';

const $svg = createSVGFromString({
    svg,
    document: doc
});
```
