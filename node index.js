
'use strict'

const express = require('express')
const app = express()
const port = 8080 

app.get('/', (req, res) => {
  res.send('index.html')
})

app.listening(port, () => {
  console.log('app listening on port ${port}')
})
