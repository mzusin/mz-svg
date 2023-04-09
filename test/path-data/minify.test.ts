import { parsePath } from '../../src/index-esm';
import { pathDataMinify } from '../../src/main/path/minify';

describe('Path Data Minify', () => {

    test('Empty path', () => {
        const parsed = parsePath('')
        expect(pathDataMinify(parsed)).toStrictEqual('');
    });

    test('M 10 10 L 100 100', () => {
        const parsed = parsePath('M 10 10 L 100 100')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 100 100');
    });

    test('M 10 10 L 50 50 L 90 50', () => {
        const parsed = parsePath('M 10 10 L 50 50 L 90 50')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50 90 50');
    });

    test('M 10 10 L 50 50 m 0 0 l -20 10 l 10 10', () => {
        const parsed = parsePath('M 10 10 L 50 50 m 0 0 l -20 10 l 10 10')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50m0 0 -20 10 10 10');
    });

    test('M 10 10 L 50 50 V 10 V 10 V 10 z', () => {
        const parsed = parsePath('M 10 10 L 50 50 V 10 V 10 V 10 z')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50V10 10 10z');
    });

    test('M 10 10 L 50 50 v 10 v 10 v 10 z', () => {
        const parsed = parsePath('M 10 10 L 50 50 v 10 v 10 v 10 z')
        expect(pathDataMinify(parsed)).toStrictEqual('M10 10 50 50v10 10 10z');
    });

    test('M 0.100 0.252625 L 1.180000 12.999999', () => {
        const parsed = parsePath('M 0.100 0.252625 L 1.180000 12.999999')
        expect(pathDataMinify(parsed)).toStrictEqual('M.1 .25 1.18 13');
    });

    test('M -0.100 -0.252625 L -1.180000 -12.999999', () => {
        const parsed = parsePath('M -0.100 -0.252625 L -1.180000 -12.999999')
        expect(pathDataMinify(parsed)).toStrictEqual('M-.1 -.25 -1.18 -13');
    });

    test('M -0.100 -0.252625 L -1.180000 -12.999999', () => {
        const parsed = parsePath('M -0.100 -0.252625 L -1.180000 -12.999999')
        expect(pathDataMinify(parsed)).toStrictEqual('M-.1 -.25 -1.18 -13');
    });

    test('Long path 1', () => {
        const parsed = parsePath(`M233.51,56.8C232.94,57.04,232.17999999999998,57.32,231.23,57.66C230.28,57.989999999999995,229.29999999999998,58.16,228.31,58.16S226.47,57.88999999999999,225.78,57.339999999999996C225.09,56.79,224.75,55.849999999999994,224.75,54.519999999999996V36.25H232.6V28.9H224.75V16.77H215.19V28.9H197.35V16.77H187.79V28.9H182.87V36.25H187.79V57.730000000000004C187.79,59.400000000000006,188.04999999999998,60.81,188.57999999999998,61.980000000000004C189.1,63.150000000000006,189.79999999999998,64.10000000000001,190.67999999999998,64.83C191.55999999999997,65.57,192.57999999999998,66.1,193.74999999999997,66.44C194.90999999999997,66.77,196.15999999999997,66.94,197.49999999999997,66.94C199.54999999999998,66.94,201.49999999999997,66.66,203.34999999999997,66.08C205.20999999999998,65.51,206.76999999999995,64.94,208.05999999999997,64.37L206.12999999999997,56.81C205.55999999999997,57.050000000000004,204.79999999999995,57.330000000000005,203.84999999999997,57.67C202.89999999999998,58,201.91999999999996,58.17,200.92999999999998,58.17C199.92999999999998,58.17,199.08999999999997,57.9,198.39999999999998,57.35C197.70999999999998,56.800000000000004,197.36999999999998,55.86,197.36999999999998,54.53V36.25H215.20999999999998V57.730000000000004C215.20999999999998,59.400000000000006,215.46999999999997,60.81,215.99999999999997,61.980000000000004C216.51999999999998,63.150000000000006,217.21999999999997,64.10000000000001,218.09999999999997,64.83C218.97999999999996,65.57,219.99999999999997,66.1,221.16999999999996,66.44C222.32999999999996,66.77,223.57999999999996,66.94,224.91999999999996,66.94C226.96999999999997,66.94,228.91999999999996,66.66,230.76999999999995,66.08C232.62999999999997,65.51,234.18999999999994,64.94,235.47999999999996,64.37L233.51,56.8Z`)
        expect(pathDataMinify(parsed)).toStrictEqual(`M233.51 56.8C232.94 57.04 232.18 57.32 231.23 57.66 230.28 57.99 229.3 58.16 228.31 58.16S226.47 57.89 225.78 57.34C225.09 56.79 224.75 55.85 224.75 54.52V36.25H232.6V28.9H224.75V16.77H215.19V28.9H197.35V16.77H187.79V28.9H182.87V36.25H187.79V57.73C187.79 59.4 188.05 60.81 188.58 61.98 189.1 63.15 189.8 64.1 190.68 64.83 191.56 65.57 192.58 66.1 193.75 66.44 194.91 66.77 196.16 66.94 197.5 66.94 199.55 66.94 201.5 66.66 203.35 66.08 205.21 65.51 206.77 64.94 208.06 64.37L206.13 56.81C205.56 57.05 204.8 57.33 203.85 57.67 202.9 58 201.92 58.17 200.93 58.17 199.93 58.17 199.09 57.9 198.4 57.35 197.71 56.8 197.37 55.86 197.37 54.53V36.25H215.21V57.73C215.21 59.4 215.47 60.81 216 61.98 216.52 63.15 217.22 64.1 218.1 64.83 218.98 65.57 220 66.1 221.17 66.44 222.33 66.77 223.58 66.94 224.92 66.94 226.97 66.94 228.92 66.66 230.77 66.08 232.63 65.51 234.19 64.94 235.48 64.37L233.51 56.8Z`);
    });

    test('Long path 2', () => {
        const parsed = parsePath(`M233.51,56.8c-0.57,0.24,-1.33,0.52,-2.28,0.86c-0.95,0.33,-1.93,0.5,-2.92,0.5s-1.84,-0.27,-2.53,-0.82c-0.69,-0.55,-1.03,-1.49,-1.03,-2.82v-18.27h7.85v-7.35h-7.85v-12.13h-9.56v12.13h-17.84v-12.13h-9.56v12.13h-4.92v7.35h4.92v21.48c0,1.67,0.26,3.08,0.79,4.25c0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5c2.05,0,4,-0.28,5.85,-0.86c1.86,-0.57,3.42,-1.14,4.71,-1.71l-1.93,-7.56c-0.57,0.24,-1.33,0.52,-2.28,0.86c-0.95,0.33,-1.93,0.5,-2.92,0.5c-1,0,-1.84,-0.27,-2.53,-0.82c-0.69,-0.55,-1.03,-1.49,-1.03,-2.82v-18.28h17.84v21.48c0,1.67,0.26,3.08,0.79,4.25c0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5c2.05,0,4,-0.28,5.85,-0.86c1.86,-0.57,3.42,-1.14,4.71,-1.71l-1.97,-7.57z`)
        expect(pathDataMinify(parsed)).toStrictEqual(`M233.51 56.8c-.57 .24 -1.33 .52 -2.28 .86 -.95 .33 -1.93 .5 -2.92 .5s-1.84 -.27 -2.53 -.82c-.69 -.55 -1.03 -1.49 -1.03 -2.82v-18.27h7.85v-7.35h-7.85v-12.13h-9.56v12.13h-17.84v-12.13h-9.56v12.13h-4.92v7.35h4.92v21.48c0 1.67 .26 3.08 .79 4.25 .52 1.17 1.22 2.12 2.1 2.85 .88 .74 1.9 1.27 3.07 1.61 1.16 .33 2.41 .5 3.75 .5 2.05 0 4 -.28 5.85 -.86 1.86 -.57 3.42 -1.14 4.71 -1.71l-1.93 -7.56c-.57 .24 -1.33 .52 -2.28 .86 -.95 .33 -1.93 .5 -2.92 .5 -1 0 -1.84 -.27 -2.53 -.82 -.69 -.55 -1.03 -1.49 -1.03 -2.82v-18.28h17.84v21.48c0 1.67 .26 3.08 .79 4.25 .52 1.17 1.22 2.12 2.1 2.85 .88 .74 1.9 1.27 3.07 1.61 1.16 .33 2.41 .5 3.75 .5 2.05 0 4 -.28 5.85 -.86 1.86 -.57 3.42 -1.14 4.71 -1.71l-1.97 -7.57z`);
    });

    test('Long path 3', () => {
        const parsed = parsePath(`M233.51,56.8c-0.57,0.24-1.33,0.52-2.28,0.86c-0.95,0.33-1.93,0.5-2.92,0.5s-1.84-0.27-2.53-0.82
\tc-0.69-0.55-1.03-1.49-1.03-2.82V36.25h7.85V28.9h-7.85V16.77h-9.56V28.9h-17.84V16.77h-9.56V28.9h-4.92v7.35h4.92v21.48
\tc0,1.67,0.26,3.08,0.79,4.25c0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5
\tc2.05,0,4-0.28,5.85-0.86c1.86-0.57,3.42-1.14,4.71-1.71l-1.93-7.56c-0.57,0.24-1.33,0.52-2.28,0.86c-0.95,0.33-1.93,0.5-2.92,0.5
\tc-1,0-1.84-0.27-2.53-0.82c-0.69-0.55-1.03-1.49-1.03-2.82V36.25h17.84v21.48c0,1.67,0.26,3.08,0.79,4.25
\tc0.52,1.17,1.22,2.12,2.1,2.85c0.88,0.74,1.9,1.27,3.07,1.61c1.16,0.33,2.41,0.5,3.75,0.5c2.05,0,4-0.28,5.85-0.86
\tc1.86-0.57,3.42-1.14,4.71-1.71L233.51,56.8z`)
        expect(pathDataMinify(parsed)).toStrictEqual(`M233.51 56.8c-.57 .24 -1.33 .52 -2.28 .86 -.95 .33 -1.93 .5 -2.92 .5s-1.84 -.27 -2.53 -.82c-.69 -.55 -1.03 -1.49 -1.03 -2.82V36.25h7.85V28.9h-7.85V16.77h-9.56V28.9h-17.84V16.77h-9.56V28.9h-4.92v7.35h4.92v21.48c0 1.67 .26 3.08 .79 4.25 .52 1.17 1.22 2.12 2.1 2.85 .88 .74 1.9 1.27 3.07 1.61 1.16 .33 2.41 .5 3.75 .5 2.05 0 4 -.28 5.85 -.86 1.86 -.57 3.42 -1.14 4.71 -1.71l-1.93 -7.56c-.57 .24 -1.33 .52 -2.28 .86 -.95 .33 -1.93 .5 -2.92 .5 -1 0 -1.84 -.27 -2.53 -.82 -.69 -.55 -1.03 -1.49 -1.03 -2.82V36.25h17.84v21.48c0 1.67 .26 3.08 .79 4.25 .52 1.17 1.22 2.12 2.1 2.85 .88 .74 1.9 1.27 3.07 1.61 1.16 .33 2.41 .5 3.75 .5 2.05 0 4 -.28 5.85 -.86 1.86 -.57 3.42 -1.14 4.71 -1.71L233.51 56.8z`);
    });

});