// Require needed modules
const express = require('express')

// initialize the app object
const app = express()

//create a homepage route. 
app.get('/', function(req, res) {
    //this gets sent to the client
    res.send('Hello World')
})

//create alternate path
app.get('/two', function(req, res) {
    res.send('Whatsup Bro')
})

//listen for connections
app.listen(3000, function(){
    console.log('I am awake')
})