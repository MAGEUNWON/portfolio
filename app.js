"use strict";
exports.__esModule = true;
var fs = require("fs");
var http = require("http");
// import fs_promise from "fs/promises";
// const fs = require('fs').promises
// const fs = require("fs");
// const http = require("http");
// import { Planet } from "./static/ts/components/components";
// const server = http.createServer(async (req, res) => {
//   try {
//     if (req.method === "GET") {
//       if (req.url === "/") {
//         console.log("html");
//         const main = await fs.readFile("public/index.html");
//         res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//         res.end(main);
//       } else if (req.url === "static/css/index.css") {
//         console.log("css");
//         const indexCss = await fs.readFile("static/css/index.css");
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.end(indexCss);
//       } else if (req.url === "static/img/geunwonPlanet.png") {
//         // console.log("png");
//         const PlanetImg = await fs.readFile("static/img/geunwonPlanet.png");
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.end(PlanetImg);
//       } else if (req.url === "static/img/universeBg.png") {
//         // console.log("png");
//         const universeImg = await fs.readFile("static/img/universeBg.png");
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.end(universeImg);
//       } else if (req.url === "compileJs/index.js") {
//         console.log("js");
//         const indexJs = await fs.readFile("compileJs/index.js");
//         res.writeHead(200, { "Content-Type": "text/javascript" });
//         res.end(indexJs);
//       } else if (req.url === "/Planet") {
//         // console.log("pp");
//         res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//         // return res.end(JSON.stringify("근원이 행성"));
//         res.end("근원이 행성");
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });
// server.listen(3050, (err?: ErrorCallback) => {
//   if (err) throw err;
//   console.log(`'http://localhost:3050' 에서 서버가 실행되고 있습니다!`);
// });
var server = http.createServer(function (req, res) {
    var main = fs.readFileSync("public/index.html");
    var Planet = fs.readFileSync("static/html/Planet.html");
    var indexCss = fs.readFileSync("static/css/index.css");
    var PlanetCss = fs.readFileSync("static/css/Planet.css");
    var PlanetImg = fs.readFileSync("static/img/geunwonPlanet.png");
    var universeImg = fs.readFileSync("static/img/universeBg.png");
    var PlanetBg = fs.readFileSync("static/img/PlanetBg.png");
    var HillBg = fs.readFileSync("static/img/HillBg.jpg");
    var indexJs = fs.readFileSync("compileJs/index.js");
    var PlanetJs = fs.readFileSync("compileJs/components/Planet.js");
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
        else if (req.url === "/compileJs/index.js") {
            console.log("js");
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.write(indexJs);
            res.end();
        }
        else if (req.url === "/Planet") {
            console.log("근원이 행성");
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            // return res.end(JSON.stringify("근원이 행성"));
            res.end(Planet);
        }
        else if (req.url === "/static/css/Planet.css") {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(PlanetCss);
        }
        else if (req.url === "/static/img/PlanetBg.png") {
            res.writeHead(200, { "Content-Type": "image/png" });
            res.end(PlanetBg);
        }
        else if (req.url === "/static/img/HillBg.jpg") {
            res.writeHead(200, { "Content-Type": "image/jpg" });
            res.end(HillBg);
        }
        else if (req.url === "/compileJs/components/Planet.js") {
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(PlanetJs);
        }
    }
});
server.listen(3050, function (err) {
    if (err)
        throw err;
    console.log("'http://localhost:3050' \uC5D0\uC11C \uC11C\uBC84\uAC00 \uC2E4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4!");
});