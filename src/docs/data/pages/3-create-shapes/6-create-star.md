## How to create star shape

<div data-examples="star-examples"]></div>

The **createStar()** function is used to create an SVG star shape.

```js
import { createStar } from 'mz-svg';

const $star = createStar({
    raysNumber: 5,
    centerX: 100,
    centerY: 100,
    outerRadius: 100,
    innerRadius: 50,
});
```

<div class="my-12 flex flex-col items-center border-red"> 
    <div id="star-ph"></div>
    <div class="flex items-center">
        <button id="star-random-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Create Random Star</button>
    </div>
</div> 

For example:

```js
// create an SVG document 200x200
const $svg = createSVG({
    width: 200,
    height: 200
});

// create a star with 5 rays in the center of the document
const $star = createStar({
    raysNumber: 5,
    centerX: 100,
    centerY: 100,
    outerRadius: 100,
    innerRadius: 50,
});

// add star to the SVG document
$svg.append($star);

// add SVG to the browser document
document.body.append($svg);
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createStar } from 'mz-svg/dist/mz-svg.node.cjs';

const $star = createStar({
    document: doc,
    raysNumber: 5,
    centerX: 100,
    centerY: 100,
    outerRadius: 100,
    innerRadius: 50,
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createStar } from 'mz-svg';

const $star = createStar({

    // the number of star rays
    raysNumber: 5, 
    
    // the star center X position
    centerX: 100,

    // the star center Y position
    centerY: 100,

    // the star outer radius
    outerRadius: 100,

    // the star inner radius
    innerRadius: 50,
    
    // -------------------------------------
    
    id: 'my-path-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',
    
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
    pathLength: '10',

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

