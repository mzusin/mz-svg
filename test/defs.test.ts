import {
    createDefs,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Defs: createDefs', () => {
    
    test('createDefs with provided id', () => {
        const id = 'path-1';

        const $defs = createDefs({
            id,
            document: createNodeDoc(),
        });

        expect($defs.getAttribute('id')).toStrictEqual(id);
    });

    test('createDefs with provided classes', () => {
        const classes = 'path-class-1 path-class-2';

        const $defs = createDefs({
            classes,
            document: createNodeDoc(),
        });

        expect($defs.getAttribute('class')).toStrictEqual(classes);
    });
});