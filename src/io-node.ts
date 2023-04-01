import { getSVGAsString } from './core';
import fs from 'fs';

const MISSING_SVG_ERR = 'Either an SVG element or an SVG string must be provided.';

/**
 * Saves SVG to file system in Node.js only.
 */
export const saveSVG = (props: {
    absOutFilePath: string, // the absolute path to the result svg file
    $svg?: SVGSVGElement,
    svgString?: string;
}) => {

    if(!props.$svg && !props.svgString){
        throw new Error(MISSING_SVG_ERR);
    }

    const _svgString = props.$svg ? getSVGAsString(props.$svg) : props.svgString;
    const svgString = `<?xml version="1.0" encoding="UTF-8"?>${ _svgString }`;

    fs.writeFileSync(props.absOutFilePath, (svgString ?? '').trim(), 'utf8');
};
