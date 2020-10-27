class ErrorLogger {
    constructor() {
        window.addEventListener('unhandledrejection', function(promiseRejectionEvent) {
            document.body.innerText = promiseRejectionEvent.reason.toString() + '\n' + promiseRejectionEvent.reason.stack.toString();
            document.body.innerHTML = '<h1>unhandled rejection</h1>' + document.body.innerHTML;
        });

        window.onerror = function (message, source, lineNo, columnNo, error) {
            document.body.innerText = message.toString() + '\n' + source.toString() + '\n' + lineNo.toString() + '\n' + columnNo.toString()  + '\n' + error.toString() ;
            document.body.innerHTML = '<h1>error</h1>' + document.body.innerHTML;
        }
    }
}
ErrorLogger.singleton = new ErrorLogger();

async function pause(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
async function loadDeferred() {
    const $prebundledDeferredLoaderText = document.getElementById('prebundled-deferred-loader-text');
    const $prebundledDeferredLoader = document.getElementById('prebundled-deferred-loader');
    await pause(10);
    $prebundledDeferredLoader.classList.add('show');
    let deflatedBase64 = '';
    for (let chunkIdx = 0; chunkIdx < prebundled.chunksCount; chunkIdx++) {
        $prebundledDeferredLoaderText.innerText = `Loading chunk ${chunkIdx + 1} of ${prebundled.chunksCount}...`;
        let fetchResult = await fetch(`/deferred_chunk${chunkIdx}.txt`);
        let deflatedChunkBase64 = await fetchResult.text();
        deflatedBase64 += deflatedChunkBase64;
    };
    const $prebundled = document.getElementById('prebundled');
    $prebundled.remove();

    const deflatedBinaryAsText = atob(deflatedBase64);
    var deflatedBinaryData = new Array(deflatedBinaryAsText.length);
    for (i = 0; i < deflatedBinaryAsText.length; i++) {
        deflatedBinaryData[i] = deflatedBinaryAsText.charCodeAt(i);
    }
    var inflate = new Zlib.Inflate(deflatedBinaryData);
    var decompress = inflate.decompress();
    var deferredHtml = new TextDecoder("utf-8").decode(decompress);
    const $deferred = document.getElementById('deferred');
    $deferred.innerHTML = deferredHtml;
    const $deferredAutorun = document.getElementById('deferred-autorun');
    //eval($deferredAutorun.text); // to emulate static script autorun behaviour
    $deferredAutorun.remove();
    const $newDeferredAutorun = document.createElement("script");
    $newDeferredAutorun.id = 'deferred-autorun-recreated';
    $newDeferredAutorun.text = $deferredAutorun.text;
    document.body.appendChild($newDeferredAutorun);
}
loadDeferred();