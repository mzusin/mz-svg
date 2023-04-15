## How to create &lt;symbol>

The **createSymbol()** function is used to create &lt;symbol> element.

```js
import { createSymbol } from 'mz-svg';

const $symbol = createSymbol();
```

Below is a complete example that uses a symbol:

<div class="flex justify-center my-4">
    <svg viewBox="0 0 80 20" width="240" height="60" xmlns="http://www.w3.org/2000/svg">
        <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
            <circle cx="1" cy="1" r="1" />
        </symbol>
        <path
                d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20"
                fill="none"
                stroke="pink" />
        <use href="#myDot" x="5" y="5" style="opacity:1.0" />
        <use href="#myDot" x="20" y="5" style="opacity:0.8" />
        <use href="#myDot" x="35" y="5" style="opacity:0.6" />
        <use href="#myDot" x="50" y="5" style="opacity:0.4" />
        <use href="#myDot" x="65" y="5" style="opacity:0.2" />
    </svg>
</div>

```js
        const $svg = mzSVG.createSVG({
    x: 0,
    y: 0,
    width: 240,
    height: 60,
    viewBox: '0 0 80 20',
});

// Create a circle symbol in its own coordinate system
const $symbol = mzSVG.createSymbol({
    id: 'dot-symbol',
    width: 10,
    height: 10,
    viewBox: '0 0 2 2',
});

const $circle = mzSVG.createCircle({
    cx: 1,
    cy: 1,
    r: 1,
});
$symbol.append($circle);

$svg.append($symbol);

// A grid to materialize our symbol positioning
const $path = mzSVG.createPath({
    d: 'M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20',
    fill: 'none',
    stroke: 'pink',
});
$svg.append($path);

// All instances of our symbol
$svg.append(mzSVG.createUse({
    href: '#dot-symbol',
    x: 5,
    y: 5,
    opacity: 1,
}));

$svg.append(mzSVG.createUse({
    href: '#dot-symbol',
    x: 20,
    y: 5,
    opacity: 0.8,
}));

$svg.append(mzSVG.createUse({
    href: '#dot-symbol',
    x: 35,
    y: 5,
    opacity: 0.6,
}));

$svg.append(mzSVG.createUse({
    href: '#dot-symbol',
    x: 50,
    y: 5,
    opacity: 0.4,
}));

$svg.append(mzSVG.createUse({
    href: '#dot-symbol',
    x: 65,
    y: 5,
    opacity: 0.2,
}));

document.body.append($svg);
```

The function can accept the following parameters. Note that **all parameters are optional**:

```js
import { createSymbol } from 'mz-svg';

const $symbol = createSymbol({

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

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/refX
    refX: 'left',

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/refY
    refY: 'top',

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

