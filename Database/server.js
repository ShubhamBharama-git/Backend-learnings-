const express = require("express")
const connectToDB = require("./db/db.js")

const app = express();

connectToDB();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("i am working here.")
})

app.listen(3000, () => {
    console.log("server is running on port 3000...!")
})