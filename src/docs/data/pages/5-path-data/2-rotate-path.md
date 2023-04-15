## Rotate Path

It's possible to rotate path around its center using the **rotatePath()** function. The function works with path data (the **d** property of the path).

```js
import { rotatePath } from 'mz-svg';

const angle = 45; // angle in degrees
const decimalPlaces = 2; // optional

// rotate the path around its center by 45 degrees
const d = rotatePath(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, angle, decimalPlaces);
```

It's also possible to rotate path around any point (cx, cy) using the **rotatePathAroundDot()** function.

```js
import { rotatePathAroundDot } from 'mz-svg';

const cx = 10;
const cy = 20;
const angle = 45; // angle in degrees
const decimalPlaces = 2; // optional

// rotate the path around (cx, cy) by 45 degrees
const d = rotatePathAroundDot(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, cx, cy, angle, decimalPlaces);
```
