import * as core from './core';
import * as primitiveShapes from './primitive-shapes';
import * as ioBrowser from './io-browser';

const api = {
    ...core,
    ...primitiveShapes,
    ...ioBrowser,
};

declare global {
    interface Window {
        mzSVG: typeof api,
    }
}

window.mzSVG = window.mzSVG || api;

export * from './core';
export * from './primitive-shapes';
export * from './io-browser';