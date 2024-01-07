const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page of our website');
        return;
    }
    if(req.url === '/about'){
        res.end('Welcome to about page');
        return;
    }
    res.end(`
        <h1>Oops! Something went wrong.</h1>
    `)
})

server.listen(5000);