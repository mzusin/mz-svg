## How to create SVG Pattern

The **createPattern()** function is used to create an SVG pattern element.

```js
import { createPattern } from 'mz-svg';

const $pattern = createPattern({
    id: 'my-pattern',
    x: 0,
    y: 0,
    width: 100,
    height: 20,
    viewBox: '0, 0, 100, 20',
    patternUnits: 'userSpaceOnUse',
});
```

Below is a more complete example that describes how to add a striped pattern to a rectangle.

<div class="flex flex-col justify-center items-center my-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><pattern x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse" viewBox="0, 0, 100, 20" id="my-pattern"><rect x="0" y="0" width="100" height="10" fill="#4a9da8"></rect><rect x="0" y="10" width="100" height="10" fill="#0d4249"></rect></pattern><rect x="0" y="0" width="200" height="200" fill="url(#my-pattern)"></rect></svg>
</div>

```js
const $svg = mzSVG.createSVG({
    width: 200,
    height: 200
});

// create first pattern line
const $rect1 = mzSVG.createRect({
    x: 0,
    y: 0,
    fill: '#4a9da8',
    width: 100,
    height: 10,
});

// create second pattern line
const $rect2 = mzSVG.createRect({
    x: 0,
    y: 10,
    fill: '#0d4249',
    width: 100,
    height: 10,
});

// create pattern element with id 'my-pattern'
const $pattern = mzSVG.createPattern({
    id: 'my-pattern',
    x: 0,
    y: 0,
    width: 100,
    height: 20,
    viewBox: '0, 0, 100, 20',
    patternUnits: 'userSpaceOnUse',
});

// add lines to the pattern element
$pattern.append($rect1);
$pattern.append($rect2);

// add pattern to SVG
$svg.append($pattern);

// create placeholder for the pattern, use pattern id in the 'fill' attribute
const $box = mzSVG.createRect({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    fill: 'url(#my-pattern)',
});
$svg.append($box);

// add the result svg to the document
document.body.append($svg);
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createPattern } from 'mz-svg/dist/mz-svg.node.cjs';

const $pattern = createPattern({
    document: doc,
    id: 'my-pattern',
    x: 0,
    y: 0,
    width: 100,
    height: 20,
    viewBox: '0, 0, 100, 20',
    patternUnits: 'userSpaceOnUse',
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createPattern } from 'mz-svg';

const $pattern = createPattern({
    
    id: 'my-pattern-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x
    x: 0,
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y
    y: 0,
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
    width: 100,
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
    height: 100,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href
    href: 'some-id',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternContentUnits
    patternContentUnits: 'userSpaceOnUse',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternTransform
    patternTransform: 'rotate(20)',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternUnits
    patternUnits: 'userSpaceOnUse',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
    preserveAspectRatio: 'xMidYMid meet',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
    viewBox: '0, 0, 10, 10',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
    stroke: '#00ffff',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
    strokeWidth: 1,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity
    strokeOpacity: 0.3,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
    strokeLinecap: 'round',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
    strokeLinejoin: 'round',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
    strokeDasharray: '0 4 0',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset
    strokeDashoffset: '3',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
    strokeMiterlimit: '8',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
    fill: '#ffffff',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity
    fillOpacity: 0.7,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
    fillRule: 'evenodd',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter
    filter: 'url(#my-filter)',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask
    mask: 'url(#my-mask)',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
    transform: 'scale(1 0.5)',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect
    vectorEffect: 'non-scaling-stroke',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering
    shapeRendering: 'geometricPrecision',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath
    clipPath: 'url(#my-clip)',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
    clipRule: 'evenodd',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity
    opacity: 0.3,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility
    visibility: 'hidden',
});
```

