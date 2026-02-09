const express = require("express")
const connectToDB = require("./src/db/db.js")
const noteModel = require("./src/models/notes.models.js")

const app = express()
app.use(express.json())

connectToDB()

// Create
app.post("/notes", async (req, res) => {
    const { title, content } = req.body;

    await noteModel.create({
        title, content
    })
    res.json({
        msg: "notes created successfully"
    })
})

// Read (all)
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.json({
        msg: "notes fetched successfully",
        notes
    })
})

// Delete 
app.delete("/notes/:id", async (req, res) => {
    const noteId = req.params.id;

    await noteModel.findOneAndDelete({ _id: noteId })

    res.json({
        msg: "note deleted successfully"
    })
})

// Update 
app.patch("/notes/:id", async(req, res) => {
    const noteId = req.params.id;

    const {title, content} = req.body;

    await noteModel.findOneAndUpdate({_id : noteId} ,{
        title: title,
        content: content
    })
    res.json({
        msg: "note updated successfully"
    })

})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})