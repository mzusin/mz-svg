import * as core from './core';
import * as primitiveShapes from './shapes/primitive-shapes';
import * as stars from './shapes/star-shapes';
import * as ioBrowser from './io-browser';

const api = {
    ...core,
    ...primitiveShapes,
    ...ioBrowser,
    ...stars,
};

declare global {
    interface Window {
        mzSVG: typeof api,
    }
}

window.mzSVG = window.mzSVG || api;

export * from './core';
export * from './shapes/primitive-shapes';
export * from './io-browser';
export * from './shapes/star-shapes';