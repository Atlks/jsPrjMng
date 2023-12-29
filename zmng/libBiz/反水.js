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


global['get_alreadyFsAmtV2'] = get_alreadyFsAmtV2

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

global['getFsRat'] = getFsRat

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


//user.account
function get_lastFsDttm(user) {

    log_fun_enterV2(arguments, "fslog.log")
    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = dbdir + "/cashback/acc"+user.account+".json"

    if(!file_exists(dbf))
    {
        let rcd =user;
        rcd.lastPrcsGameStartTime="2000-01-01"
        writeFileSyncx(dbf, json_encode(rcd));
    }

   const obj= readFileAsJson(dbf)



      let  date1 =obj.lastPrcsGameStartTime
    log_fun_retV2(arguments, date1, "fslog.log")
    return date1;
}

function newSumBet(userid, lastFsDttm) {

    log_fun_enterV2(arguments, "fslog.log")
    let dbf = __dirname + "/../db_zhudan/zhudan_uid" + userid + ".json";
    console.log(dbf)
    let dtRows = readFileAsJsonV2(dbf, [])

    let selectRows = dtRows.filter((e) => {
        if (new Date(e.GameStartTime) >new Date( lastFsDttm))
            return true;
    })

    if(selectRows.length==0){
        //no new rec
        let SumBetNewval=0
        let thisTimeEndGameStartTime=lastFsDttm
        let retobj={SumBetNewval, thisTimeEndGameStartTime}
        log_fun_retV2(arguments, retobj, "fslog.log")

        return retobj
    }

    selectRows = selectRows.sort((a, b) => new Date(b.GameStartTime) - new Date(a.GameStartTime))
    const thisTimeEndGameStartTime = selectRows[0].GameStartTime

    let SumBetNewval = sumColV3("ValidBet", selectRows);
    let retobj={SumBetNewval, thisTimeEndGameStartTime}
    log_fun_retV2(arguments, retobj, "fslog.log")

    return retobj


}

global['getThisTimeCashbackAmt'] = getThisTimeCashbackAmt

function getThisTimeCashbackAmt(user, fsRat) {


    log_fun_enterV2(arguments, "fslog.log")
    // const allbet = sumColV2((e) => e.ValidBet, dtRows)

    const lastFsDttm = get_lastFsDttm(user)
    const {SumBetNewval, thisTimeEndGameStartTime} = newSumBet(user.userid, lastFsDttm);
    const feshweiAmt = SumBetNewval * fsRat;
    // const alreadyFsAmt = get_alreadyFsAmtV2(userid);
    //
    // let dbgobj = {"uidx": userid, "allbet": allbet, "feshweiAmt": feshweiAmt, "alreadyFsAmt": alreadyFsAmt}
    // console.log(JSON.stringify(dbgobj))

    let fsFnl = feshweiAmt;//  - alreadyFsAmt
    if (fsFnl <= 0)
        fsFnl = 0
    fsFnl = nbr_fmt_fix2(fsFnl)
    let newVar = {SumBetNewval, fsFnl,lastFsDttm, thisTimeEndGameStartTime};

    log_fun_retV2(arguments, newVar, "fslog.log")
    return newVar;
}

function  getIDsWhtlst()
{

    var ini = require('ini');
    var fs = require('fs');
    let file = __dirname + '/../cfg.ini';
    var config = ini.parse(fs.readFileSync(file, 'utf-8'));
    console.log(config.反水);
    if(config.反水测试白名单)
    return config.反水测试白名单.split(",")
    else
        return "".split(",")

}

/**
 *
 * @param msg
 * @returns {Promise<void>}
 */
async function 反水(msg) {

    return

    let fslogf1 = "fslog.log";
    log_infoV2("\r\n\r\n\r\n-----------start反水-----", fslogf1)
    log_fun_enterV2(arguments, fslogf1)
    log_fun_enter(arguments)


    let acc = msg.from.id


    //whit lst flt

    const idss =getIDsWhtlst()
      //  readFileAsArr(__dirname + "/../_noup/fsWhtlst.txt")




    var ini = require('ini');
    var fs = require('fs');
    let file = __dirname + '/../cfg.ini';
    var config = ini.parse(fs.readFileSync(file, 'utf-8'));
    console.log(config.反水);
    if( config.反水!="开启")
    {
        log_infoV2("config.反水=>" + config.反水, fslogf1)
        return
    }
    if( config.反水白名单=="开启"){
        if (!idss.includes(acc.toString())) {
            log_infoV2("!idss.includes(acc)" + acc, fslogf1)
            return
        }
    }





    let user = await findPlayer(acc)
    log_infoV2("******findPlayer():" + acc, fslogf1)
    log_infoV2("findPlayer() ret=>" + JSON.stringify(user), fslogf1)

    //zhudan_uid32077260

    let dbf = __dirname + "/../db_zhudan/zhudan_uid" + user.data.userid + ".json";
    console.log(dbf)
    let dtRows = readFileAsJsonV2(dbf, [])

    //-------------------che bf
    if (dtRows.length == 0) {

        let output = "完成（udt nt full）"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return
    }
    require("../libx/aggr")


    let fsRat = getFsRat()
    if (fsRat > 0.05) {
        let output = "反水率不对"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return

    }


    //----------------start

    let {SumBetNewval, fsFnl,lastFsDttm, thisTimeEndGameStartTime} = getThisTimeCashbackAmt(user.data, fsRat);
    if (fsFnl <= 0) {

        let output = await outputToIm(acc, 0, fsRat, fsFnl);
        const bot = global['bot']
        bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})

        return
    }

    addScore(acc, fsFnl)

    let fslogRcd = user.data;
    fslogRcd.curAllbet = SumBetNewval
    fslogRcd.fsAmt = fsFnl
    fslogRcd.tmstmp = timeStamp()
    fslogRcd.dttm = curDatetimeV2()
    fslogRcd.lastFsDttm=lastFsDttm
    fslogRcd.thisTimeEndGameStartTime = thisTimeEndGameStartTime
    addFslogRcdV2("notuse", fslogRcd)

    //------updt lastprocs  rec dt
    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    const dbf2 = dbdir + "/cashback/acc"+user.data.account+".json"
    let obj=readFileAsJson(dbf2)

    obj.lastPrcsGameStartTime  =thisTimeEndGameStartTime
    writeFileJson(dbf2, obj)



    fsFnl = nbr_fmt_fix2(fsFnl)
    let output = await outputToIm(acc, SumBetNewval, fsRat, fsFnl);
    // let txt="格式为: 上分100 下分100 余额 流水"
    const bot = global['bot']
    bot.sendMessage(msg.chat.id, "" + output, {reply_to_message_id: msg.message_id})


}