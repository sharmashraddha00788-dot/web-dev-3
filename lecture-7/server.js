const http = require("http");

const users=[
    {id:101,name:"John", age:30 , email:"john@example.com"},
    {id:102, name:"Jane", age:25, email:"jane@example.com"},
    {id:103, name:"Bob", age:35, email:"bob@example.com" }
]


const server=http.createServer((req, res)=>{
    console.log(req.url);
    console.log(req.headers);
    if(req.url=="/"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");
    res.end();
}else if(req.url=="/about"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>About Page</h1>");
    res.end();
}else if(req.url=="/contact"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Contact Page</h1>");
    res.end();
}else if(req.url=="/api/users"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write(JSON.stringify(users));
    res.end();
}else{
    res.writeHead(404, {"Content-Type":"text/html"});
    res.write("<h1>Page not found</h1>");
    res.end();
}
})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
});