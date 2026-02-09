const mongoose = require("mongoose")

function connectDB() {

    mongoose.connect("mongodb+srv://shubhambharama18_db_user:NXSRAq6GSP628xik@cluster01.tboglod.mongodb.net/cohort")
    .then(()=> {
        console.log("connected to DB")
    })

}
module.exports = connectDB