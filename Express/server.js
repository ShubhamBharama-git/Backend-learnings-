// ExpressJs -> It is the most popular nodejs web application framework designed for building 
// web application and APIs

const express = require("express");

// 1.create server 
const app = express();


// 3.sending response to server
app.get("/home", (req, res) => {
    res.send("On home route.");
})

app.get("/about", (req, res) => {
    res.send("On about section..............");
})

// 2.start server
app.listen(3000, () => {
    console.log("Server is running on 3000...!");
})