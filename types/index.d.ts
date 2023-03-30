declare const api: {
    vSum: () => void;
};
declare global {
    interface Window {
        mzSVG: typeof api;
    }
}
export * from './vector';
