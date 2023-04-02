## How to create SVG Pattern

The **createPattern()** function is used to create an SVG pattern element.

```js
import { createPattern } from 'mz-svg';

const $pattern = createPattern({
    
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

