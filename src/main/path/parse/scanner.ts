import { EPathDataCommand } from './parser';

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

// ----------------------------------------------------------------

const NUMBER_REGEX = /^[+\-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d+)?(?:(?<=\d)(?:[eE][+\-]?\d+))?/;

/**
 * Path Data Scanner.
 */
export const scan = (pathData?: string) : IPathDataScanResult => {

    const result: IPathDataScanResult = {
        tokens: [],
        errors: [],
    };

    if(!pathData || pathData.trim() === '') return result;

    let current = 0;
    let line = 0;
    let col = 0;

    const isEnd = () => {
        return current >= pathData.length;
    };

    const addKeywordToken = (tokenType: EPathDataCommand) => {
        result.tokens.push({
            tokenType,
            line,
            col,
        });
    };

    const addNumberToken = (num: number|string) => {
        result.tokens.push({
            tokenType: 'num',
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
        return NUMBER_REGEX.test(pathData.substring(current));
    };

    /**
     * Scan a single token.
     */
    const scanToken = () => {
        const char = pathData[current];

        // Path data can contain newline characters and
        // thus can be broken up into multiple lines to improve readability.
        // If a newline character ---> update line and col params.
        if(char.charAt(0) === '\n' || char.charAt(0) === '\r'){
            current++;
            col = 0;
            line++;
            return;
        }

        // Superfluous white space and separators such as commas can be eliminated.
        // "M 100 100 L 200 200" contains unnecessary spaces and could be expressed more compactly as "M100 100L200 200".
        if(/\s/.test(char) || char === ','){
            current++;
            col++;
            return;
        }

        // try to match a number
        if(matchNumber()){
            const matchRes = pathData.substring(current).match(NUMBER_REGEX);

            if(matchRes && matchRes.length > 0){
                const num = matchRes[0];
                addNumberToken(num);

                current += num.length;
                col += num.length;
                return;
            }
        }

        switch(char){
            case 'M': addKeywordToken(EPathDataCommand.MoveToAbs); break;
            case 'm': addKeywordToken(EPathDataCommand.MoveToRel); break;
            case 'Z': addKeywordToken(EPathDataCommand.ClosePathAbs); break;
            case 'z': addKeywordToken(EPathDataCommand.ClosePathRel); break;
            case 'L': addKeywordToken(EPathDataCommand.LineToAbs); break;
            case 'l': addKeywordToken(EPathDataCommand.LineToRel); break;
            case 'H': addKeywordToken(EPathDataCommand.LineToHorizontalAbs); break;
            case 'h': addKeywordToken(EPathDataCommand.LineToHorizontalRel); break;
            case 'V': addKeywordToken(EPathDataCommand.LineToVerticalAbs); break;
            case 'v': addKeywordToken(EPathDataCommand.LineToVerticalRel); break;
            case 'C': addKeywordToken(EPathDataCommand.CubicCurveToAbs); break;
            case 'c': addKeywordToken(EPathDataCommand.CubicCurveToRel); break;
            case 'S': addKeywordToken(EPathDataCommand.CubicCurveToSmoothAbs); break;
            case 's': addKeywordToken(EPathDataCommand.CubicCurveToSmoothRel); break;
            case 'Q': addKeywordToken(EPathDataCommand.QuadraticCurveToAbs); break;
            case 'q': addKeywordToken(EPathDataCommand.QuadraticCurveToRel); break;
            case 'T': addKeywordToken(EPathDataCommand.QuadraticCurveToSmoothAbs); break;
            case 't': addKeywordToken(EPathDataCommand.QuadraticCurveToSmoothRel); break;
            case 'A': addKeywordToken(EPathDataCommand.ArcAbs); break;
            case 'a': addKeywordToken(EPathDataCommand.ArcRel); break;

            default: {
                addError(`Unexpected character ${ char }`);
                break;
            }
        }

        current++;
        col++;
    };

    /**
     * The loop.
     */
    while(!isEnd()){
        scanToken();
    }

    return result;
};