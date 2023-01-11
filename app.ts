import * as fs from "fs";
import * as http from "http";


// interface file {
//   [key : string] : file
// }


interface readFlie {
  fileName: {
    main : Buffer;
    Planet :  Buffer;
    indexCss :  Buffer;
    PlanetCss :  Buffer;
    PlanetImg :  Buffer;
    universeImg : Buffer;
    PlanetBg :  Buffer;
    HillBg :  Buffer;
    indexJs :  Buffer;
    PlanetJs :  Buffer;
  }
} 
// 객체로 readFileSync 묶을 내용 interface로 타입 지정해줌.

//함수 만들기, 객체화 시키기(코딩 테스트 했던파일에 해본 것 있음)
const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {

    const method = req.method;
    const _url = req.url;
    // url 변수로 담아서 switch문 매개변수로 씀. 

    const File:readFlie['fileName'] = {
      main : fs.readFileSync("public/index.html"),
      Planet : fs.readFileSync("static/html/Planet.html"),
      indexCss : fs.readFileSync("static/css/index.css"),
      PlanetCss : fs.readFileSync("static/css/Planet.css"),
      PlanetImg : fs.readFileSync("static/img/geunwonPlanet.png"),
      universeImg : fs.readFileSync("static/img/universeBg.png"),
      PlanetBg : fs.readFileSync("static/img/PlanetBg.png"),
      HillBg : fs.readFileSync("static/img/HillBg.jpg"),
      indexJs : fs.readFileSync("compileJs/index.js"),
      PlanetJs : fs.readFileSync("compileJs/components/Planet.js")
    } 
    // readFileSync한 것들 객체로 묶어 둠. 

    const resSet = (statuscode: number, contentType:string, fileName:Buffer) => {
      res.writeHead(statuscode, {'Content-Type':contentType})
      // res.write(fileName)
      res.end(fileName)
    }
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



    switch(method){
      case 'GET':

        switch(_url){
          case "/":
            resSet(200, "text/html", File.main)
          break;

          case "/static/css/index.css":
            resSet(200, "text/css", File.indexCss)
          break;

          case "/static/img/geunwonPlanet.png":
            resSet(200, "image/png", File.PlanetImg)
          break;

          case "/static/img/universeBg.png":
            resSet(200, "image/png", File.universeImg)
          break;

          case "/compileJs/index.js":
            resSet(200, "text/javascript", File.indexJs)
          break;

          case "/Planet":
            resSet(200, "text/html", File.Planet)
          break;

          case "/static/css/Planet.css":
            resSet(200, "text/css", File.PlanetCss)
          break;

          case "/static/img/PlanetBg.png":
            resSet(200, "image/png", File.PlanetBg)
          break;

          case "/static/img/HillBg.jpg":
            resSet(200, "image/png", File.HillBg)
          break;

          case "/compileJs/components/Planet.js":
            resSet(200, "text/javascript", File.PlanetJs)
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
  }
);



server.listen(3050, (err?: ErrorCallback) => {
  if (err) throw err;
  console.log(`'http://localhost:3050' 에서 서버가 실행되고 있습니다!`);
});
