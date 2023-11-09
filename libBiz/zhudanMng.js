
global['zhudan_list']=zhudan_list
function zhudan_list(userid) {

    let visa = getLoginToken()

    if(!userid)
    {

        return zhudan_list_frmNet()
    }
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = __dirname + "/../db_zhudan/zhudan_uid" + userid+".json";

    return pdo_query({},dbf)
}


async function zhudan_list_frmNet(){

    let startTime = timeStamp()- 2 * 3600 * 1000;
    let _paraValue = "startTime=%s&endTime=%s"
    let endtime = startTime+ 24 * 3600 * 1000
    _paraValue = sprintf(_paraValue, startTime, endtime)
    let timestamp = timeStamp();
//type2023_gameorderPull=6
    let url = buildUrlNget_zhudan(_paraValue, timestamp, 6);
    log_info(url)
    let rzt = await http_get_jqStyle(url, null, jqFailFun)
    console.log(rzt)
    let rztobj = JSON.parse(rzt);
    if (rztobj.data.code !== 0) {
        let errmsg = errcodeMsg(rztobj.data.code)
        rztobj.errmsg = errmsg;
        rztobj.msg_to_ui = errmsg;
        rztobj.type = "ex";
        rztobj.typex = "ret_data_ex"
        throw rztobj;
    }
    return rztobj.data.list
}

function zhudan_list_web() {



    authChk()
    $().ready(function () {
        //do something
        var rzt =http_get_jqGet(callrmtRstapiUrl()+"zhudan_list "+$("#uid").val(),function (rzt){
            columns = [
                {data: 'UserID'},
                {data: 'Account'},
                {data: 'AllBet'},
                {data: 'ValidBet'},
                {data: 'GameStartTime'},
                {data: 'AgentID'},
            ]

            loadToDataTableV2(json_decode(rzt), "tab_oplog", columns, [[4, "desc"]])

        })
        //dsl_callFunCmdMode("oplog_qry")



        console.log(" rzt json str is :" + rzt.substring(0, 250))



        setTimeout(function () {
        }, 50)

    });

}