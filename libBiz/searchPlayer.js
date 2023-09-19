//  apitype_PlayerScore
function playerNScore237() {
    chkAop();
    authChk()

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info("");
    log_info("");
    log_info("");
    log_info("*********=>" + funname + arg)

    $("#loaddiv").show()


    let url = "api?callfun=searchPlayer " + $("#uname").val()
    console.log(url)
    var sccsFun = function (data) {
        console.log("[playerStat237] rzt=>" + data)
        rztobj = JSON.parse(data);


        if (rztobj.data.code == 0) {
            arr = [];

            rztobj.data.statStr = window['playerStat' + rztobj.data.status]
            arr.push(rztobj.data)
            //    console.log( window['loadToTable'])

            columns = [
                {data: 'userid'},
                {data: 'account'},
                {data: 'totalScore'},
                {data: 'statStr'}
            ]

// col cant be null,cant be "null" bdant be empty
            loadToDataTable(arr, "app3", columns)

            $("#app3 tr").each(function (idx, item) {
                // item.show();  item.css("display","");
                //  alert(item)
                //  alert($(item)[0])
                $(item).css("display", "");
                $(item).show();
            })
        } else {

            alert(rztobj.errmsg )
        }


        //  console.log("[playerStat237] rzt=>" + rzt)

        $("#loaddiv").hide();


    }



    http_get_jqGet(url,sccsFun,jqFailFun)


   // sccsFun(rzt);

    //  jqGet(url, , jqFailFun)


}

// $("#loaddiv").hide();

//rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
//  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


//  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

// rztobj=JSON.parse(rzt);


global['searchPlayer']=searchPlayer
/**
 * searchPlayersearchPlayer
 * @param uname
 * @returns {*}
 */
async function searchPlayer(uname) {

    log_enterFun_console(arguments)
    let timestamp = time();

    let _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_PlayerScore);
    //  alert("url=>"+url)
    var rzt;
    try {
        rzt = await http_get($url);
        console.log(":1240" + rzt)

        let rztobj = JSON.parse(rzt);
        if (rztobj.data.code != 0) {

            let errmsg = errcodeMsg(rztobj.data.code)
            rztobj.errmsg = errmsg;
            rzt = JSON.stringify(rztobj)
        }

        return rzt;
    } catch (e) {
        checkWhiteIp(e, "");
        checkAgtidErr(e);
    }
    return rzt

}