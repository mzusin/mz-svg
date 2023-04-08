export interface IPathDataError {
    line: number;
    col: number;
    msg: string;
}

export interface IPathDataToken{
    tokenType: string;
    value?: string|number;
    line: number;
    col: number;
}

export interface IPathDataScanResult {
    tokens: IPathDataToken[];
    errors: IPathDataError[];
}

export interface IPathDataCommand {
    command: EPathDataCommand;
    params: number[];
}

export interface IPathData {
    commands: IPathDataCommand[];
    errors: IPathDataError[];
}

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
