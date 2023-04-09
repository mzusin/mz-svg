## Validate Path Data

It's possible to check that the **'d'** property of the given path element is valid using **isPathValid()** function.

```js
import { isPathValid } from 'mz-svg';

const isValid = isPathValid(`M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z`); // true
```

OR

```js
import { isPathValid } from 'mz-svg';

const isValid = isPathValid(`M600,350 l 50,-25 
a25,25 -30 1000,1 50,-25`); // false
```
