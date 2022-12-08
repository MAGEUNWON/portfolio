import * as fs from 'fs';
import * as http from 'http';


const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse)=>{
  // const main = fs.readFileSync('./index.html')
  const main = fs.readFile('./index.html', 'utf-8', (err:NodeJS.ErrnoException | null, data:string):void=>{
    if (err) throw err
  })

  res.writeHead(200, {'content-Type' : 'text/html; charset=utf8'})
  res.end(main)
})

server.listen(3050, (err?:ErrorCallback)=>{
  if(err) throw err;
  console.log(`3050에서 서버가 실행되고 있습니다!`)
})

// planet?.addEventListener('click', ()=>{

// })


