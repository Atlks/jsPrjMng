//  nohup
//
//
//  node_modules/.bin/node-dev cmd/recv_im_prePrd.js &
//  node_modules/.bin/node-dev lib
// node cmd/recv_im_prePrd.js
//node_modules/.bin/node-dev cmd/recv_im_prePrd.js
// todo secury ...shangfen >>>cashin  xiafen>>cashout
// shf xiafen goto js file dync repl;ace...

require("../libBiz/recv.js")
require("../libx/file")
token="6620532731:AAFPBYTE5jfsAkjvUQn-y5TmdhTvyGMV5Js"
// let iniObj = parse_ini_file("../cfgDep.ini")
// token = iniObj.token_bot_tlgrm;

global['agentid']=111356
global['desCode']="26916DD661300B25"
global['md5Code']="1BC0036763DE22EC"

global['agtid']=global['agentid']
visa={"agtid":global['agtid'], "desCode":global['desCode'],"md5Code":global['md5Code'] }
global['visa']=visa


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
