import fs from 'fs';
import path from 'path';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.0';

try {
    const parsed = JSON.parse(packageJson);
    version = parsed.version;
} catch (ex) {}

export const settings = {
    entryPoints: ['./src/index.ts'],
    bundle: true,
    sourcemap: 'linked', // external
    minify: true,
    target: ['es6'],
    outfile: './dist/mz-svg.min.js',
    banner: {
        js: `/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: ${version}
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/`,
    },
};