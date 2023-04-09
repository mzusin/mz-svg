## Converts path commands to relative

It's possible to convert the **'d'** property of a given path element to relative commands using **pathToRel()** function.

```js
import { pathToRel } from 'mz-svg';

const d = pathToRel(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`);

// The result:
// -------------------
// M10 30a20 20 0 0 1 40 0 20 20 0 0 1 40 0q0 30 -40 60 -40 -30 -40 -60z
```

The command receives an optional **"beautify"** parameter. In this case, it will not try to minimize the result.

```js
import { pathToRel } from 'mz-svg';

const d = pathToRel(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, true);

// The result:
// -------------------
// M 10 30 a 20 20 0 0 1 40 0 a 20 20 0 0 1 40 0 q 0 30 -40 60 q -40 -30 -40 -60 z
```

Another optional parameter is **"decimalPlaces"**. It defines the number of decimal places after the dot in decimal numbers. It defaults to 2, but you can specify a different value:

```js
import { pathToRel } from 'mz-svg';

// decimalPlaces = 1
const d = pathToRel('M -0.100 -0.252625 L -1.180000 -12.999999', false, 1);

// The result:
// -------------------
// M-.1 -.3l-1.1 -12.7
```
