// main thread
var worker = new WebWorker("parse-json.js");
worker.onmessage = function (event) {
    var jsonData = event.data;
    evaluteData(jsonData);
}
worker.postMessage(largeJsonText);
// worker
self.onmessage = function (event) {
    var jsonText = event.data;
    var jsonData = JSON.parse(jsonText);
    self.postMessage(jsonData);
}