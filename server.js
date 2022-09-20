import express from 'express'
import { beers } from './data/beers.js'

const app = express()


app.get('/', function(req, res) {
  res.redirect('/beers')
})

app.get('/beers', function(req, res) {
  res.render('beers/index', {
    beers: beers
  })
})

app.set('view engine', 'ejs')

app.listen(3030, function() {
  console.log("listening on port 3030")
})

