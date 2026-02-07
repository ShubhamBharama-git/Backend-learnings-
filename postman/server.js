const express = require("express");

const app = express();

app.use(express.json());
// express.json() reads REQUEST (not response)
// It converts incoming JSON → JS object so we can use req.body
// and below we sent a data to client -> res.json({}) 


// notes => title & content from postman
let notes = [];

// create note
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.json({
        message: "notes pushed succefully",
        notes: notes
    })
})

// read note
app.get("/notes", (req, res) => {
    res.json(notes);
})

// delete note
app.delete("/notes/:index", (req, res) => {
    let index = req.params.index;
    delete notes[index];
    res.json({
        message: "note deleted succefully",
        notes: notes
    });
})

// update note
app.patch("/notes/:index", (req, res) => {
    let index = req.params.index;
    let {title, discription} = req.body;

    notes[index].title = title;
    notes[index].discription = discription;

    res.json({
        message: "note updated succefully",
        notes: notes
    })
})


app.listen(3000, () => {
    console.log("server is listening on port 3000...!");
})