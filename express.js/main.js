const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Received a  GET request on /')
  res.send('Hello World5swd1')
})
app.post('/', (req, res) => {
    console.log('Received a  post request on /')
  res.send('Hello World1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})