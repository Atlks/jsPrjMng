global['反水'] = 反水

function get_alreadyFsAmt(userid) {


    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = dbdir + "fs_log/" + userid + ".json"

    //  let dbf = __dirname + "/../db_zhudan/zhudan_uid" + user.data.userid;
    console.log(dbf)
    let dtRows = readFileAsJsonV2(dbf, [])
    let fsAmt = sumColV2((e) => e.fsAmt, dtRows)
    return fsAmt;
}

function addFslogRcd(userid, fslogRcd) {
    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = dbdir + "fs_log/" + userid + ".json"
    pdo_insertV3(fslogRcd, dbf)
}

function getFsRat() {

    var ini = require('ini');
    var fs = require('fs');
    let file ='../cfg.ini';
    var config = ini.parse(fs.readFileSync(file, 'utf-8'));
    console.log(config. 反水比率);
    return config. 反水比率;
}

/**
 *
 * @param msg
 * @returns {Promise<void>}
 */
async function 反水(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.username

    let user = await findPlayer(acc)

    //zhudan_uid32077260

    let dbf = __dirname + "/../db_zhudan/zhudan_uid" + user.data.userid;
    console.log(dbf)
    let dtRows = readFileAsJsonV2(dbf, [])
    if (dtRows.length == 0) {

        let output = "完成（udt nt full）"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return
    }
    require("../libx/aggr")
    let allbet = sumColV2((e) => e.AllBet, dtRows)

    let fsRat = getFsRat()
    if (fsRat > 0.05) {
        let output = "反水率不对"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return

    }
    let feshweiAmt = allbet * fsRat;
    let alreadyFsAmt = get_alreadyFsAmt(user.data.userid);
    let fsFnl = feshweiAmt - alreadyFsAmt
    if (fsFnl <= 0) {

        let output = "已经反水完成"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return
    }

    addScore(acc, fsFnl)

    let fslogRcd = user.data;
    fslogRcd.fsAmt = fsFnl
    addFslogRcd(user.data.userid, fslogRcd)

    let output = "完成，反水金额：" + fsFnl.toFixed(2)
    // let txt="格式为: 上分100 下分100 余额 流水"
    const bot = global['bot']
    bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})


}