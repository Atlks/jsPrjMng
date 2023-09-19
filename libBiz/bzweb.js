// C:\w\sdkprj\node_modules\electron\dist\electron.exe  C:\modyfing\jbbot\zmng\dsktp.js

//   npm i  electron
//   npm i chalk
//   npm i esm-hook
//    npm i node-fetch
//     node_modules/electron/dist/electron  dsktp.js
const {join} = require("path");

require("../libx/errHdlr")

/////------------- stgart web
const express = require('express')
const app_web = express()


let webroot = join(__dirname+"/../", '');
console.log("webrt=>"+webroot)
app_web.use(express.static(webroot))

// respond with "hello world" when a GET request is made to the homepage
app_web.get('/', (req, res) => {
    res.send('okkk')
})

app_web.get('/about', (req, res) => {
    res.send('about')
})

/**
 *
 * @param libss
 */
// function requireAutoload(libss) {
//     let arr=libss.split(",")
//     for(let lib of arr)
//     {
//         requirex("./"+lib+".js")
//         requirex("./libx/"+lib+".js")
//         requirex("./libBiz/"+lib+".js")
//     }
// }
function incLibs()
{
    require("../libx/incHtm")
    require("../libx/autoload")
    require("../libBiz/searchPlayer")
    requireAutoload("bzDb,user,sys,addUser,searchPlayer,oplog,ex,httpSync,bizHttp,incHtm,exit,login,qryAgtBal")
    require("../libx/logger")
    require("../libx/dsl")
    require("../libx/api2023jb")
    require("../libBiz/bizHttp.js")
    require("../libBiz/oplog.js")
    require("../libx/err.js")
    require("../libx/crpto.js")
    require("../libx/api2023jb.js")
    const fs = require("fs");
    require("../libx/fp_ati1990");
    require("../libx/errHdlr");require("../libx/logger")
    global["reg"] = reg;
    global["login"] = login;
    require("../libx/php.js")
    require("../libBiz/acc.js")
    require("../libx/ref.js")
    require("../libx/sys.js")
    require("../libx/enc.js")
    require("../libBiz/bizErr.js")

    require("../libx/aes.js")
    require("../libBiz/bizHttp.js")
    require("../libBiz/shangfen.js");
    require("../libBiz/shangfenNode.js")
}
incLibs()
function requirex(f) {
    try {
        console.log(f)
        require(f)
    }catch (e)
    {
        console.warn(e.message)
    }
    
}

/**
 * http://localhost:8000/api?callfun=player_kick 777
 */
app_web.get('/api', async (req, res) => {

    console.log("req querystr=>"+JSON.stringify(req.query))
    let callfun = req.query.callfun;
    require("../libx/dsl.js")

    callfun=callfun.trim()
    let arr=callfun.split(" ");
    let fun=arr[0]

    requirex("../libBiz/"+fun+".js");
    requirex("../libBiz/"+fun+"Node.js")

    try{
        let promise = await dsl_callFrmUiToBiz(callfun);

        if (typeof promise == "string")
            res.send((promise))
        else if (typeof promise != "string")
            res.send(JSON.stringify(promise))
    }catch (e)
    {
        if(e?.httpStatuCode)
            res.status(e?.httpStatuCode)
        res.send(JSON.stringify(e))
    }

})

app_web.get('/tmot', (req, res) => {

    setTimeout(() => {


        res.send('tmot')
    }, 15000)

})


console.log(77)

var server = app_web.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://localhost:%s", host, port)

})

console.log(999999)