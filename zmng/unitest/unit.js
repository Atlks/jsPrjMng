var { execSync } = require('child_process');



function cmdTest(callFunStr) {
    var cmdExe = "node";
    var calllibInShell = __dirname + "/../libx/callFun.js ";


    var args = calllibInShell + " " + callFunStr;

    var cmdFull = "node " + args;
    //     File.AppendAllText("form2.log", "\r\n\r\n\r\n\r\n\r\n" + cmdFull);
    //     Console.WriteLine(cmdFull);
    // }


    console.log(cmdFull)
    var rzt = execSync(cmdFull).toString();

    console.log(rzt)
}

require("../libx/autoload")
requireAutoload("oplog,ex,httpSync,bizHttp,incHtm,exit,login,qryAgtBal,searchPlayer")
require("../libBiz/searchPlayer")
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
function ttt() {
    var callFunStr = "echo 1"
    cmdTest(callFunStr);
    cmdTest("buildUrlNgetV2 __empty__ 1694600295000 9");
    cmdTest("readFileSyncx __rootdir__/head.htm");
    cmdTest("readFileSyncx __USERPROFILE__%2Flgky.json");



    cmdTest("ScoreTopup_shangfen 777 1");
    cmdTest("Score_xiafen 777 2");
    cmdTest("player_kick 777");
    cmdTest("score_orderQryShagnxiafen 777");

    cmdTest("Score_PlayerKexiafenBal 777");
    cmdTest("oplog_qry");
}

async function testx() {
    callfun="searchPlayer 777"
  console.log( await dsl_callFrmUiToBiz(callfun))
}

testx();
//buildUrlNgetV2,account=777,1694600336000,7




// 609: 09/13/2023 17:19:29 info **********callFun.js prm==>pdo_insert,%7B%22agtid%22%3A%22111356%22%2C%22op%22%3A%22%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7%22%2C%22uname%22%3A%22555%22%2C%22%E7%B1%BB%E5%9E%8B%22%3A%22%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7%22%2C%22time%22%3A%222023-09-13%2017%3A19%3A28%22%7D,__rootdir__%2Fdb%2FopLogColl.json
// 行