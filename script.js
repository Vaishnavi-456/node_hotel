const express = require('express')
const app = express()
const port = 3000
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())




app.get('/', (req,res) => {
    var restautant = {
        "name":"Aple Ghar",
        "address":"ABC",
        size:2000
    }
    res.send(restautant)
    // var json = JSON.stringify(restautant)
    console.log(restautant,typeof restautant)

})



const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menuitem',menuItemRoutes)
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)


app.listen(port, () =>{

    console.log(`server is listening on port ${port} `)

})