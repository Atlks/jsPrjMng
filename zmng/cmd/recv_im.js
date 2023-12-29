
// grp nm  msgNode
//
// todo secury map ...shangfen >>>cashin  xiafen>>cashout
// shf xiafen goto js file dync repl;ace...


token="6411257533:AAFQI8JMckmNy9HXFdXLU_9cLnLDeyi-5Hc"
global['grpid']=-4038077884    //msgnode grpname

let keystr = "111526"
global['apiurl2023'] = "https://ng.mqbsx.com"


//todo maybe rcm need
let kf= __dirname+"/../_noup/key.txt"

var fs = require("fs");
let rt = fs.readFileSync(kf).toString();
keystr = rt.trim();

global['apiurl2023'] = "https://dtinterface.1saeda.com"



require("../libBiz/反水")
require("../libBiz/recv.js")
require("../libx/file")
global['agentid'] = keystr.split(",")[0]
global['desCode'] = keystr.split(",")[1]
global['md5Code'] = keystr.split(",")[2]
// global['agentid']=111356
// global['desCode']="26916DD661300B25"
// global['md5Code']="1BC0036763DE22EC"

global['agtid']=global['agentid']
visa={"agtid":global['agtid'], "desCode":global['desCode'],"md5Code":global['md5Code'] }
global['visa']=visa

global['visaImEnv']=visa



msg_recvListen(token,msg_recv)



async function msg_recvHdlrV2(msg) {

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
