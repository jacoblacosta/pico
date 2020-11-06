export class ErrorLogger {
    constructor() {
        window.addEventListener('unhandledrejection', function(promiseRejectionEvent) {
            document.body.indoorText = promiseRejectionEvent.reason.toString() + '\n' + promiseRejectionEvent.reason.stack.toString();
            document.body.indoorHTML = '<h1>unhandled rejection</h1>' + document.body.indoorHTML;
        });

        window.onerror = function (message, source, lineNo, columnNo, error) {
            document.body.indoorText = message.toString() + '\n' + source.toString() + '\n' + lineNo.toString() + '\n' + columnNo.toString()  + '\n' + error.toString() ;
            document.body.indoorHTML = '<h1>error</h1>' + document.body.indoorHTML;
        }
    }
}
ErrorLogger.singleton = new ErrorLogger();