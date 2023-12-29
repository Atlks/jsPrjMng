//const _ = require("lodash");

global['addScore']=addScore
/**
 *
 * @param uname
 * @param score
 * @returns {Promise<any|string>}
 */
async function addScore(uname, score) {
    log_enterFun(arguments)
    authChk()  //alslo refresh global agtid des md5key
    //  require("./fp_ati1990")

    //-----------add socre net rmt

    let visa = getLoginToken();
    let agentid = visa.agtid
    let agtid = visa.agtid
    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNgetV2(_paraValue, timestamp, apitype_shangfen);


    log_info(url);
    let rzt = ""
    try {
        rzt = await http_get(url);
    } catch (e) {
        checkWhiteIp(e, uname);
        checkAgtidErr(e);
    }


    //-------------------------add local score log op
    try {
        var rztobj = JSON.parse(rzt);
        if (rztobj.data.code == 0) {
            //  await import("../lowdbx/lowdbX.js")

            let visa = getLoginToken()
            let dbdir = __dirname + "/../db/" + visa.agtid + "/";
            console.log("dbdir=>" + dbdir)


            var rcd = {"agtid": agtid, "uname": uname, "score": score, "类型": "上分", "time": curDateTime()}
            let dbfile = dbdir + "scoreLogColl.json";
            await pdo_insert(rcd, dbfile);


//----------------------updt score local
            await updtUserScore(uname)


        } else {
            require("../libx/sys")
            require(libdir + "excel")
            requirex("../libx/excel.js")
            let errmsg = errcodeMsg(rztobj.data.code)
            rztobj.typex = "ex", rztobj.namex = "Bls_ex"
            rztobj.errmsgx = errmsg
            return rztobj;

        }

    } catch (e) {
        let eobj = {"stack": e.stack, "msg": e.message}
        log_err(eobj)
    }


    // else
    //     alert(rzt)


    return rzt;


}


async function updtUserScore(uname) {
    // let obj=await  findPlayer(uname)
    try{
        await  updateBal(uname)
    }catch (e) {
        log_errV3(e,uname)
    }



}


global['updateBal'] = updateBal


/**
 *  acc_updateBal_local
 * @param acc
 */
async function updateBal(acc) {
    let uname = acc
    let rzt2 = await searchPlayer(uname)
    let rztobj = JSON.parse(rzt2);
    let uid = rztobj.data.userid
    let nknm = rztobj.data.account


    if (rztobj.data.code == 0) {


        if (isExistUser(uname)) {
            let file2 = getDbdir() + "/userColl.json";
            let data2_conn = pdo_connV3(file2)
            let rzt = pdo_query_fromData({"account": uname}, data2_conn)
            rzt[0]['score'] = rztobj.data.totalScore
            rzt[0]['totalScore'] = rztobj.data.totalScore
            rzt[0]['status'] = rztobj.data.status
            //   rzt[0]['nickname'] = rztobj.data.nickname

            pdo_save(data2_conn, file2)


        }
    }
}

global['Acc_logDbdir'] = Acc_logDbdir

function Acc_logDbdir() {
    let dbfile = getDbdir() + "scoreLogColl.json";
    return dbfile;
}

function chkSxfUname() {
    if ($("#uname_sxf").val() == "") {
        throw ("玩家账户不能为空")
    }

    if ($("#score_sxf").val() == "") {
        throw ("上下分不能为空")
    }

    if (!is_int($("#score_sxf").val())) {
        throw ("上下分需为整数")
    }
}

function orderQryShagnxiafen415() {
    authChkFrt()
    // chkAop()
    authChk()
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    $("#loaddiv").show()

//return

    setTimeout(function () {


        http_get_jqGet(callrmtRstapiUrl() + "QryShangxiafen", function (rzt) {

            let columns = [
                {data: 'uname'},
                {data: '类型'},
                {data: 'score'},
                {data: 'time'}
            ]

            loadToDataTableV2(json_decode(rzt), "tab_sxf", columns, [[3, "desc"]])

            //  window['loadToTable'](json_decode(rzt),"tab_sxf")
            // console.log("[playerStat237] rzt=>" + rzt)

            $("#tab_sxf tr").each(function (idx, item) {
                // item.show();  item.css("display","");
                //  alert(item)
                //  alert($(item)[0])
                $(item).css("display", "");
                $(item).show();
            })
            $("#loaddiv").hide()
        })
        // rzt = dsl_callFunCmdMode("score_orderQryShagnxiafen", $("#uname").val())


    }, 50)

}


/**
 * QryShangxiafen shangfen xiafen kexiafen
 */
function accFiles() {
}


try {
    // 玩家状态(0离线，1大厅，2游戏中)
    window['playerStat0'] = '离线'
    window['playerStat1'] = '大厅'
    window['playerStat2'] = '游戏中'
} catch (e) {

}


/**
 * shangfen.js xiafen  kexiafenBal
 */
function allFileScore() {

}







