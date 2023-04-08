export interface IPathDataError {
    line: number;
    col: number;
    msg: string;
}
export interface IPathDataToken {
    tokenType: string;
    value?: string | number;
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
export declare enum EPathDataCommand {
    MoveToAbs = "M",
    MoveToRel = "m",
    ClosePathAbs = "Z",
    ClosePathRel = "z",
    LineToAbs = "L",
    LineToRel = "l",
    LineToHorizontalAbs = "H",
    LineToHorizontalRel = "h",
    LineToVerticalAbs = "V",
    LineToVerticalRel = "v",
    CubicCurveToAbs = "C",
    CubicCurveToRel = "c",
    CubicCurveToSmoothAbs = "S",
    CubicCurveToSmoothRel = "s",
    QuadraticCurveToAbs = "Q",
    QuadraticCurveToRel = "q",
    QuadraticCurveToSmoothAbs = "T",
    QuadraticCurveToSmoothRel = "t",
    ArcAbs = "A",
    ArcRel = "a"
}
