## Parse Path Data

It's possible to parse the **'d'** property of a given path element using the **parsePath()** function.

```js
import { parsePath } from 'mz-svg';

const parseResult = parsePath(`M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z`); 

// The result --------------------

/*
{
	"commands": [
        {
            "command": "M",
            "params": [10, 30]
        }, 
        {
            "command": "A",
            "params": [20, 20, 0, 0, 1, 50, 30]
        }, 
        {
            "command": "A",
            "params": [20, 20, 0, 0, 1, 90, 30]
        }, 
        {
            "command": "Q",
            "params": [90, 60, 50, 90]
        }, 
        {
            "command": "Q",
            "params": [10, 60, 10, 30]
        }, 
        {
            "command": "z",
            "params": []
        }
	],
	"errors": []
}
 */
```

Path data interface:

```ts
interface IPathData {
    commands: IPathDataCommand[];
    errors: IPathDataError[];
}

interface IPathDataCommand {
    command: EPathDataCommand;
    params: number[];
}

interface IPathDataError {
    line: number;
    col: number;
    msg: string;
}
```

Path data commands enum:

```ts
export enum EPathDataCommand {

    // The "moveto" commands (M or m) establish a new current point.
    // The effect is as if the "pen" were lifted and moved to a new location.
    MoveToAbs = 'M',
    MoveToRel = 'm',

    // The "closepath" (Z or z) ends the current sub-path and causes an automatic straight line
    // to be drawn from the current point to the initial point of the current sub-path.
    ClosePathAbs = 'Z',
    ClosePathRel = 'z',

    // The various "lineto" commands draw straight lines from the current point to a new point.
    LineToAbs = 'L',
    LineToRel = 'l',
    LineToHorizontalAbs = 'H',
    LineToHorizontalRel = 'h',
    LineToVerticalAbs = 'V',
    LineToVerticalRel = 'v',

    // Cubic Bézier commands
    CubicCurveToAbs = 'C',
    CubicCurveToRel = 'c',
    CubicCurveToSmoothAbs = 'S',
    CubicCurveToSmoothRel = 's',

    // Quadratic Bézier commands
    QuadraticCurveToAbs = 'Q',
    QuadraticCurveToRel = 'q',
    QuadraticCurveToSmoothAbs = 'T',
    QuadraticCurveToSmoothRel = 't',

    // Elliptical arc commands
    ArcAbs = 'A',
    ArcRel = 'a',
}
```
