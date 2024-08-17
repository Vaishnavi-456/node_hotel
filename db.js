const mongoose = require('mongoose')

//Define the mongodb connection URI
const mongodbURI = 'mongodb://127.0.0.1:27017/hotels'

// set up mongodb connection
mongoose.connect(mongodbURI)


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