import * as fs from "fs";
import * as http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const main = fs.readFileSync("./public/index.html");

    const indexCss = fs.readFileSync("./css/index.css");

    const PlanetImg = fs.readFileSync("./img/geunwonPlanet.png");

    const universeImg = fs.readFileSync("./img/universeBg.png");

    const indexJs = fs.readFileSync("./index.js");

    if (req.method === "GET") {
      if (req.url === "/") {
        console.log("html");
        res.writeHead(200, { "content-Type": "text/html; charset=utf8" });
        res.write(main);
        res.end();
      } else if (req.url === "/css/index.css") {
        console.log("css");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(indexCss);
        res.end();
      } else if (req.url === "/img/geunwonPlanet.png") {
        console.log("png");
        res.writeHead(200, { "Content-Type": "image/png" });
        // res.write(PlanetImg);
        res.end(PlanetImg);
      } else if (req.url === "/img/universeBg.png") {
        console.log("png");
        res.writeHead(200, { "Content-Type": "image/png" });
        // res.write(universeImg);
        res.end(universeImg);
      } else if (req.url === "/index.js") {
        console.log("js");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(indexJs);
        res.end();
      }
    }
  }
);

server.listen(3050, (err?: ErrorCallback) => {
  if (err) throw err;
  console.log(`3050에서 서버가 실행되고 있습니다!`);
});

// planet?.addEventListener('click', ()=>{

// })
