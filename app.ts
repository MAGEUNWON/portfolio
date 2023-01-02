import * as fs from "fs";
import * as http from "http";
import { Planet } from "./static/ts/components/components";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const main = fs.readFileSync("./public/index.html");

    const indexCss = fs.readFileSync("./static/css/index.css");

    const PlanetImg = fs.readFileSync("./static/img/geunwonPlanet.png");

    const universeImg = fs.readFileSync("./static/img/universeBg.png");

    const indexJs = fs.readFileSync("./static/ts/index.js");

    if (req.method === "GET") {
      if (req.url === "/") {
        console.log("html");
        res.writeHead(200, { "content-Type": "text/html; charset=utf8" });
        res.write(main);
        res.end();
      } else if (req.url === "/static/css/index.css") {
        console.log("css");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(indexCss);
        res.end();
      } else if (req.url === "/static/img/geunwonPlanet.png") {
        console.log("png");
        res.writeHead(200, { "Content-Type": "image/png" });
        // res.write(PlanetImg);
        res.end(PlanetImg);
      } else if (req.url === "/static/img/universeBg.png") {
        console.log("png");
        res.writeHead(200, { "Content-Type": "image/png" });
        // res.write(universeImg);
        res.end(universeImg);
      } else if (req.url === "/static/ts/index.js") {
        console.log("js");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(indexJs);
        res.end();
      } else if (req.url === "/Planet") {
        // console.log("pp");
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        // return res.end(JSON.stringify("근원이 행성"));
        res.end("근원이 행성");
      }
    }
  }
);

server.listen(3050, (err?: ErrorCallback) => {
  if (err) throw err;
  console.log(`'http://localhost:3050' 에서 서버가 실행되고 있습니다!`);
});

// planet?.addEventListener('click', ()=>{

// })
