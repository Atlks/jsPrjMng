// grp nm  msgNode
//  
// todo secury map ...shangfen >>>cashin  xiafen>>cashout
// shf xiafen goto js file dync repl;ace...

// fs bot   jbyxw_bot
token = "6643664645:AAHTiqen1zXDRdMDhl8j8Kz25ebY9xQaEpc"
// let iniObj = parse_ini_file("../cfgDep.ini")
// token = iniObj.token_bot_tlgrm;
global['grpid'] = -1001847884546
let keystr = ""
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

global['agtid'] = global['agentid']
visa = {"agtid": global['agtid'], "desCode": global['desCode'], "md5Code": global['md5Code']}
global['visa'] = visa

global['visaImEnv'] = visa


msg_recvListen(token, msg_recv)


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
