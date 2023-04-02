/**
 * Saves SVG to file system in Node.js only.
 */
export declare const saveSVG: (props: {
    absOutFilePath: string;
    $svg?: SVGSVGElement;
    svgString?: string;
}) => void;
