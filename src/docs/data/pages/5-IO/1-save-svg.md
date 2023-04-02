## Save SVG file to file system (Node.js only)

It is possible to save an SVG file to the file system in a Node.js environment. You can specify either an SVG string directly, or an SVG document.


**An example with SVG string:**

```js
import { saveSVG } from 'mz-svg/dist/mz-svg.node.cjs';
import path from 'path';
import { fileURLToPath } from 'url';

// get the absolute path to the output SVG file in Node.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgString = '...'; // SVG as string here

saveSVG({
    absOutFilePath: path.join(__dirname, './test.svg'),
    svgString,
});
```

**An example with SVG document:**

```js
import { saveSVG } from 'mz-svg/dist/mz-svg.node.cjs';
import path from 'path';
import { fileURLToPath } from 'url';

// get the absolute path to the output SVG file in Node.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const $svg = ...; // get an SVG document from somewhere...

saveSVG({
    absOutFilePath: path.join(__dirname, './test.svg'),
    $svg,
});
```
