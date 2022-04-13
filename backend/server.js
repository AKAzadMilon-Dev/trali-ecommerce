const express = require('express')
const app = express()
var cors = require('cors')
const bannerData = require('./bannerData')
const logoData = require('./logoData')
const dealData = require('./dealData')


app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Route Start
app.get('/banner', function(req,res){
    res.send(bannerData)
})
app.get('/logo', function(req,res){
    res.send(logoData)
})
app.get('/deal', function(req,res){
    res.send(dealData)
})

app.listen(8000,()=>{
    console.log("port 8000 connect")
})