# mzSVG ⭐

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/mz-svg)

The TypeScript-based library for manipulating and animating SVG. 

## Table of contents
- [TypeScript Usage](#typescript-usage)
- [Browser Usage](#browser-usage)
- [Node.js Usage](#nodejs-usage)
- [Constants](#constants)
- [Unit Tests](#unit-tests)

## TypeScript Usage

To use the library with TypeScript, you need to install the module from npm:

```
npm install mz-svg
```

The import any function like **createSVG**:
```js
import { createSVG } from 'mz-svg';

const $svg = createSVG(100, 200); // creates SVG element 100x200
```

-----------------------------------------------

## Browser Usage

Any function can also be used in the browser using the **mz-svg.min.js** file. All functions are located in the **mzSVG** namespace:

```html
<script src="mz-svg.min.js"></script>
<script>
    const $svg = mzSVG.createSVG(100, 200);
    console.log($svg); // SVG element 100x200
</script>
```

The library is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/mz-svg):

```html
<script src="https://cdn.jsdelivr.net/npm/mzusin/dist/mz-svg.min.js"></script>
<script>
    const $svg = mzSVG.createSVG(100, 200);
    console.log($svg);
</script>
```
-----------------------------------------------

## Node.js Usage

The library can also be used in Node.js together with [JSDom](https://github.com/jsdom/jsdom) library (or alike). In this case, you need to create a JSDom document first, and then pass it to the mzSVG APIs together with other params.

```
npm install mz-svg
```

```js
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { createSVG } from 'mz-svg/dist/mz-svg.node.cjs'; // OR
// const { createSVG } = require('mz-svg/dist/mz-svg.node.cjs');

// create document using JSDOM
const dom = new JSDOM(`<!DOCTYPE html><head><title>Doc</title></head><body></body>`);
const doc = dom.window.document;

const $svg = createSVG(300, 400, doc);
console.log($svg);
```

-----------------------------------------------

## Constants

The library has the following constants that can be used externally:

- SVG_NAMESPACE
- XMLNS_NAMESPACE

```js
import { SVG_NAMESPACE, XMLNS_NAMESPACE } from 'mz-svg';

console.log(SVG_NAMESPACE); // 'http://www.w3.org/2000/svg';
console.log(XMLNS_NAMESPACE); // 'http://www.w3.org/2000/xmlns/';
```

-----------------------------------------------

## Unit Tests

The library has two sets of unit tests, one for the browser environment and another for the Node.js environment. The reason for this is that some SVG features cannot be easily tested in a Node.js (jsdom) environment.

Browser unit tests are done using [Karma](https://github.com/karma-runner/karma) and [QUnit](https://qunitjs.com/). They can be launched with the following command:
```
npm run test:browser
```

Node.js unit tests are done using [Jest](https://github.com/facebook/jest), and can be launched with the following command:
```
npm test
```

-----------------------------------------------