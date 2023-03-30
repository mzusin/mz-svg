## TypeScript Usage

To use the library with TypeScript, you need to install the module using npm:

```cmd
npm install mz-svg
```

Or using Yarn:

```cmd
yarn add mz-svg
```

Then you can import any function as follows:

```js
import { createSVG } from 'mz-svg';

const $svg = createSVG({
    width: 100,
    height: 200
}); // creates SVG element 100x200
```