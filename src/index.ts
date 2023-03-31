import * as core from './core';
import * as primitiveShapes from './primitive-shapes';

const api = {
    ...core,
    ...primitiveShapes,
};

declare global {
    interface Window {
        mzSVG: typeof api,
    }
}

window.mzSVG = window.mzSVG || api;

export * from './core';
export * from './primitive-shapes';