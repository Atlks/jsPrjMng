



global['rvw_passCore']=rvw_passCore
/**
 * todo 上分下分具体分数也显示在oplog
 *
 * @param uname
 * @param cashio
 * @param amt
 * @param rowid
 */
async function rvw_passCore(uname, cashio, amt, rowid) {
    if (cashio == "上分") {

        shangfen(uname, amt);
        let file2 = getDbdir() + "/cashinAplctn.json";
        let data2_conn = pdo_connV3(file2)
        let rzt = pdo_query_fromData({"id": rowid}, data2_conn)

        let row = rzt[0]
        row['stat'] = "已处理"
        row['statShow'] = "已通过"
        pdo_save(data2_conn, file2)
        // todo send im ntfy ,scss

        const bot = global['bot']
      let acc=await  findPlayer(uname)
        let text =sprintf("上分%s审核通过成功,当前余额:"+acc.data.totalScore,amt) ;
        await bot.sendMessage(global['grpid'], text, {reply_to_message_id: row.message_id})


    }

    if (cashio == "下分") {


        xiafen(uname, amt);

        let file2 = getDbdir() + "/cashinAplctn.json";
        let data2_conn = pdo_connV3(file2)
        let rzt = pdo_query_fromData({"id": rowid}, data2_conn)

        let row = rzt[0]
        row['stat'] = "已处理"
        row['statShow'] = "已通过"
        pdo_save(data2_conn, file2)


        let acc=await  findPlayer(uname)
        const bot = global['bot']
        let text =sprintf("下分%s审核通过成功,当前余额:"+acc.data.totalScore,amt) ;
        await bot.sendMessage(global['grpid'], text, {reply_to_message_id: row.message_id})

    }

}


/**
 *
 * @param row
 */
function rvw_passAjax(row,scssFun) {
    if (row.stat && row.stat == "已处理") {
        alert("已处理过了")
        return
    }

    let uname = row.uname;
    let amt = row.amt
    http_get_jqGet(callrmtRstapiUrl() + "rvw_passCore " + uname + " " + row.cashio + " " + amt+" "+row.id, function (rzt) {


        console.log("[rvw_pass] rzt=>" + rzt)
      //  rztobj = JSON.parse(rzt);

         if(scssFun)
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