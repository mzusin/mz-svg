## How to create &lt;mask>

The **createMask()** function is used to create &lt;mask> element.

```js
import { createMask } from 'mz-svg';

const $mask = createMask();
```

Below is a complete example that uses a mask:

<div class="flex justify-center my-4">
    <svg viewBox="-10 -10 120 120" width="120" height="120">
        <mask id="myMask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <path
                    d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
                    fill="black" />
        </mask>
        <circle cx="50" cy="50" r="50" mask="url(#myMask)" />
    </svg>
</div>

```js
const $svg = mzSVG.createSVG({
    x: -10,
    y: -10,
    width: 120,
    height: 120
});

const $mask = mzSVG.createMask({
    id: 'my-mask',
});

// Everything under a white pixel will be visible
$mask.append(mzSVG.createRect({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: '#ffffff',
}));

// Everything under a black pixel will be invisible
$mask.append(mzSVG.createPath({
    d: 'M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z',
    fill: 'black',
}));

$svg.append($mask);

// with this mask applied, we "punch" a heart shape hole into the circle
const $circle = mzSVG.createCircle({
    cx: 50,
    cy: 50,
    r: 50,
    mask: 'url(#my-mask)',
});

$svg.append($circle);

document.body.append($svg);
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createMask } from 'mz-svg';

const $mask = createMask({
    
    id: 'my-id',
    classes: 'css-class1 css-class2',
    style: 'stroke: blue',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x
    x: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y
    y: 0,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
    width: 100,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
    height: 200,

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/maskContentUnits
    maskContentUnits: 'userSpaceOnUse',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/maskUnits
    maskUnits: 'userSpaceOnUse',

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

