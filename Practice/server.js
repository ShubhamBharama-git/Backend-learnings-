const express = require("express")
const connectDB = require("./src/db/db")
const taskModel = require("./src/models/task.model")

const app = express()
app.use(express.json())

connectDB()


app.post("/task", async(req, res) => {
    let {task, completed, date} = req.body
    await taskModel.create({
        task, completed, date
    })

    res.json({
        msg: "task added"
    })
})

app.get("/task", async(req, res) => {
    const tasks = await taskModel.find()

    res.json({
        msg: "task fetched",
        tasks: tasks
    })
})

app.delete("/task/:id", async(req, res) => {
    const taskId = req.params.id;

    await taskModel.findOneAndDelete({
        _id: taskId
    })

    res.json({
        msg: "task deleted"
    })
})

app.patch("/task/:id", async(req, res) =>{
    const taskId = req.params.id;

    const {completed} = req.body;

    await taskModel.findOneAndUpdate(
        {
            _id: taskId
        },
        {
            completed: completed
        }
    )

    res.json({
        msg: "task updated"
    })

})


app.listen(3000, () => {
    console.log("Server is running on port 3000!")
})