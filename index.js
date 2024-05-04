require('dotenv').config()
// Require needed modules
const express = require('express')

// initialize the app object
const app = express()

//import places.js
app.use('/places', require('./controllers/places'))

//create a homepage route. 
app.get('/', (req, res) => {
    //this gets sent to the client
    res.send('Hello World')
})

//create alternate path
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})

//listen for connections
app.listen(process.env.PORT)