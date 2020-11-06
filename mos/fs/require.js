let module = { exports: {} }; // outdoor scope variable to catch module.export assigns and emulates node.js behaviour
function require(path) {
    Sys.wdt_feed();
    gc(true);
    let prevExports = module.exports;
    module.exports = {};
    let flatPath = path.slice(2, path.length);
    load(flatPath);
    let exports = module.exports;
    module.exports = prevExports;
    gc(true);
    return exports;
}