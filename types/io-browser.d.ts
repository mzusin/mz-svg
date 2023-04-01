/**
 * Download file in browser environment.
 */
export declare const download: (props: {
    $svg?: SVGSVGElement;
    svgString?: string;
    outfileName?: string;
    ext?: string;
}) => Promise<{
    isError: boolean;
    msg?: string | undefined;
}>;
