


const express = require('express')
const app_web = express()
app_web.get('/', (req, res) => {
    //global['dt']=111
    res.send( 111)
})

app_web.get('/abt', (req, res) => {
    res.send( global['dt'])
})


let server = app_web.listen(8001, function () {

  
    let port = server.address().port

    console.log("应用实例，访问地址为 http://localhost:%s",  port)

})

console.log(999999)