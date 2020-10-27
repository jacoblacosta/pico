export class ErrorLogger {
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