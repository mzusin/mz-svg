## Download file as SVG, PNG, JPG, etc. (Browsers only)

It is possible to download an SVG file in various formats (svg, png, jpg, etc.) in  a browser environment. You can specify either an SVG string directly, or an SVG document.

**An example with SVG string:**

```js
import { download } from 'mz-svg';

const svgString = '...'; // any SVG as string

const res = await download({
    svgString,
    outfileName: 'my-svg', // optional file name ---> my-svg.svg
    ext: 'svg', // optional file extension ---> svg, png, jpg, etc.
});
```

**An example with SVG document:**

```js
import { download } from 'mz-svg';

const $svg = ...; // get an SVG document from somewhere...

const res = await download({
    $svg,
    outfileName: 'my-svg', // optional file name ---> my-svg.svg
    ext: 'svg', // optional file extension ---> svg, png, jpg, etc.
});
```


The result object **(res)** has the following signature:

```js
{
    isError: boolean;
    msg?: string;
}
```
