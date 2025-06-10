import http from "http";

const PORT = 5001;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');

    res.end('<h1>Sup Dawg</h1>');
})

server.listen(PORT, ()=>{
    console.log("The server is listening");
})