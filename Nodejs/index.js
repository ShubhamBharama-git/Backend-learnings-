// Nodejs -> 
// - js runtime env
// - runs js code  outside the browser
// - this is built on chromes v8 engine 

// Packages -> reusable peace of code 
// module -> built in packages from node js 

// servers ✅


const http = require("http");

// create server 
const server = http.createServer((req, res) => {
    res.end("Port is runing on server!");
});

// start server 
server.listen(3000, () => {
    console.log("server is runing on port : 3000");
})