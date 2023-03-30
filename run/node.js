import esbuild from 'esbuild';
import { settings } from './settings.js';
import esbuildWatchPlugin from './esbuild-plugins/esbuild-watch-plugin.js';

const args = process.argv.slice(2);
const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

settings.platform = 'node';
settings.entryPoints = ['./src/index-esm.ts'];
settings.outfile = './dist/mz-svg.node.cjs';

if(watch){
    // ------------- watch ---------------
    (async () => {
        settings.plugins = [esbuildWatchPlugin];
        const ctx = await esbuild.context(settings);
        await ctx.watch();
        console.log('Watching...');
    })();
}
else{
    esbuild
        .build(settings)
        .then(result => {
            console.log('Done.');
        })
        .catch(() => process.exit(1));
}


