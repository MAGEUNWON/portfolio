"use strict";
exports.__esModule = true;
var fs = require("fs");
var http = require("http");
var server = http.createServer(function (req, res) {
    var main = fs.readFileSync('./public/index.html');
    var indexCss = fs.readFileSync('./css/index.css');
    var PlanetImg = fs.readFileSync('./img/geunwonPlanet.png');
    var universeImg = fs.readFileSync('./img/universeBg.png');
    var indexJs = fs.readFileSync('./index.js');
    if (req.method === "GET") {
        if (req.url === "/") {
            console.log("html");
            res.writeHead(200, { 'content-Type': 'text/html; charset=utf8' });
            res.write(main);
            res.end();
        }
        else if (req.url === "/css/index.css") {
            console.log("css");
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(indexCss);
            res.end();
        }
        else if (req.url === "/img/geunwonPlanet.png") {
            console.log("png");
            res.writeHead(200, { "Content-Type": "image/png" });
            res.write(PlanetImg);
            res.end();
        }
        else if (req.url === "/img/universeBg.png") {
            console.log("png");
            res.writeHead(200, { "Content-Type": "image/png" });
            res.write(universeImg);
            res.end();
        }
        else if (req.url === "/index.js") {
            console.log("js");
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.write(indexJs);
            res.end();
        }
    }
});
server.listen(3050, function (err) {
    if (err)
        throw err;
    console.log("3050\uC5D0\uC11C \uC11C\uBC84\uAC00 \uC2E4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4!");
});
// planet?.addEventListener('click', ()=>{
// })
