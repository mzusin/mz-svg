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
    value?: string|number;
    line: number;
    col: number;
}

export interface IPathDataScanResult {
    tokens: IPathDataToken[];
    errors: IPathDataError[];
}

// ----------------------------------------------------------------

const NUMBER_REGEX = /^[+\-]?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+\-]?\d+)?/;

/**
 * Path Data Scanner.
 * http://craftinginterpreters.com/scanning.html
 */
export const scan = (pathData?: string) : IPathDataScanResult => {

    const result: IPathDataScanResult = {
        tokens: [],
        errors: [],
    };

    if(!pathData || pathData.trim() === '') return result;

    let current = 0;
    let line = 0;
    let col = -1;

    const isEnd = () => {
        return current >= pathData.length;
    };

    const advance = () => {
        const char = pathData[current];
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

    const addNumberToken = (num: number|string) => {
        result.tokens.push({
            tokenType: ETokenType.NUMBER,
            value: num,
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

    const matchNumber = () : boolean => {
        if(isEnd()) return false;
        return NUMBER_REGEX.test(pathData.substring(current - 1));
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
        if(/\s/.test(char) || char === ','){
            return;
        }

        // try to match a number
        if(matchNumber()){
            const matchRes = pathData.substring(current - 1).match(NUMBER_REGEX);
            if(matchRes && matchRes.length > 0){
                const num = matchRes[0];
                addNumberToken(num);
                current += num.length;
                return;
            }
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

    /**
     * The loop.
     */
    while(!isEnd()){
        scanToken();
    }

    /**
     * We've reached the end of the path data pathData.
     */
    result.tokens.push({
        tokenType: ETokenType.EOF,
        line,
        col,
    });

    return result;
};