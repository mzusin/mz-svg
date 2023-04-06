import {
    createDefs,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Defs: createDefs', () => {
    
    test('createDefs with provided id', () => {
        const id = 'defs-1';

        const $defs = createDefs({
            id,
            document: createNodeDoc(),
        });

        expect($defs.getAttribute('id')).toStrictEqual(id);
    });

    test('createDefs with provided classes', () => {
        const classes = 'defs-class-1 defs-class-2';

        const $defs = createDefs({
            classes,
            document: createNodeDoc(),
        });

        expect($defs.getAttribute('class')).toStrictEqual(classes);
    });
});