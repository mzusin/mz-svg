## How to create &lt;clipPath>

The **createClipPath()** function is used to create &lt;clipPath> element.

```js
import { createClipPath } from 'mz-svg';

const $clipPath = createClipPath();
```

Below is a complete example that uses a clip path:

<div class="flex justify-center my-4">
    <svg viewBox="0 0 100 100" width="100" height="100">
      <clipPath id="myClip">
        <circle cx="40" cy="35" r="35" />
      </clipPath>
      <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
      <use clip-path="url(#myClip)" href="#heart" fill="red" />
    </svg>
</div>

```js
const $svg = mzSVG.createSVG({
    width: 100,
    height: 100
});

// Create clip path element with a circle;
// Everything outside the circle will be
// clipped and therefore invisible.
const $clipPath = mzSVG.createClipPath({
    id: 'my-clip'
});
const $circle = mzSVG.createCircle({
    cx: 40,
    cy: 35,
    r: 35,
});
$clipPath.append($circle);
$svg.append($clipPath);

// The original black heart, for reference
const $heart = mzSVG.createPath({
    d: 'M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z',
    id: 'heart',
});
$svg.append($heart);

// Only the portion of the red heart
// inside the clip circle is visible.
// <use clip-path="url(#my-clip)" href="#heart" fill="red" />
const $use = mzSVG.createUse({
    // The URL to an element/fragment that needs to be duplicated.
    href: '#heart',

    // The same id is used in the <clipPath> element
    clipPath: 'url(#my-clip)',

    fill: 'red',
});
$svg.append($use);

document.body.append($svg);
```

In Node.js, you need to first create a [JSDom](https://github.com/jsdom/jsdom) document, as described [here](/pages/nodejs-usage.html), and then pass this document as additional parameter:

```js
import { createClipPath } from 'mz-svg';

const $clipPath = createClipPath({
    document: doc
});
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createClipPath } from 'mz-svg';

const $clipPath = createClipPath({
    
    id: 'my-clip-path-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clipPathUnits
    clipPathUnits: 'userSpaceOnUse',

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

