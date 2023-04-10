import * as core from './main/core';
import * as primitiveShapes from './main/shapes/primitive-shapes';
import * as stars from './main/shapes/stars';
import * as flowers from './main/shapes/flowers';
import * as shapePaths from './main/shapes/shape-paths';
import * as containers from './main/containers';
import * as ioBrowser from './main/io-browser';
import * as helpers from './main/helpers';
import * as pathTransforms from './main/path';

const api = {
    ...core,
    ...primitiveShapes,
    ...ioBrowser,
    ...stars,
    ...flowers,
    ...shapePaths,
    ...containers,
    ...helpers,
    ...pathTransforms,
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
export * from './main/shapes/stars';
export * from './main/shapes/flowers';
export * from './main/shapes/shape-paths';
export * from './main/containers';
export * from './main/helpers';
export * from './main/path';