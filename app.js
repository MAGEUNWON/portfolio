"use strict";
exports.__esModule = true;
var fs = require("fs");
var http = require("http");
// 객체로 readFileSync 묶을 내용 interface로 타입 지정해줌.
//함수 만들기, 객체화 시키기(코딩 테스트 했던파일에 해본 것 있음)
var server = http.createServer(function (req, res) {
    var method = req.method;
    var _url = req.url;
    // url 변수로 담아서 switch문 매개변수로 씀.
    var File = {
        main: fs.readFileSync('public/index.html'),
        Planet: fs.readFileSync('static/html/Planet.html'),
        indexCss: fs.readFileSync('static/css/index.css'),
        PlanetCss: fs.readFileSync('static/css/Planet.css'),
        PlanetImg: fs.readFileSync('static/img/geunwonPlanet.png'),
        universeImg: fs.readFileSync('static/img/universeBg.png'),
        PlanetBg: fs.readFileSync('static/img/PlanetBg.png'),
        HillBg: fs.readFileSync('static/img/HillBg.jpg'),
        indexJs: fs.readFileSync('compileJs/index.js'),
        PlanetJs: fs.readFileSync('compileJs/components/Planet.js'),
        memo_green: fs.readFileSync('static/img/memo_green.png'),
        memo_yellow: fs.readFileSync('static/img/memo_yellow.png'),
        memo_pink: fs.readFileSync('static/img/memo_pink.png'),
        randomPage: fs.readFileSync('static/img/randomPage.png'),
        signInPage: fs.readFileSync('static/img/signInPage.png'),
        myInfoPage: fs.readFileSync('static/img/myInfoPage.png'),
        boardPage: fs.readFileSync('static/img/boardPage.png')
    };
    // readFileSync한 것들 객체로 묶어 둠.
    var resSet = function (statuscode, contentType, fileName) {
        res.writeHead(statuscode, { 'Content-Type': contentType });
        // res.write(fileName)
        res.end(fileName);
    };
    // 반복되는 부분 함수로 묶음.
    // const main = fs.readFileSync("public/index.html");
    // const Planet = fs.readFileSync("static/html/Planet.html");
    // const indexCss = fs.readFileSync("static/css/index.css");
    // const PlanetCss = fs.readFileSync("static/css/Planet.css");
    // const PlanetImg = fs.readFileSync("static/img/geunwonPlanet.png");
    // const universeImg = fs.readFileSync("static/img/universeBg.png");
    // const PlanetBg = fs.readFileSync("static/img/PlanetBg.png");
    // const HillBg = fs.readFileSync("static/img/HillBg.jpg");
    // const indexJs = fs.readFileSync("compileJs/index.js");
    // const PlanetJs = fs.readFileSync("compileJs/components/Planet.js");
    switch (method) {
        case 'GET':
            switch (_url) {
                case '/':
                    resSet(200, 'text/html', File.main);
                    break;
                case '/static/css/index.css':
                    resSet(200, 'text/css', File.indexCss);
                    break;
                case '/static/img/geunwonPlanet.png':
                    resSet(200, 'image/png', File.PlanetImg);
                    break;
                case '/static/img/universeBg.png':
                    resSet(200, 'image/png', File.universeImg);
                    break;
                case '/compileJs/index.js':
                    resSet(200, 'text/javascript', File.indexJs);
                    break;
                case '/Planet':
                    resSet(200, 'text/html', File.Planet);
                    break;
                case '/static/css/Planet.css':
                    resSet(200, 'text/css', File.PlanetCss);
                    break;
                case '/static/img/PlanetBg.png':
                    resSet(200, 'image/png', File.PlanetBg);
                    break;
                case '/static/img/HillBg.jpg':
                    resSet(200, 'image/png', File.HillBg);
                    break;
                case '/compileJs/components/Planet.js':
                    resSet(200, 'text/javascript', File.PlanetJs);
                    break;
                case '/static/img/memo_green.png':
                    resSet(200, 'image/png', File.memo_green);
                    break;
                case '/static/img/memo_yellow.png':
                    resSet(200, 'image/png', File.memo_yellow);
                    break;
                case '/static/img/memo_pink.png':
                    resSet(200, 'image/png', File.memo_pink);
                    break;
                case '/static/img/randomPage.png':
                    resSet(200, 'image/png', File.randomPage);
                    break;
                case '/static/img/signInPage.png':
                    resSet(200, 'image/png', File.signInPage);
                    break;
                case '/static/img/myInfoPage.png':
                    resSet(200, 'image/png', File.myInfoPage);
                    break;
                case '/static/img/boardPage.png':
                    resSet(200, 'image/png', File.boardPage);
                    break;
            }
            break;
    }
    // if (req.method === "GET") {
    //   if (req.url === "/") {
    //     console.log("html");
    //     res.writeHead(200, { "content-Type": "text/html; charset=utf8" });
    //     res.write(main);
    //     res.end();
    //   } else if (req.url === "/static/css/index.css") {
    //     console.log("css");
    //     res.writeHead(200, { "Content-Type": "text/css" });
    //     res.write(indexCss);
    //     res.end();
    //   } else if (req.url === "/static/img/geunwonPlanet.png") {
    //     console.log("png");
    //     res.writeHead(200, { "Content-Type": "image/png" });
    //     // res.write(PlanetImg);
    //     res.end(PlanetImg);
    //   } else if (req.url === "/static/img/universeBg.png") {
    //     console.log("png");
    //     res.writeHead(200, { "Content-Type": "image/png" });
    //     // res.write(universeImg);
    //     res.end(universeImg);
    //   } else if (req.url === "/compileJs/index.js") {
    //     console.log("js");
    //     res.writeHead(200, { "Content-Type": "text/javascript" });
    //     res.write(indexJs);
    //     res.end();
    //   } else if (req.url === "/Planet") {
    //     console.log("근원이 행성");
    //     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    //     // return res.end(JSON.stringify("근원이 행성"));
    //     res.end(Planet);
    //   } else if (req.url === "/static/css/Planet.css") {
    //     res.writeHead(200, { "Content-Type": "text/css" });
    //     res.end(PlanetCss);
    //   } else if (req.url === "/static/img/PlanetBg.png") {
    //     res.writeHead(200, { "Content-Type": "image/png" });
    //     res.end(PlanetBg);
    //   } else if (req.url === "/static/img/HillBg.jpg") {
    //     res.writeHead(200, { "Content-Type": "image/jpg" });
    //     res.end(HillBg);
    //   } else if (req.url === "/compileJs/components/Planet.js") {
    //     res.writeHead(200, { "Content-Type": "text/javascript" });
    //     res.end(PlanetJs);
    //   }
    // }
});
server.listen(3050, function (err) {
    if (err)
        throw err;
    console.log("'http://localhost:3050' \uC5D0\uC11C \uC11C\uBC84\uAC00 \uC2E4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4!");
});
