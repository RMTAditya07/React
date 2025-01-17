// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const http = require('http');
const url=require('url')
const path=require('path')
const fs=require('fs')

const mimeTypes={
  "html":"text/html",
  "jpeg":"image/jpeg",
  "jpg":"image/jpg",
  "png":"image/png",
  "js":"text/javascript",
  "css":"text/css"
}

http.createServer(function(req,res){
  var uri=url.parse(req.url).pathname
  var fileName=path.join(process.cwd(),unescape(uri))
  console.log('loading'+uri)
  var stats;
  try{
    stats=fs.lstateSync(fileName)
  }catch(e){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('404 not found\n')
    res.end()
    return
  }
  if(stats.isFile()){
    var mimeType = mimeTypes[path.extname(fileName).split("."),reverse()[0]]  
    res.writeHead(200,{'Content-Type':mimeType})

    var fileStream=fs.createReadStream(fileName)
    fileStream.pipe(res)
  }else if(stats.isDirectory()){
    res.writeHead(302,{
      'Location':'index.html'
    })
    res.end()
  }else{
    res.writeHead(500,{'Content-Type':'text/plain'})
    res.write('500 internal error\n')
    res.end()
  }
}).listen(3000);