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
// M 10 30 
// A 20 20 0 0 1 50 30 
// A 20 20 0 0 1 90 30 
// Q 90 60 50 90 
// Q 10 60 10 30 Z
```