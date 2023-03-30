import * as core from './core';
import * as shapes from './shapes';

const api = {
    ...core,
    ...shapes,
};

declare global {
    interface Window {
        mzSVG: typeof api,
    }
}

window.mzSVG = window.mzSVG || api;

export * from './core';
export * from './shapes';