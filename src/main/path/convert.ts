import { EPathDataCommand, IPathData } from './interfaces';

export const isRelativeCommand = (command: EPathDataCommand) => {
    return command.toLowerCase() === command;
};

export const pathDataToRelative = (pathData: IPathData): IPathData => {

    const { commands } = pathData;

    if(commands.length <= 0) return pathData;

    // current (x, y) pair
    let x = commands[0].params[0];
    let y = commands[0].params[1];

    // Make first M to be relative
    commands[0].command = EPathDataCommand.MoveToRel;

    for(let i = 1; i<commands.length; i++){
        const item = commands[i]

        // if relative ----> skip
        if(isRelativeCommand(item.command)) continue;

        switch (item.command) {
            case EPathDataCommand.MoveToAbs:
            case EPathDataCommand.LineToAbs:{
                commands[i].params[0] -= x;
                commands[i].params[1] -= y;
                x = commands[i].params[0];
                y = commands[i].params[1];
                break;
            }

            case EPathDataCommand.LineToHorizontalAbs:{
                commands[i].params[0] -= x;
                x = commands[i].params[0];
                break;
            }

            case EPathDataCommand.LineToVerticalAbs:{
                commands[i].params[0] -= y;
                y = commands[i].params[0];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:
            case EPathDataCommand.CubicCurveToRel:{
                //parseCommand(6, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.CubicCurveToSmoothAbs:
            case EPathDataCommand.CubicCurveToSmoothRel:
            case EPathDataCommand.QuadraticCurveToAbs:
            case EPathDataCommand.QuadraticCurveToRel:{
                //parseCommand(4, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.QuadraticCurveToSmoothAbs:
            case EPathDataCommand.QuadraticCurveToSmoothRel:{
                //parseCommand(2, token.tokenType, isRelative);
                break;
            }

            case EPathDataCommand.ArcAbs:
            case EPathDataCommand.ArcRel:{
                //parseCommand(7, token.tokenType, isRelative);
                break;
            }
        }

        // make the command lowercase
        commands[i].command = commands[i].command.toLowerCase() as EPathDataCommand;
    }

    return pathData;
};