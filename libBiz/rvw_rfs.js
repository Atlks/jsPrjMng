global['rvw_rfs'] = rvw_rfs

/**
 *
 * @param uname
 * @param cashio
 * @param amt
 * @param rowid
 */
async function rvw_rfs(rowid) {


    let file2 = getDbdir() + "/cashinAplctn.json";
    let data2_conn = pdo_connV3(file2)
    let rzt = pdo_query_fromData({"id": rowid}, data2_conn)


    let row = rzt[0]
    row['stat'] = "已处理"
    row['statShow'] = "已拒绝"
    pdo_save(data2_conn, file2)
    const bot = global['bot']
    await bot.sendMessage(global['grpid'], "上下分审核被拒绝", {reply_to_message_id: row.message_id})


}


function rvw_rfsAjax(row, scssFun) {
    if (row.stat && row.stat == "已处理") {
        alert("已处理过了")
        return
    }



    let uname = row.uname;
    let amt = row.amt
    http_get_jqGet(callrmtRstapiUrl() + "rvw_rfs " + row.id, function (rzt) {


        console.log("[rvw_rfsAjax] rzt=>" + rzt)
        //  rztobj = JSON.parse(rzt);
        if (scssFun)
            scssFun(rzt)

        alert("处理完毕")
        //  $("#loaddiv").hide();
    })

}

