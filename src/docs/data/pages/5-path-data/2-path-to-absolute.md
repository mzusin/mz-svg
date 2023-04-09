## Converts path commands to absolute

It's possible to convert the **'d'** property of a given path element to absolute commands using **pathToAbs()** function.

```js
import { pathToAbs } from 'mz-svg';

const d = pathToAbs(`M 10 30 
            a 20 20 0 0 1 40 0 
            a 20 20 0 0 1 40 0 
            q 0 30 -40 60 
            q -40 -30 -40 -60 z`);

// The result:
// -------------------
// M10 30A20 20 0 0 1 50 30 20 20 0 0 1 90 30Q90 60 50 90 10 60 10 30Z
```

The command receives an optional **"beautify"** parameter. In this case, it will not try to minimize the result.

```js
import { pathToAbs } from 'mz-svg';

const d = pathToAbs(`M 10 30 
            a 20 20 0 0 1 40 0 
            a 20 20 0 0 1 40 0 
            q 0 30 -40 60 
            q -40 -30 -40 -60 z`, true);

// The result:
// -------------------
// M 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Q 10 60 10 30 Z
```

Another optional parameter is **"decimalPlaces"**. It defines the number of decimal places after the dot in decimal numbers. It defaults to 2, but you can specify a different value:

```js
import { pathToAbs } from 'mz-svg';

// decimalPlaces = 1
const d = pathToAbs('M -0.100 -0.252625 l -1.180000 -12.999999', false, 1);

// The result:
// -------------------
// M-.1 -.3 -1.3 -13.3
```
