import express from 'express'

const app = express()

app.get('/', function(req, res) {
  res.send('<h1> hello, friends </h1> ')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})

