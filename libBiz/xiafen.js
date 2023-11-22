try {
    require("./libx/excel")
} catch (e) {
}
try {
    require("./excel")
} catch (e) {
}


function cashoutAjax(uname, amt, scssFun) {

    http_get_jqGet(callrmtRstapiUrl() + "xiafen " + uname + " " + amt, function (rzt) {

        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
        console.log("[cashoutAjax] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);
        //if have e有rr
        if (rztobj.msg_to_ui)
            alert(rztobj.msg_to_ui)

        else if (rztobj.data.code == 0) {
            alert("下分成功")
            if (scssFun)
                scssFun(rzt)

        } else if (rztobj.data.code) {
            //let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + rztobj.errmsg + " ")
        } else {
            console.log(rzt)
        }
        //  alert("发生错误" + rzt)
        //   alert(rzt)


        //   $("#loaddiv").hide();


    })

}


/**
 *
 */
function xiafen745() {
    authChkFrt()
    authChk()


    var r = confirm("确定要给玩家下分吗");
    if (r == true) {

    } else {
        return
    }
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()

    // todo should callrmtFun,hide ajax gainye
    setTimeout(function () {


        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt = dsl_callFunCmdMode("Score_xiafen", $("#uname_sxf").val(), $("#score_sxf").val())
        http_get_jqGet(callrmtRstapiUrl() + "xiafen " + $("#uname_sxf").val() + " " + $("#score_sxf").val(), function (rzt) {

            //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
            console.log("[xiafen745] rzt=>" + rzt)
            rztobj = JSON.parse(rzt);
            if (rztobj.msg_to_ui)
                alert(rztobj.msg_to_ui)
            else if (rztobj.data.code == 0) {
                alert("下分成功")
                playerNScore237();
                //  orderQryShagnxiafen415();

            } else if (rztobj.data.code) {

                //let errmsg = errcodeMsg(rztobj.data.code)
                alert("发生错误:" + rztobj.errmsg + " ")
            } else {
                console.log(rzt)
            }
            // alert("发生错误" + rzt)
            //   alert(rzt)


            $("#loaddiv").hide();


        })


    }, 50);


}

global['xiafen'] = xiafen

/**
 *
 * @param uname
 * @param score
 * @returns {Promise<string>}

 */
async function xiafen(uname, score) {

    log_enterFun(arguments)
    authChk()

    let visa = getLoginToken();
    let agentid = visa.agtid

    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNget(_paraValue, timestamp, apitype_xiafen);

    let rzt = ""
    try {
        rzt = await http_get(url);
        console.log(":1240" + rzt)
    } catch (e) {
        checkWhiteIp(e, uname);
        checkAgtidErr(e);
    }


    console.log(":1241" + rzt)


    //---------add oplog
    // includeEsm("../lowdbx/lowdbX.js")
    // await import("../lowdbx/lowdbX.js")
    let file = getDbdirV2(agentid) + "/opLogColl.json";
//    let visa=getLoginToken();
    let rcd = {
        "agtid": visa.agtid,
        "op": "下分操作",
        "uname": uname,
        "txt": "下分" + score,
        "score": score,
        "类型": "下分",
        "time": curDateTime()
    }
    pdo_insert(rcd, file);

    //-------------add score log
    rztobj = JSON.parse(rzt);
    if (rztobj.data.code == 0) {


        let rcd = {"uname": uname, "score": score, "类型": "下分", "time": curDateTime()}
        let dbfile = getDbdirV2(agentid) + "scoreLogColl.json";
        pdo_insert(rcd, dbfile);
    }


    if (rztobj.data.code != 0) {
        let errmsg = errcodeMsg(rztobj.data.code)
        rztobj.errmsg = errmsg;
        return rztobj;
    }


    return (rzt);

}
