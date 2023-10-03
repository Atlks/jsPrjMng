//const _ = require("lodash");



global['updateBal']=updateBal


/**
 *  acc_updateBal
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

global['Acc_logDbdir']=Acc_logDbdir
function Acc_logDbdir()
{
   let dbfile =getDbdir()+"scoreLogColl.json";
    return dbfile;
}

function chkSxfUname() {
    if ($("#uname_sxf").val() == "") {
        throw ("玩家账户不能为空")
    }

    if ($("#score_sxf").val() == "") {
        throw ("上下分不能为空")
    }

    if(!is_int($("#score_sxf").val())){
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



        http_get_jqGet(callrmtRstapiUrl()+"QryShangxiafen",function (rzt){

            let columns = [
                {data: 'uname'},
                {data: '类型'},
                {data: 'score'},
                {data: 'time'}
            ]

            loadToDataTableV2(json_decode(rzt), "tab_sxf", columns,[[3, "desc"]])

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
function accFiles()
{}


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







