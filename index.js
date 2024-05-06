require('dotenv').config()
// Require needed modules
const express = require('express')

// initialize the app object
const app = express()

//Defining view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//import places.js
app.use('/places', require('./controllers/places'))

//create a homepage route. 
app.get('/', (req, res) => {
    //this gets sent to the client
    res.render('home')
})

//create alternate path
app.get('*', (req, res) => {
    res.render('error404')
})

//listen for connections
app.listen(process.env.PORT)