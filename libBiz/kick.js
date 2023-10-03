/**
 *
 * @param uname
 * @returns {Promise<*|undefined>}
 */
async function kick(uname) {


    log_enterFun(arguments)

    authChk()

    timestamp = time();
 //   await import("../lowdbx/lowdbX.js")
    //  _paraValue = "account=%s";
    //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>" + _paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_kick);


    let file = oplog_logDbdir()

    const curReqID = getcurReqID()

    let req = global['req' + curReqID]
    let agtid = req.cookies.agtid

    var rcd = {"agtid": agtid, "op": "踢玩家下线", "uname": uname, "类型": "踢玩家下线","txt":"踢玩家下线", "time": curDateTime()}
    pdo_insert(rcd, file);

    let rzt = ""

    try {
        rzt = await http_get(url);
        console.log(":1253" + rzt)
        let rztobj = JSON.parse(rzt);

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
                "httpStatuCode": e.httpStatuCode,
                "msg_to_ui": "发生错误，可能ip权限不足，需要加白" + obj.data
            }
            throw eobj;
        } else
            throw  e;


    }

    return rzt;


}


global["kick"] = kick;


function player_kickInform() {

    authChkFrt()

    var r = confirm("确定要踢下线吗");
    if (r == true) {

    } else {
        return
    }
    chkAop();
    authChk()

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv2").show()

    setTimeout(function () {


        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt = dsl_callFunCmdMode("player_kick", $("#uname").val())

        http_get_jqGet(callrmtRstapiUrl() + "kick " + $("#uname").val(), function (rzt) {

            try {
                $("#loaddiv2").hide()
                //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
                console.log("[player_kickInform] rzt=>" + rzt)
                rztobj = JSON.parse(rzt);


                if (rztobj.msg_to_ui)
                    alert(rztobj.msg_to_ui)
                else {
                    // log_err(e)

                    if (rztobj.type && rztobj.type == "ex") {
                        //err agt id error ex
                        httpRzt_clr = rztobj.httpRzt_clr;
                        let retObj = JSON.parse(httpRzt_clr);
                        let errmsgObj = retObj.errors;
                        alert("发生错误" + JSON.stringify(errmsgObj))
                    } else
                        alert("完成")
                }


                $("#loaddiv2").hide()

                // rztobj.data.totalScore=rztobj.data.score;
                //   window['bindJsonToTable'](rztobj)

            } catch (e) {
                $("#loaddiv2").hide()
                alert(e)
                log_err(e)
            }


        })


    }, 50)


}
