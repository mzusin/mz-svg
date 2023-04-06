import * as core from './main/core';
import * as primitiveShapes from './main/shapes/primitive-shapes';
import * as stars from './main/shapes/star-shapes';
import * as shapePaths from './main/shapes/shape-paths';
import * as containers from './main/containers';
import * as ioBrowser from './main/io-browser';
import * as helpers from './main/helpers';
import * as pathTransforms from './main/path/path-transformation';
import * as parsePAthData from './main/path/parse-path-data';

const api = {
    ...core,
    ...primitiveShapes,
    ...ioBrowser,
    ...stars,
    ...shapePaths,
    ...containers,
    ...helpers,
    ...pathTransforms,
    ...parsePAthData,
};

declare global {
    interface Window {
        mzSVG: typeof api,
    }
}

window.mzSVG = window.mzSVG || api;

export * from './main/core';
export * from './main/shapes/primitive-shapes';
export * from './main/io-browser';
export * from './main/shapes/star-shapes';
export * from './main/shapes/shape-paths';
export * from './main/containers';
export * from './main/helpers';
export * from './main/path/path-transformation';
export * from './main/path/parse-path-data';