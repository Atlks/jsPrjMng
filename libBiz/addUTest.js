

global['incLibs']=incLibs
var reqst;
function incLibs() {
    require("../libx/incHtm")
    require("../libx/autoload")
    require("../libBiz/searchPlayer")
    requireAutoload("file,importUser,excel,logger,includeXAjaxNode,bzDb,user,sys,addUser,searchPlayer,oplog,ex,httpSync,bizHttp,incHtm,exit,login,qryAgtBal")
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
}


incLibs()
global['desCode']="26916DD661300B25"
global['md5Code']="1BC0036763DE22EC"
global['agentid']=111356
addUserCore("777","7")