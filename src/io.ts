import { getSVGAsString } from './core';
import fs from 'fs';

/**
 * Saves SVG to file system in Node.js only.
 */
export const saveSVG = (props: {
    absOutFilePath: string, // the absolute path to the result svg file
    $svg?: SVGSVGElement,
    svgString?: string;
}) => {

    if(!props.$svg && !props.svgString){
        throw new Error('Either an SVG element or an SVG string must be provided.')
    }

    const _svgString = props.$svg ? getSVGAsString(props.$svg) : props.svgString;
    const svgString = `<?xml version="1.0" encoding="UTF-8"?>${ _svgString }`;

    fs.writeFileSync(props.absOutFilePath, (svgString ?? '').trim(), 'utf8');
};