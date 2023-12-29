global['rvw_passCore'] = rvw_passCore

/**
 *
 *
 * @param uname_acc
 *
 * @param cashio
 * @param amt
 * @param rowid
 */
async function rvw_passCore(uname, cashio, amt, rowid) {

    const curReqID = getcurReqID()
    let req = global['req' + curReqID];
    //   req.cookies
    if (req) {  //web env
        var token = getLoginToken()
        global['visaImEnv'] = token

    }

    if (cashio == "上分") {


        //----------shangfen
        let file2 = getDbdir() + "/cashinAplctn.json";
        let data2_conn = pdo_connV3(file2)
        let rzt = pdo_query_fromData({"id": rowid}, data2_conn)
        console.log("11011L:19L")
        console.log(rzt)

        let row = rzt[0]
        if ("已处理" == row['stat'])
            return
        row['stat'] = "已处理"
        row['statShow'] = "已通过"
        pdo_save(data2_conn, file2)


//----------
//         let acc2 = await findPlayer(uname)
//         console.log("当前 余额")
//         console.log(acc2)

        shangfen(uname, amt);


        const curReqID = getcurReqID()
        let req = global['req' + curReqID];
        //   req.cookies
        if (req) {  //web env
            var token = getLoginToken()
            var visa=token
            var desCode = token.desCode
            var agentid = token.agtid
        }




        setTimeout(async function () {

          //  let visa={"agentid":agentid,"desCode":desCode}
            let acc = await findPlayerV2(uname, visa)
            let text = sprintf("上分%s审核通过成功,当前 余额:" + acc.data.totalScore, amt);
            console.log(text)

            const bot = global['bot']
            await bot.sendMessage(global['grpid'], text, {reply_to_message_id: row.message_id})

        }, 10000)


    }

    if (cashio == "下分") {


        let file2 = getDbdir() + "/cashinAplctn.json";
        let data2_conn = pdo_connV3(file2)
        let rzt = pdo_query_fromData({"id": rowid}, data2_conn)

        let row = rzt[0]

        if (row['stat'] == "已处理")
            return

        row['stat'] = "已处理"
        row['statShow'] = "已通过"
        pdo_save(data2_conn, file2)


        xiafen(uname, amt);



        //------get id
        const curReqID = getcurReqID()
        let req = global['req' + curReqID];
        //   req.cookies
        if (req) {  //web env
            var token = getLoginToken()
            var visa=token
            var desCode = token.desCode
            var agentid = token.agtid
        }




        setTimeout(async function () {

            //  let visa={"agentid":agentid,"desCode":desCode}
            let acc = await findPlayerV2(uname, visa)
            let text = sprintf("下分%s审核通过成功,当前余额:" + acc.data.totalScore, amt);
            console.log(text)

            const bot = global['bot']
            await bot.sendMessage(global['grpid'], text, {reply_to_message_id: row.message_id})

        }, 10000)




    }


    global['visaImEnv'] = null
}


/**
 *
 * @param row
 */
function rvw_passAjax(row, scssFun) {
    if (row.stat && row.stat == "已处理") {
        alert("已处理过了")
        return
    }

    let uname = row.uname; //act is acc,tg_uid
    let amt = row.amt
    http_get_jqGet(callrmtRstapiUrl() + "rvw_passCore " + uname + " " + row.cashio + " " + amt + " " + row.id, function (rzt) {


        console.log("[rvw_pass] rzt=>" + rzt)
        //  rztobj = JSON.parse(rzt);

        if (scssFun)
            scssFun(rzt)
        alert("处理完毕")
    })

}


/**
 *
 * @param uname
 * @param amt
 * @param scssFun
 */
function cashinAjax(uname, amt, scssFun) {


}