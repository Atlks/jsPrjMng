const express = require('express')
const fs = require("fs");
const app_web = express()

// respond with "hello world" when a GET request is made to the homepage
app_web.get('/', (req, res) => {
    res.send('okkk')
})

app_web.get('/gd', (req, res) => {

    console.log(req.query);
    const fs = require('fs')
   // fs.writeFileSync('gd.txt', JSON.stringify(req.query) ,'utf8')
    fs.appendFileSync('gd.txt', JSON.stringify(req.query)+"\r\n" ,'utf8')
  //  res.send(fs.readFileSync("gdok.htm"))
    res.location('gdok.htm');
    res.statusCode = 301;
    res.end('');
})
app_web.get('/del', (req, res) => {

    console.log(req.query);
    const fs = require('fs')
    // fs.writeFileSync('gd.txt', JSON.stringify(req.query) ,'utf8')
    fs.appendFileSync('gd.txt', JSON.stringify(req.query)+"\r\n" ,'utf8')
    //  res.send(fs.readFileSync("gdok.htm"))
   fs.unlinkSync('gd.txt')
    res.send('ok')
})


app_web.get('/tmot', (req, res) => {

    setTimeout(()=>{


        res.send('tmot')
    },15000)

})


let webroot = __dirname;
console.log("webrt=>" + webroot)
app_web.use(express.static(webroot))

var server = app_web.listen(80, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://localhost:%s", host, port)

})

console.log(999999)