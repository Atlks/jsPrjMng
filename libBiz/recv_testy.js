token="6411257533:AAFQI8JMckmNy9HXFdXLU_9cLnLDeyi-5Hc"
global['desCode']="26916DD661300B25"
global['md5Code']="1BC0036763DE22EC"
global['agentid']=111356
global['agtid']=111356
visa={"agtid":global['agtid']}
global['visa']=visa

require("./recv.js")
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
