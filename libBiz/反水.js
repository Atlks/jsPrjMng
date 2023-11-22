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

function get_alreadyFsAmtV2(userid) {


    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = dbdir + "cashbackLog.json"

    //  let dbf = __dirname + "/../db_zhudan/zhudan_uid" + user.data.userid;
    console.log(dbf)
    let dtRows = pdo_query({"userid": userid}, dbf)
    if (!dtRows)
        return 0
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
    let file = __dirname + '/../cfg.ini';
    var config = ini.parse(fs.readFileSync(file, 'utf-8'));
    console.log(config.反水比率);
    return config.反水比率;
}

function fmtRatePst(fsRat) {
    return fsRat * 100 + "%";
}

async function outputToIm(acc, allbet, fsRat, fsFnl) {
    let rzt2 = await searchPlayer(acc)
    let rztobj = JSON.parse(rzt2);


    // 返水成功，流水总额叉叉叉，反水比例，反水金额，您的余额
    let output = "返水成功！\n"
    output += "流水总额：" + allbet + "\n"
    output += "反水比例：" + fmtRatePst(fsRat) + "\n"
    output += "反水金额：" + fsFnl + "\n"
    output += "您的余额：" + rztobj.data.totalScore + "\n"
    console.log(output)
    return output;
}

/**
 *
 * @param msg
 * @returns {Promise<void>}
 */
async function 反水(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.id

    let user = await findPlayer(acc)

    //zhudan_uid32077260

    let dbf = __dirname + "/../db_zhudan/zhudan_uid" + user.data.userid + ".json";
    console.log(dbf)
    let dtRows = readFileAsJsonV2(dbf, [])
    if (dtRows.length == 0) {

        let output = "完成（udt nt full）"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return
    }
    require("../libx/aggr")
    let allbet = sumColV2((e) => e.ValidBet, dtRows)

    let fsRat = getFsRat()
    if (fsRat > 0.05) {
        let output = "反水率不对"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return

    }
    let feshweiAmt = allbet * fsRat;
    let alreadyFsAmt = get_alreadyFsAmtV2(user.data.userid);
    let fsFnl = feshweiAmt - alreadyFsAmt
    if (fsFnl <= 0)
        fsFnl = 0
    fsFnl = nbr_fmt_fix2(fsFnl)
    if (fsFnl <= 0) {

        let output = await outputToIm(acc, allbet, fsRat, fsFnl);
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return
    }

    addScore(acc, fsFnl)

    let fslogRcd = user.data;
    fslogRcd.fsAmt = fsFnl
    fslogRcd.tmstmp = timeStamp()
    fslogRcd.dttm = curDatetimeV2()
    addFslogRcdV2("notuse", fslogRcd)


    fsFnl = nbr_fmt_fix2(fsFnl)
    let output = await outputToIm(acc, allbet, fsRat, fsFnl);
    // let txt="格式为: 上分100 下分100 余额 流水"
    const bot = global['bot']
    bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})


}