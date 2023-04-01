import {
    createStar,
} from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Stars: createStar()', () => {

    test('Min raysNumber = 0 ---> should be 4', () => {

        const $star = createStar({
            raysNumber: 0,
            centerX: 100,
            centerY: 100,
            outerRadius: 100,
            innerRadius: 50,
            document: createNodeDoc(),
        });

        expect($star.outerHTML).toStrictEqual('<path d="M 100,0  L 100,0 , L 135.36,64.64 , L 200,100 , L 135.36,135.36 , L 100,200 , L 64.64,135.36 , L 0,100 , L 64.64,64.64 Z"></path>');
    });

    test('Min raysNumber = -10 ---> should be 4', () => {

        const $star = createStar({
            raysNumber: -10,
            centerX: 100,
            centerY: 100,
            outerRadius: 100,
            innerRadius: 50,
            document: createNodeDoc(),
        });

        expect($star.outerHTML).toStrictEqual('<path d="M 100,0  L 100,0 , L 135.36,64.64 , L 200,100 , L 135.36,135.36 , L 100,200 , L 64.64,135.36 , L 0,100 , L 64.64,64.64 Z"></path>');
    });
});