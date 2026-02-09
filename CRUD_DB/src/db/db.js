const mongoose = require("mongoose")

function connectToDB () {

    mongoose.connect("mongodb+srv://shubhambharama18_db_user:NXSRAq6GSP628xik@cluster01.tboglod.mongodb.net/cohort")
    .then(() =>  {
        console.log("Connected to DB")
    })
}

module.exports = connectToDB