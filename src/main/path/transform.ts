import { parsePath } from './index';
import { pathDataToRelative, pathDataToString } from './convert';

export const translatePath = (d: string, x: number, y: number, decimalPlaces = 2) => {
    if(!d) return d;

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return d;

    const relative = pathDataToRelative(parsed);
    if(!relative || relative.commands.length <= 0) return d;

    const mCommand = relative.commands[0];
    mCommand.params[0] = x;
    mCommand.params[1] = y;

    return pathDataToString(relative, true, decimalPlaces);
};