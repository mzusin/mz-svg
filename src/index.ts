import * as core from './main/core';
import * as primitiveShapes from './main/shapes/primitive-shapes';
import * as stars from './main/shapes/star-shapes';
import * as shapePaths from './main/shapes/shape-paths';
import * as ioBrowser from './main/io-browser';

const api = {
    ...core,
    ...primitiveShapes,
    ...ioBrowser,
    ...stars,
    ...shapePaths,
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