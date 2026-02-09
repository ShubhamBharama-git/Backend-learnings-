const mongoose = require('mongoose')

// schema
// task => required, completed => true/false , data => Date.now

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const taskModel = mongoose.model("Task", taskSchema)

module.exports = taskModel