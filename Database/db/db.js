const mongoose = require("mongoose")

// it is good practice to create a fuction for connection of our server to database and 
// call this fuc in server.js file so that it connects to db 

function connectToDB() {
    mongoose.connect("mongodb+srv://shubhambharama18_db_user:NXSRAq6GSP628xik@cluster01.tboglod.mongodb.net/cohort")
    .then(()=> {
        console.log("Connected to DB")
    })
}
module.exports = connectToDB;