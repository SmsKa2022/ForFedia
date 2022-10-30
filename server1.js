const express = require('express')
const server = express()
const PORT = 3000
server.get('/', function (req, res) {
    res.send('Федя, ты справился!Отлично')
})

server.listen(3000)