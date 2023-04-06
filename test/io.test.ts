import {
    saveSVG,
} from '../src/index-node';
import * as path from 'path';
import * as fs from 'fs';

// @ts-ignore
// const __dirname = dirname(fileURLToPath(import.meta.url));

describe('Core: saveSVG', () => {

    test('saveSVG from SVG string', () => {

        const svgString = `
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cy="50" cx="50" r="45" />
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>`;

        const absOutFilePath = path.join(__dirname, './test.svg');

        if (fs.existsSync(absOutFilePath)) {
            fs.unlinkSync(absOutFilePath);
        }

        saveSVG({
            absOutFilePath,
            svgString,
        });

        expect(fs.existsSync(absOutFilePath)).toBeTruthy();
    });
});

