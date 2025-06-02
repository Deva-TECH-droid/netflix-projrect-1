const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName =  "google"
    let searchText = "Search Now"
  res.render("sona", { siteName: siteName, searchText: searchText })
})
app.get('/blog/:slug', (req, res) => {
 let blogTitle = "google why and when"
 let blogcontent = "its very good company for a tech students"
  res.render("blogpost", {blogTitle: blogTitle, blogcontent: blogcontent})   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
