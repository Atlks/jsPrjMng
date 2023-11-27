
global['zhudan_list']=zhudan_list
async function zhudan_list(acc, startDt, endDt) {

    let visa = getLoginToken()

    if (acc=="acc@") {

        return zhudan_list_frmNet()
    }else
        acc=acc.substring(4)

    let plyr_jsonobj = await findPlayerV2(acc, visa)
    let userid=plyr_jsonobj.data.userid;
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = __dirname + "/../db_zhudan/zhudan_uid" + userid + ".json";

    if(startDt=="startdt@")
        return pdo_query({}, dbf)


    let rows=pdo_query({}, dbf);
    return  rows.filter((e) => {
      let startDtTrue=startDt.substring(8)
        startDtTrue=startDtTrue+" 00:00:00"
        let endDtPrm=endDt.substring(6)
        endDtPrm =endDtPrm+" 23:59:59"
        let endDtPrm_dt=new Date(endDtPrm)
        let sttdtDate=new Date(startDtTrue)
        let curdate=new Date(e.GameStartTime)
        if(curdate>sttdtDate && curdate<endDtPrm_dt)
            return true;

    });
   // return pdo_query({}, dbf)
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

        if($("#dt1").val()!="")
        {
            var startDt=$("#dt1").val()
            startDt=startDt+"T00:00:00"
        }else
        {
            var startDt="null"
        }



        if($("#dt2").val()!="")
        {
            var endDt=$("#dt2").val()
            endDt=endDt+"T23:59:59"
        }else {
            var endDt=""
        }

        let prm="acc@"+$("#acc").val()+" startdt@"+$("#dt1").val()+" enddt@"+$("#dt2").val()

        //do something
        var rzt =http_get_jqGet(callrmtRstapiUrl()+"zhudan_list "+prm,function (rzt){
            columns = [
                {data: 'UserID'},
                {data: 'Account'},
                {data: 'AllBet'},
                {data: 'ValidBet'},
                {data: 'GameStartTime'},
                {data: 'AgentID'},
            ]

            loadToDataTableV2(json_decode(rzt), "tab_oplog", columns, [[4, "desc"]])



            //-------------avdBetSum
            let dtRows=json_decode(rzt)
            let allbet = sumColV2((e) => e.ValidBet, dtRows)
            $("#avdBetSum").text(allbet)

        })
        //dsl_callFunCmdMode("oplog_qry")



        console.log(" rzt json str is :" + rzt.substring(0, 250))





        setTimeout(function () {
        }, 50)

    });

}