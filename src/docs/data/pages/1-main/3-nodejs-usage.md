
## Node.js Usage

The library can also be used in Node.js together with [JSDom](https://github.com/jsdom/jsdom) library (or alike). In this case, you need to create a JSDom document first, and then pass it to the **mzSVG** APIs together with other params.

First, install the module using npm:

```cmd
npm install mz-svg
```

Or using Yarn:

```cmd
yarn add mz-svg
```

Then create a document using the [JSDom](https://github.com/jsdom/jsdom) library:

```js
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

// create document using JSDOM
const dom = new JSDOM(`<!DOCTYPE html><head><title>Doc</title></head><body></body>`);
const doc = dom.window.document;
```

Call any **mzSVG**  API or function, and provide the [JSDom](https://github.com/jsdom/jsdom) document as parameter.

```js
import { createSVG } from 'mz-svg'; 
// OR
// const { createSVG } = require('mz-svg');

const $svg = createSVG({
    width: 100,
    height: 200,
    document: doc
});
console.log($svg);
```
