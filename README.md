# mzSVG ⭐

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/mz-svg)

The TypeScript-based library for manipulating and animating SVG.

## Table of contents
- [TypeScript Usage](#typescript-usage)
- [Browser Usage](#browser-usage)
- [Node.js Usage](#nodejs-usage)

## TypeScript Usage

To use the library with TypeScript, you need to install the module from npm:

```
npm install mz-svg
```

The import any function like **v2Sum**:
```js
import { v2Sum, Vector2 } from 'mz-svg';

const v1: Vector2 = [1, 2];
const v2: Vector2 = [3, 4];
const sum = v2Sum(v1, v2); // [4, 6]
```

-----------------------------------------------

## Browser Usage

Any function can also be used in the browser using the **mz-svg.min.js** file. All functions are located in the **mzSVG** namespace:

```html
<script src="mz-svg.min.js"></script>
<script>
    const sum = mzSVG.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
```

The library is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/mz-svg):

```html
<script src="https://cdn.jsdelivr.net/npm/mzusin/dist/mz-svg.min.js"></script>
<script>
    const sum = mzSVG.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
```
-----------------------------------------------

## Node.js Usage

The library can also be used in Node.js.

```
npm install mz-svg
```

```js
const { setDecimalPlaces } = require('mz-svg/dist/mz-svg.node.cjs');

const rounded = setDecimalPlaces(Math.PI, 2);
console.log(rounded);
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