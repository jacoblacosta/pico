const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const browserify = require('browserify');
const babelify = require('babelify');

async function streamToString(stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('error', reject);
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
  };


const bundleConfig = require('./bundle-config.json');
const picochipVersion = require('../picochip-emulator/package.json').version;
const picofaceVersion = require('./package.json').version;

async function rebundleDeferred() {
    let deferredTemplateText = fs.readFileSync(path.join(__dirname, bundleConfig.deferredTemplatePath)).toString();

    let deferredStylesText = '\n';
    bundleConfig.deferredStylePathes.forEach(stylePath => {
        let styleText = fs.readFileSync(path.join(__dirname, stylePath)).toString();
        deferredStylesText += `/* DEFERRED BUNDLE PART: ${stylePath} */`;
        deferredStylesText += '\n';
        deferredStylesText += styleText;
        deferredStylesText += '\n';
    });

    //let deferredSourcesText = '\n';
    const deferredBundler = browserify({debug: true});


    bundleConfig.deferredSourcePathes.forEach(sourcePath => {
        //let sourceText = fs.readFileSync(path.join(__dirname, sourcePath)).toString();
        //deferredSourcesText += `/* DEFERRED BUNDLE PART: ${sourcePath} */`;
        //deferredSourcesText += '\n';
        //deferredSourcesText += sourceText;
        //deferredSourcesText += '\n';
        deferredBundler.add(path.join(__dirname, sourcePath));
    });
    const presetEnv = require('@babel/preset-env');
    const pluginClassProp = require('@babel/plugin-proposal-class-properties');
    const pluginTransformRuntime = require('@babel/plugin-transform-runtime');


    deferredBundler.transform(babelify, {presets: [presetEnv], plugins: [pluginClassProp, pluginTransformRuntime]});
    const deferredBundleReadable = deferredBundler.bundle();
    const deferredSourcesText = await streamToString(deferredBundleReadable);
    deferredTemplateText = deferredTemplateText.split('/* template:style */').join(deferredStylesText);
    deferredTemplateText = deferredTemplateText.split('/* template:source */').join(deferredSourcesText);

    const deflatedDeferredBuffer = zlib.deflateSync(deferredTemplateText);
    const deflatedDeferredBase64 = deflatedDeferredBuffer.toString('base64');
    const chunksCount = Math.ceil(deflatedDeferredBase64.length / bundleConfig.chunkSize);
    for (let chunkIdx = 0; chunkIdx < chunksCount; chunkIdx++) {
        const deflatedDeferredChunkBase64 = deflatedDeferredBase64.slice(chunkIdx * bundleConfig.chunkSize, (chunkIdx + 1) * bundleConfig.chunkSize);
        fs.writeFileSync(path.join(__dirname, bundleConfig.outputDirPath, `deferred_chunk${chunkIdx}.txt`), deflatedDeferredChunkBase64);
    };
    return chunksCount;
}

function rebundleIndex(chunksCount, picochipVersion, picofaceVersion) {
    let indexTemplateText = fs.readFileSync(path.join(__dirname, bundleConfig.indexTemplatePath)).toString();

    indexTemplateText = indexTemplateText.split('/* template:chunks-count */').join(chunksCount);
    indexTemplateText = indexTemplateText.split('/* template:picochip-version */').join(picochipVersion);
    indexTemplateText = indexTemplateText.split('/* template:picoface-version */').join(picofaceVersion);


    let prebundledSourcesText = '\n';
    bundleConfig.prebundledSourcePathes.forEach(sourcePath => {
        let prebundledSourceText = fs.readFileSync(path.join(__dirname, sourcePath)).toString();
        prebundledSourcesText += `/* PREBUNDLE PART: ${sourcePath} */`;
        prebundledSourcesText += '\n';
        prebundledSourcesText += prebundledSourceText;
        prebundledSourcesText += '\n';
    });

    indexTemplateText = indexTemplateText.split('/* template:prebundled-source */').join(prebundledSourcesText);

    let prebundledDeferredLoaderSourceText = fs.readFileSync(path.join(__dirname, bundleConfig.prebundledDeferredLoaderSourcePath)).toString();;
    indexTemplateText = indexTemplateText.split('/* template:prebundled-deferred-loader-source */').join(prebundledDeferredLoaderSourceText);


    indexTemplateText = indexTemplateText.replace(/  +/g, '');


    fs.writeFileSync(path.join(__dirname, bundleConfig.outputDirPath, bundleConfig.indexFileName), indexTemplateText);
}

async function rebundle() {
    const chunksCount = await rebundleDeferred();
    await rebundleIndex(chunksCount, picochipVersion, picofaceVersion);
    console.log(`Rebundled deferred in ${chunksCount} chunks per ${bundleConfig.chunkSize}`);
}

rebundle().catch((err)=> {
    console.error(err);
    throw err;
});