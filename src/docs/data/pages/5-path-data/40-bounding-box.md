## Path Bounding Box

It's possible to find path bounding box using the **getPathBBox()** function. The function works with path data (the **d** property of the path).

```js
import { getPathBBox } from 'mz-svg';

const bbox: IBBox | null = getPathBBox(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`, decimalPlaces);
```

The IBBox interface is:

```ts
export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
}
```
