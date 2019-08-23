var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hi, a simple nodejs !')
})

app.listen(8081, function() {
    console.log('app listening on port 8081')
})