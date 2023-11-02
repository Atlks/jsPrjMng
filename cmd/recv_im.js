
// grp nm  msgNode
// todo sxf must have nmbr
// todo secury map ...shangfen >>>cashin  xiafen>>cashout
// shf xiafen goto js file dync repl;ace...

require("../libBiz/反水")
require("../libBiz/recv.js")
require("../libx/file")
token="6411257533:AAFQI8JMckmNy9HXFdXLU_9cLnLDeyi-5Hc"
// let iniObj = parse_ini_file("../cfgDep.ini")
// token = iniObj.token_bot_tlgrm;

global['agentid']=111356
global['desCode']="26916DD661300B25"
global['md5Code']="1BC0036763DE22EC"

global['agtid']=global['agentid']
visa={"agtid":global['agtid'], "desCode":global['desCode'],"md5Code":global['md5Code'] }
global['visa']=visa

global['visaImEnv']=visa
global['grpid']=-4038077884
global['apiurl2023'] = "https://ng.mqbsx.com"

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
