const mongoose = require("mongoose")

// schema and models

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel