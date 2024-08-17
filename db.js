const mongoose = require('mongoose')
require('dotenv').config()
//Define the mongodb connection URI
// const mongodbURI = process.env.DB_URL_LOCAL
const mongodbURL = process.env.DB_URL

// set up mongodb connection
mongoose.connect(mongodbURL)


// Get the default connection
// Mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection

// Define event listeners for database connection
db.on('connected', ()=>{
   console.log('Connected Successfully')
})

db.on('error', (err)=>{
    console.error(err)
})

db.on('disconnected', ()=>{
    console.log('Sorry!! Disconnected')
})

module.exports = db