//c: \w\ jbbot > C: \phpstudy_pro\ Extensions\ php\ php7 .3 .4 nts\ php.exe think swoole //ink swoole//// 
//   https://api.telegram.org/bot5464498785:AAGtLv-M-RKgRoIh5G3XEfkdqkCPiVBB1NA/getUpdates
////////   npm install node-telegram-bot-api
//   npm install  ini
//   npm install  mysql
// execSync

//   node tlgrm/keywoHdlr.js
function main() {
    const {exec, execSync} = require('child_process');


    var connection = getConn();
//token = "6510408569:AAHrrbsKgCvklwiFje_TKPF-ABMz0kdxn2c" // msg2025
    token = "";
    connection.query('SELECT  * from setting where id=20  ', function (error, results, fields) {
        if (error) throw error;
        //  console.log(JSON.stringify(results));
        token = results[0].s_value
        console.log('The solution is: ', results[0].s_value);


        //test
        // token="6193061603:AAGuHLcUR0-pjiIRFc9wfYglsvhae61ZEqA";
        // token="";
        msg_recvListen(token);
    });
    connection.end(); //要加不然唱起了回报个 conn close err。。。must add beir longt time
    console.log(9999);
}

// node  C:\modyfing\jbbot\tlgrm\keywoHdlr.js
// main();


async function msg_recvHdlr(msg) {

    chatId = msg.chat.id;
    console.log(msg)

    await msg_recv(msg)
    // send a message to the chat acknowledging receipt of their message
    //  bot.sendMessage(chatId, 'Received your message');

    //  msgx(msg);
    // cmd = "node   tlgrm/msgHdl.js " + encodeURI(JSON.stringify(msg));
    // $phpexe = "php";
    // // $tlghr_msg_hdl = " C:\\w\\jbbot\\tlgrmHdl_temacyo.php ";
    // filename = __dirname + "/../think";
    // cmd = $phpexe + " " + filename + "    keywdReqHdlr  " + encodeURI(JSON.stringify(msg));
    // console.log(cmd)
    // execSync(cmd)
    // console.log(999)

}

global['msg_recvListen'] = msg_recvListen

/**
 *
 * @param token
 */
function msg_recvListen(token, msg_recvHdlr) {
    //6357469915: AAGyKxgsBJ4NmaazHG - 6 aiAuoodeT0gJmPA   //ssc2023 bot

    TelegramBot = require('node-telegram-bot-api');
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, {polling: true});
    // const bot = global['bot']
    //   bot.sendMessage()
    global['bot'] = bot

    // Listen for any kind of message. There are different kinds of
    // messages.
    bot.on('message', msg_recvHdlr);
}

require("../libx/incHtm")
require("../libx/autoload")
require("../libBiz/searchPlayer")
requireAutoload("acc,QryShangxiafen,余额,帮助,流水,xiafen,下分tlgrm,recv_nml_msg,errHdlr,shangfenNode,shangfen,上分tlgrm,crpto,sys,file,importUser,excel,logger,includeXAjaxNode,bzDb,user,sys,addUser,searchPlayer,oplog,ex,httpSync,bizHttp,incHtm,exit,login,qryAgtBal")


global['msg_recv'] = msg_recv


/**
 * shfen rcv msg
 * @param msg
 */
async function msg_recv(msg, bot) {
    log_fun_enter(arguments)
    console.log(msg)
    let txt = msg.text;
    let arr = txt.split(" ")
    let fun = arr[0]
    if (file_exists("./" + fun + "tlgrm.js") || file_exists("./" + fun + ".js")) {
        requirex(fun + ".js")
        requirex(fun + "tlgrm.js")
        let acc = msg.from.username

        let argarr = [];
        argarr.push(msg)

        let rzt = await call_func(fun, argarr)

        console.log("[msg_recv ] ret=>" + rzt)
    } else {
        await recv_nml_msg(msg)

    }


}


function getConn() {
    path = require("path");
    fs = require("fs");
    mysql = require("mysql");
    ini = require('ini');
    var fs = require("fs");
    var path = require("path");
    const iopath = path.join(__dirname, '../.env'); // 引用Pos.ini的相对地址
    const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));
    console.log(Info)

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: Info.database.hostname,
        user: Info.database.username,
        password: Info.database.password,
        database: Info.database.database
    });

    connection.connect();
    return connection;
}