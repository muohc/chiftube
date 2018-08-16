
'use strict'

const express = require('express')
const app = express()
const port = 8080 


app.get('/', (req, res) => {
  res.sendFile(__dirname +'/pages/index.html');
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
