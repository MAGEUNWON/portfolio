"use strict";
exports.__esModule = true;
var fs = require("fs");
var http = require("http");
// const fs = require("fs");
// const http = require("http");
// import { Planet } from "./static/ts/components/components";
var server = http.createServer(function (req, res) {
    var main = fs.readFileSync("public/index.html");
    var indexCss = fs.readFileSync("static/css/index.css");
    var PlanetImg = fs.readFileSync("static/img/geunwonPlanet.png");
    var universeImg = fs.readFileSync("static/img/universeBg.png");
    var indexJs = fs.readFileSync("compileJs/index.js");
    if (req.method === "GET") {
        if (req.url === "/") {
            console.log("html");
            res.writeHead(200, { "content-Type": "text/html; charset=utf8" });
            res.write(main);
            res.end();
        }
        else if (req.url === "/static/css/index.css") {
            console.log("css");
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(indexCss);
            res.end();
        }
        else if (req.url === "/static/img/geunwonPlanet.png") {
            console.log("png");
            res.writeHead(200, { "Content-Type": "image/png" });
            // res.write(PlanetImg);
            res.end(PlanetImg);
        }
        else if (req.url === "/static/img/universeBg.png") {
            console.log("png");
            res.writeHead(200, { "Content-Type": "image/png" });
            // res.write(universeImg);
            res.end(universeImg);
        }
        else if (req.url === "/static/ts/index.js") {
            console.log("js");
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.write(indexJs);
            res.end();
        }
        else if (req.url === "/Planet") {
            // console.log("pp");
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            // return res.end(JSON.stringify("근원이 행성"));
            res.end("근원이 행성");
        }
    }
});
server.listen(3050, function (err) {
    if (err)
        throw err;
    console.log("'http://localhost:3050' \uC5D0\uC11C \uC11C\uBC84\uAC00 \uC2E4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4!");
});
// planet?.addEventListener('click', ()=>{
// })
