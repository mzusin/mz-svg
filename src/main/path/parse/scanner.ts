export enum ETokenType {

    // Literals ----------
    NUMBER = 'num',

    // Keywords ----------
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

    EOF = 'EOF',
}

export interface IPathDataError {
    line: number;
    col: number;
    msg: string;
}

export interface IPathDataToken{
    tokenType: ETokenType;
    lexeme?: string;
    literal?: number;
    line: number;
    col: number;
}

export interface IPathDataScanResult {
    tokens: IPathDataToken[];
    errors: IPathDataError[];
}

// ----------------------------------------------------------------

export const scan = (pathData?: string) : IPathDataScanResult => {

    const result: IPathDataScanResult = {
        tokens: [],
        errors: [],
    };

    if(!pathData || pathData.trim() === '') return result;

    let source = pathData;

    let start = 0; // points to the first character in the lexeme being scanned
    let current = 0; // points at the character currently being considered
    let line = 0;
    let col = -1;

    const isEnd = () => {
        return current >= source.length;
    };

    const advance = () => {
        const char = source[current];
        current++;
        col++;
        return char;
    };

    const addKeywordToken = (tokenType: ETokenType) => {
        result.tokens.push({
            tokenType,
            line,
            col,
        });
    };

    const addError = (msg: string) => {
        result.errors.push({
            line,
            col,
            msg,
        });
    };

    /**
     * Scan a single token.
     */
    const scanToken = () => {
        const char = advance();

        // if a new line ---> update line and col params
        if(char.charAt(0) === '\n' || char.charAt(0) === '\r'){
            col = 0;
            line++;
            return;
        }

        // skip whitespaces, commas, etc.
        if(/\s\s+/.test(char) || char === ','){
            return;
        }

        switch(char){
            case 'M': addKeywordToken(ETokenType.MoveToAbs); break;
            case 'm': addKeywordToken(ETokenType.MoveToRel); break;
            case 'Z': addKeywordToken(ETokenType.ClosePathAbs); break;
            case 'z': addKeywordToken(ETokenType.ClosePathRel); break;
            case 'L': addKeywordToken(ETokenType.LineToAbs); break;
            case 'l': addKeywordToken(ETokenType.LineToRel); break;
            case 'H': addKeywordToken(ETokenType.LineToHorizontalAbs); break;
            case 'h': addKeywordToken(ETokenType.LineToHorizontalRel); break;
            case 'V': addKeywordToken(ETokenType.LineToVerticalAbs); break;
            case 'v': addKeywordToken(ETokenType.LineToVerticalRel); break;
            case 'C': addKeywordToken(ETokenType.CubicCurveToAbs); break;
            case 'c': addKeywordToken(ETokenType.CubicCurveToRel); break;
            case 'S': addKeywordToken(ETokenType.CubicCurveToSmoothAbs); break;
            case 's': addKeywordToken(ETokenType.CubicCurveToSmoothRel); break;
            case 'Q': addKeywordToken(ETokenType.QuadraticCurveToAbs); break;
            case 'q': addKeywordToken(ETokenType.QuadraticCurveToRel); break;
            case 'T': addKeywordToken(ETokenType.QuadraticCurveToSmoothAbs); break;
            case 't': addKeywordToken(ETokenType.QuadraticCurveToSmoothRel); break;
            case 'A': addKeywordToken(ETokenType.ArcAbs); break;
            case 'a': addKeywordToken(ETokenType.ArcRel); break;

            default: {
                addError(`Unexpected character ${ char }`);
                break;
            }
        }
    };

    console.log(start);

    /**
     * The loop.
     */
    while(!isEnd()){
        // we are at the beginning of the next lexeme.
        start = current;
        scanToken();
    }

    /**
     * We've reached the end of the path data source.
     */
    result.tokens.push({
        tokenType: ETokenType.EOF,
        line,
        col,
    });

    return result;
};