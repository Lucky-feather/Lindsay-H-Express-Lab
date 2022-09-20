import express from 'express'
import { beers } from './data/beer-data.js'

const app = express()

// app.get('/', function(req, res) {
//   res.send('<h1> hello, friends </h1> ')
// })

app.get('/home', function(req, res) {
  res.render("home")
})

app.get("/beers", function(req, res) {
  res.render("beers.index", {
    beers:beers
  })
})

app.listen(3000, function() {
  console.log("listening on port 3000")
})

