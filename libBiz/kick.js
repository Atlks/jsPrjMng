/**
 *
 * @param uname
 * @returns {Promise<*|undefined>}
 */
async function kick (uname) {


    log_enterFun(arguments)

    authChk()

    timestamp = time();
    await import("../lowdbx/lowdbX.js")
    //  _paraValue = "account=%s";
    //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>" + _paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_kick);


    let file = oplog_logDbdir()
    var rcd = {"agtid":agtid,"op": "踢玩家下线", "uname": uname, "类型": "踢玩家下线", "time": curDateTime()}
    pdo_insert(rcd, file);

    let rzt=""

    try {
        rzt = await http_get(url);
        console.log(":1253"+rzt)
        let   rztobj = JSON.parse(rzt);

        if (rztobj?.data?.code != "0") {
            require("./excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            //   alert("发生错误:" + errmsg + " ")
            let eobj = {"[player_kick] uname": uname, "httpRzt": rzt, "type": "ex", "msg_to_ui": errmsg}
            throw eobj;
        }


    } catch (e) {
        if (e?.httpStatuCode == 403) {
            let rzt = e.httpRzt_clr;
            let obj = json_decode(rzt);
            let eobj = {
                "[player_kick] uname": uname,
                "httpRzt": rzt,
                "type": "ex",
                "httpStatuCode":e.httpStatuCode,
                "msg_to_ui": "发生错误，可能ip权限不足，需要加白" + obj.data
            }
            throw eobj;
        } else
            throw  e;


    }

    return rzt;


}




global["kick"] = kick;