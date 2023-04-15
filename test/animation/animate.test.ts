import {
    createAnimate,
    createAnimateMotion,
} from '../../src/index-esm';
import { createNodeDoc } from '../core.test';

describe('Animation', () => {

    describe('createAnimate', () => {

        const props = {
            id: 'animate-1',
            classes: 'my-class-1 my-class-2',
            style: 'fill: red; stroke: blue;',

            // Animation timing attributes
            begin: '0s',
            dur: '1s',
            end: '5s',
            min: '0s',
            max: '10s',
            restart: 'always',
            repeatCount: '2',
            repeatDur: '3s',
            fill: 'freeze',

            // Animation value attributes
            calcMode: 'spline',
            values: '0; 100; 50',
            keyTimes: '0; 0.5; 1',
            keySplines: '0.42 0 0.58 1; 0.42 0 0.58 1',
            from: '0',
            to: '100',
            by: '10',

            // Other Animation attributes
            attributeName: 'opacity',
            additive: 'replace',
            accumulate: 'sum',
        };

        const $animate = createAnimate({
            document: createNodeDoc(),
            ...props,
        });

        test('sets "id" property', () => {
            expect($animate.getAttribute('id')).toStrictEqual(props.id);
        });

        test('sets "classes" property', () => {
            expect($animate.getAttribute('class')).toStrictEqual(props.classes);
        });

        test('sets "style" property', () => {
            expect($animate.getAttribute('style')).toStrictEqual(props.style);
        });

        test('sets "begin" property', () => {
            expect($animate.getAttribute('begin')).toStrictEqual(props.begin);
        });

        test('sets "dur" property', () => {
            expect($animate.getAttribute('dur')).toStrictEqual(props.dur);
        });

        test('sets "end" property', () => {
            expect($animate.getAttribute('end')).toStrictEqual(props.end);
        });

        test('sets "min" property', () => {
            expect($animate.getAttribute('min')).toStrictEqual(props.min);
        });

        test('sets "max" property', () => {
            expect($animate.getAttribute('max')).toStrictEqual(props.max);
        });

        test('sets "restart" property', () => {
            expect($animate.getAttribute('restart')).toStrictEqual(props.restart);
        });

        test('sets "repeatCount" property', () => {
            expect($animate.getAttribute('repeatCount')).toStrictEqual(props.repeatCount);
        });

        test('sets "repeatDur" property', () => {
            expect($animate.getAttribute('repeatDur')).toStrictEqual(props.repeatDur);
        });

        test('sets "fill" property', () => {
            expect($animate.getAttribute('fill')).toStrictEqual(props.fill);
        });

        test('sets "calcMode" property', () => {
            expect($animate.getAttribute('calcMode')).toStrictEqual(props.calcMode);
        });

        test('sets "values" property', () => {
            expect($animate.getAttribute('values')).toStrictEqual(props.values);
        });

        test('sets "keyTimes" property', () => {
            expect($animate.getAttribute('keyTimes')).toStrictEqual(props.keyTimes);
        });

        test('sets "keySplines" property', () => {
            expect($animate.getAttribute('keySplines')).toStrictEqual(props.keySplines);
        });

        test('sets "from" property', () => {
            expect($animate.getAttribute('from')).toStrictEqual(props.from);
        });

        test('sets "to" property', () => {
            expect($animate.getAttribute('to')).toStrictEqual(props.to);
        });

        test('sets "by" property', () => {
            expect($animate.getAttribute('by')).toStrictEqual(props.by);
        });

        test('sets "attributeName" property', () => {
            expect($animate.getAttribute('attributeName')).toStrictEqual(props.attributeName);
        });

        test('sets "additive" property', () => {
            expect($animate.getAttribute('additive')).toStrictEqual(props.additive);
        });

        test('sets "accumulate" property', () => {
            expect($animate.getAttribute('accumulate')).toStrictEqual(props.accumulate);
        });
    });

    describe('createAnimateMotion', () => {

        const props = {
            keyPoints: '0;0.5;1',
            path: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z',
            rotate: 0,

            id: 'animate-1',
            classes: 'my-class-1 my-class-2',
            style: 'fill: red; stroke: blue;',

            // Animation timing attributes
            begin: '0s',
            dur: '1s',
            end: '5s',
            min: '0s',
            max: '10s',
            restart: 'always',
            repeatCount: '2',
            repeatDur: '3s',
            fill: 'freeze',

            // Animation value attributes
            calcMode: 'spline',
            values: '0; 100; 50',
            keyTimes: '0; 0.5; 1',
            keySplines: '0.42 0 0.58 1; 0.42 0 0.58 1',
            from: '0',
            to: '100',
            by: '10',

            // Other Animation attributes
            attributeName: 'opacity',
            additive: 'replace',
            accumulate: 'sum',
        };

        const $animateMotion = createAnimateMotion({
            document: createNodeDoc(),
            ...props,
        });

        test('sets "keyPoints" property', () => {
            expect($animateMotion.getAttribute('keyPoints')).toStrictEqual(props.keyPoints);
        });

        test('sets "path" property', () => {
            expect($animateMotion.getAttribute('path')).toStrictEqual(props.path);
        });

        test('sets "rotate" property', () => {
            expect($animateMotion.getAttribute('rotate')).toStrictEqual(props.rotate.toString());
        });

        test('sets "id" property', () => {
            expect($animateMotion.getAttribute('id')).toStrictEqual(props.id);
        });

        test('sets "classes" property', () => {
            expect($animateMotion.getAttribute('class')).toStrictEqual(props.classes);
        });

        test('sets "style" property', () => {
            expect($animateMotion.getAttribute('style')).toStrictEqual(props.style);
        });

        test('sets "begin" property', () => {
            expect($animateMotion.getAttribute('begin')).toStrictEqual(props.begin);
        });

        test('sets "dur" property', () => {
            expect($animateMotion.getAttribute('dur')).toStrictEqual(props.dur);
        });

        test('sets "end" property', () => {
            expect($animateMotion.getAttribute('end')).toStrictEqual(props.end);
        });

        test('sets "min" property', () => {
            expect($animateMotion.getAttribute('min')).toStrictEqual(props.min);
        });

        test('sets "max" property', () => {
            expect($animateMotion.getAttribute('max')).toStrictEqual(props.max);
        });

        test('sets "restart" property', () => {
            expect($animateMotion.getAttribute('restart')).toStrictEqual(props.restart);
        });

        test('sets "repeatCount" property', () => {
            expect($animateMotion.getAttribute('repeatCount')).toStrictEqual(props.repeatCount);
        });

        test('sets "repeatDur" property', () => {
            expect($animateMotion.getAttribute('repeatDur')).toStrictEqual(props.repeatDur);
        });

        test('sets "fill" property', () => {
            expect($animateMotion.getAttribute('fill')).toStrictEqual(props.fill);
        });

        test('sets "calcMode" property', () => {
            expect($animateMotion.getAttribute('calcMode')).toStrictEqual(props.calcMode);
        });

        test('sets "values" property', () => {
            expect($animateMotion.getAttribute('values')).toStrictEqual(props.values);
        });

        test('sets "keyTimes" property', () => {
            expect($animateMotion.getAttribute('keyTimes')).toStrictEqual(props.keyTimes);
        });

        test('sets "keySplines" property', () => {
            expect($animateMotion.getAttribute('keySplines')).toStrictEqual(props.keySplines);
        });

        test('sets "from" property', () => {
            expect($animateMotion.getAttribute('from')).toStrictEqual(props.from);
        });

        test('sets "to" property', () => {
            expect($animateMotion.getAttribute('to')).toStrictEqual(props.to);
        });

        test('sets "by" property', () => {
            expect($animateMotion.getAttribute('by')).toStrictEqual(props.by);
        });

        test('sets "attributeName" property', () => {
            expect($animateMotion.getAttribute('attributeName')).toStrictEqual(props.attributeName);
        });

        test('sets "additive" property', () => {
            expect($animateMotion.getAttribute('additive')).toStrictEqual(props.additive);
        });

        test('sets "accumulate" property', () => {
            expect($animateMotion.getAttribute('accumulate')).toStrictEqual(props.accumulate);
        });
    });
});