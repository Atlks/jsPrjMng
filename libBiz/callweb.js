// C:\w\sdkprj\node_modules\electron\dist\electron.exe  C:\modyfing\jbbot\zmng\dsktp.js
//  node   libBiz/bzweb.js
//   npm i  electron
//   npm i chalk
//   npm i esm-hook
//    npm i node-fetch
//     node_modules/electron/dist/electron  dsktp.js

//  node-dev libBiz/callweb.js
// C:\modyfing\apiprj\jbbot\zmng\node_modules\.bin\node-dev.cmd  libBiz\callweb.js
//node_modules/.bin/node-dev.cmd  libBiz/callweb.js
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
// }  显示


//dep todo ..should mv to 到cmd forld


    global['incLibs']=incLibs
var reqst;
function incLibs() {

    const { AsyncLocalStorage } = require('async_hooks');

    const async_hooks = require('async_hooks');

    // 返回当前异步作用域的asyncId
    const eid = async_hooks.executionAsyncId();

// 返回触发此异步操作的异步作用域的asyncId
    const tid = async_hooks.triggerAsyncId();



    require("../libx/incHtm")
    require("../libx/autoload")
    require("../libBiz/searchPlayer")
    requireAutoload("bal_ttlbal,zhudanMng,cashback,cfgx,xiafen,rvw_pass,rvw_rfs,qry_cashin_aplctn,kick,msgCmdCfg,saveMsgCmdCfg,sys,file,importUser,excel,logger,includeXAjaxNode,bzDb,user,sys,addUser,searchPlayer,oplog,ex,httpSync,bizHttp,incHtm,exit,login,qryAgtBal")
    require("../libx/logger")
    requirex("qry_cashin_aplctn")
    require("../libx/dsl")
    require("../libx/api2023jb")
    require("../libBiz/bizHttp.js")
    require("../libBiz/oplog.js")
    require("../libx/err.js")
    require("../libx/crpto.js")
    require("../libx/api2023jb.js")
    const fs = require("fs");
    require("../libx/fp_ati1990");
    require("../libx/errHdlr");
    require("../libx/logger")
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
    require("./qry_cashin_aplctn.js")
    require("../libBiz/bal_ttlbal.js")
}


function requirex(f) {
    try {
        console.log(f)
        require(f)
    } catch (e) {
        console.warn(e.message)
    }

}

function send(retTxt, res) {
    if (typeof retTxt == "string")
        res.send((retTxt))
    else if (typeof retTxt != "string")
        res.send(JSON.stringify(retTxt))
}








/**
 * //
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function callrmt(req, res) {


    const async_hooks = require('async_hooks');
    global['async_hooks']=async_hooks

    reqst=req
    global['req']=req
   // let avatar = req.files.file1;

    //todo  setcooki to per req


    console.log("req querystr=>" + JSON.stringify(req.query))
    let callfun = req.query.callfun;
    require("../libx/dsl.js")

    callfun = callfun.trim()
    let arr = callfun.split(" ");
    let fun = arr[0]


    const curReqID=getcurReqID()

    global['req'+curReqID]=req

    //if fun need login ,login
    if (fun == "login" || fun=="importUser" || fun == "includeXAjax" || fun == "exit") {

    } else {
        //if fun!=null
        //need login api
        if (!req.cookies.agtid) {
            //if not tokoen info  ,,,alert
            res.send("not_loginex@需要登录")
            return
        } else {
            //cookie login  if alread have visa,exch visa
            //if fun!="login" & has req.cookies
            //set to global for this use...
            sendLoginVisa(req);
        }
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    requirex("../libBiz/" + fun + ".js");
    requirex("../libBiz/" + fun + "Node.js")

    try {
        let rzt = await dsl_callFrmUiToBiz(callfun);

        send(rzt, res)

    } catch (e) {
        if (e?.httpStatuCode)
            res.status(e?.httpStatuCode)
        // if(e.stack)


        var funname = arguments.callee.name;
        // arguments.callee.name
        let arg = "[]";

        let msg = "*********=>" + funname + arg
        log_errV3(e, msg)
        require("../libx/enc")
        if (typeof e == "string")
            res.send((e))
        else
            res.send(json_encode_ErrRawErrObj(e))
    }

    // todox should clr global visa  for next req
    global['visa']=null

}


/**
 * dep
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function upload(req, res) {

    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.file1;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            // avatar.mv('./uploads/' + avatar.name)
            let t = readFileSyncx(avatar)
            console.log("==file txt:=>" + t.substr(0, 300))
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }

}


/**
 *
 * @param app_web
 */
function uploadIni(app_web) {
    //-----------------------------fileupdt
    // 引入express-fileuplod
    var fileUpload = require('express-fileupload');
// 使用express-fileupload中间件
    app_web.use(fileUpload());
    //-----------------------------fileupdt end
}

function main() {
    // const express = require("express");
    // const {join} = require("path");
    // const cookieParser = require("cookie-parser");


    incLibs()



    //--------------------------------ini web svr
    const {join} = require("path");

    require("../libx/errHdlr")
    var cookieParser = require('cookie-parser');

/////------------- stgart web
    const express = require('express')
    const app_web = express()
    uploadIni(app_web);



    let webroot = join(__dirname + "/../", '');
    console.log("webrt=>" + webroot)
    app_web.use(express.static(webroot))
    app_web.use(cookieParser());

// respond with "hello world" when a GET request is made to the homepage
    app_web.get('/dt', (req, res) => {
       global['dt']="111"  // todo must str..beir conn long time timeout
        res.send( global['dt'])
    })

    app_web.get('/abt', (req, res) => {
        res.send( global['dt'])
    })


    app_web.post('/upload', upload);


    /**
     * http://localhost:8000/api?callfun=player_kick 777
     */
    app_web.post('/callrmt', callrmt);
    app_web.get('/callrmt', callrmt);

    app_web.get('/tmot', (req, res) => {

        setTimeout(() => {


            res.send('tmot')
        }, 35000)

    })


    console.log(77)

    let server = app_web.listen(8000, function () {

        let host = server.address().address
        let port = server.address().port

        console.log("应用实例，访问地址为 http://localhost:%s",  port)

    })

    console.log(999999)


}

main()