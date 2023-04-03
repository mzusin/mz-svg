import { appendOnce, createDefs, createRect, createSVG, prependOnce } from '../src/index-esm';
import { createNodeDoc } from './core.test';

describe('Helpers: appendOnce', () => {

    test('appendOnce ---> should add only one element', () => {

        const doc = createNodeDoc();

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: doc,
        });

        const $defs = createDefs({
            document: doc,
        });

        appendOnce($svg, $defs);
        appendOnce($svg, $defs);
        appendOnce($svg, $defs);

        const count = $svg.querySelectorAll('defs').length;

        expect(count).toStrictEqual(1);
    });

    test('appendOnce ---> last element should be defs', () => {

        const doc = createNodeDoc();

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: doc,
        });

        const $rect = createRect({
            document: doc,
        });

        $svg.append($rect);

        const $defs = createDefs({
            document: doc,
        });

        appendOnce($svg, $defs);

        expect($svg.children[$svg.children.length - 1].tagName.toLowerCase().trim()).toStrictEqual('defs');
    });
});

describe('Helpers: prependOnce', () => {

    test('prependOnce ---> should add only one element', () => {

        const doc = createNodeDoc();

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: doc,
        });

        const $defs = createDefs({
            document: doc,
        });

        prependOnce($svg, $defs);
        prependOnce($svg, $defs);
        prependOnce($svg, $defs);

        const count = $svg.querySelectorAll('defs').length;

        expect(count).toStrictEqual(1);
    });

    test('prependOnce ---> first element should be defs', () => {

        const doc = createNodeDoc();

        const $svg = createSVG({
            width: 100,
            height: 200,
            document: doc,
        });

        const $rect = createRect({
            document: doc,
        });

        $svg.append($rect);

        const $defs = createDefs({
            document: doc,
        });

        prependOnce($svg, $defs);

        expect($svg.children[0].tagName.toLowerCase().trim()).toStrictEqual('defs');
    });
});