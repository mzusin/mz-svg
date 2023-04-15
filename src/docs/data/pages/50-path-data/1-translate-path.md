## Translate Path

It's possible to translate the specified path to some point (x, y) using the **translatePath()** function. The function works with path data (the **d** property of the path).

```js
import { translatePath } from 'mz-svg';

// translate path to the point (100, 150)
const d = translatePath(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, 100, 150);
```

The function receives an optional parameter is **"decimalPlaces"**. It defines the number of decimal places after the dot in decimal numbers. It defaults to 2, but you can specify a different value:

```js
import { translatePath } from 'mz-svg';

// decimalPlaces = 1
const d = translatePath('M -0.100 -0.252625 L -1.180000 -12.999999', 100, 150, 1);
```
