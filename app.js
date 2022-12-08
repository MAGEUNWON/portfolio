"use strict";
exports.__esModule = true;
var fs = require("fs");
var http = require("http");
var server = http.createServer(function (req, res) {
    // const main = fs.readFileSync('./index.html')
    var main = fs.readFile('./index.html', 'utf-8', function (err, data) {
        if (err)
            throw err;
    });
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf8' });
    res.end(main);
});
server.listen(3050, function (err) {
    if (err)
        throw err;
    console.log("3050\uC5D0\uC11C \uC11C\uBC84\uAC00 \uC2E4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4!");
});
// planet?.addEventListener('click', ()=>{
// })
