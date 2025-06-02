const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use((req, res, next) => {

    console.log(`${Dtae.now()}`)
    next()
})
app.use((req, res, next) => {

    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    console.log('Received a  GET request on /')
  res.send('Hello virat ')
})
app.post('/', (req, res) => {
    console.log('Received a  post request on /')
  res.send('Hello World1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})