## Scale Path

It's possible to scale path around its center using the **scalePath()** function. The function works with path data (the **d** property of the path).

```js
import { scalePath } from 'mz-svg';

const scaleVector = [2, 2];
const decimalPlaces = 2; // optional

const d = scalePath(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, scaleVector, decimalPlaces);
```

It's also possible to scale path around any point (cx, cy) using the **scalePathAroundPoint()** function.

```js
import { scalePathAroundPoint } from 'mz-svg';

const scaleVector = [2, 2];
const transformOrigin = [10, 20];
const decimalPlaces = 2; // optional

// rotate the path around (cx, cy) by 45 degrees
const d = scalePathAroundPoint(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, scaleVector, transformOrigin, decimalPlaces);
```
