import { createSVGFromString, getSVGAsString } from './core';

const MISSING_SVG_ERR = 'Either an SVG element or an SVG string must be provided.';

const formatExt = (ext?: string) : string => {
    if(!ext || !ext.trim()) return 'svg';

    return ext.trim().toLowerCase();
};

/**
 * Download file in browser environment.
 */
export const download = (props: {
    $svg?: SVGSVGElement,
    svgString?: string;
    outfileName?: string;
    ext?: string; // svg, png, jpg, jpeg
}) => {
    return new Promise<{
        isError: boolean;
        msg?: string;
    }>((resolve, reject) => {
        if(!props.$svg && !props.svgString){
            reject({
                isError: true,
                msg: MISSING_SVG_ERR,
            });
            return;
        }

        const _svgString = props.$svg ? getSVGAsString(props.$svg) : props.svgString;
        const svgString = `<?xml version="1.0" encoding="UTF-8"?>${ _svgString }`;

        const formattedExt = formatExt(props.ext);

        if(formattedExt === 'svg'){

            const blob = new Blob([svgString], {type : 'text/plain'});
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.title = '';
            link.download = props.outfileName || 'out.svg';
            link.click();

            URL.revokeObjectURL(url);
            resolve({
                isError: false,
            });
        }
        else{
            const $svg = props.$svg || createSVGFromString({
                svg: props.svgString || '',
            });

            const $canvas = document.createElement('canvas');
            $canvas.width = $svg.width.baseVal.value;
            $canvas.height = $svg.height.baseVal.value;

            const ctx = $canvas.getContext('2d');
            if(!ctx){
                reject({
                    isError: true,
                });
                return;
            }

            const data = (new XMLSerializer()).serializeToString($svg);
            const blob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
            const url = URL.createObjectURL(blob);

            const $img = new Image();
            $img.onload = () => {
                ctx.clearRect(0, 0, $canvas.width, $canvas.height);
                ctx.drawImage($img, 0, 0);

                URL.revokeObjectURL(url);

                $canvas.toBlob(cBlob => {

                    if(!cBlob){
                        resolve({
                            isError: true,
                        });
                        return;
                    }

                    const cUrl = URL.createObjectURL(cBlob);
                    const link = document.createElement('a');
                    link.href = cUrl;
                    link.title = '';
                    link.download = props.outfileName || 'out.svg';
                    link.click();

                    URL.revokeObjectURL(cUrl);

                    resolve({
                        isError: false,
                    });
                });
            };

            $img.onerror = () => {
                resolve({
                    isError: true,
                });
            };

            $img.src = url;
        }
    });
};