

function arrToTable(arr) {
    columns = [
        {data: 'userid'},
        {data: 'account'},
        {data: 'nickname'},

        {data: 'totalScore'},
        {data: 'allbet'},
        {data: 'statStr'}
    ]
   for(i=0;i<arr.length;i++)
   {
       let curobj= arr[i]

       curobj.statStr= window['playerStat' +curobj.status]
   }

// col cant be null,cant be "null" bdant be empty
    loadToDataTableV2(arr, "app3", columns,[[3, "desc"]])
}

//  apitype_PlayerScore
/**
 * searchPlayerClk
 */
function playerNScore237() {
    authChkFrt()
   // chkAop();
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


    let url = callrmtRstapiUrl()+ "searchPlayer " + $("#uname").val()
    console.log(url)
    var sccsFun = function (data) {
        console.log("[playerNScore237] rzt=>" + data)
        rztobj = JSON.parse(data);

        if(!rztobj.data)
        {

            arrToTable(rztobj);
            $("#loaddiv").hide();
            return;
        }

        if (rztobj.data.code == 0) {
          let  arr = [];

            rztobj.data.statStr = window['playerStat' + rztobj.data.status]
            arr.push(rztobj.data)
            //    console.log( window['loadToTable'])
            arrToTable(arr);

            // $("#app3 tr").each(function (idx, item) {
            //     // item.show();  item.css("display","");
            //     //  alert(item)
            //     //  alert($(item)[0])
            //     $(item).css("display", "");
            //     $(item).show();
            // })
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


/**
 *
 * @returns {string[]}
 */
function searchPlayerAll() {

    let file = getDbdir()+"/userColl.json";
   // pdo_insert(rcd2, file);
    return  pdo_query({},file);
}


global['findPlayer']=findPlayer
/**
 *
 * @param uname
 * @returns {Promise<*>}
 */
async function findPlayer(uname) {



    log_enterFun_console(arguments)


    if(!uname)
        return  searchPlayerAll()
    let timestamp = time();

    let _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_PlayerScore);
    //  alert("url=>"+url)
    var rzt;
    try {
        rzt = await http_get(url);
        console.log(":1240" + rzt)

        let rztobj = JSON.parse(rzt);
        if (rztobj.data.code != 0) {

            let errmsg = errcodeMsg(rztobj.data.code)
            rztobj.errmsg = errmsg;
         //   rzt = JSON.stringify(rztobj)
        }

        return rztobj;
    } catch (e) {
        checkWhiteIp(e, "");
        checkAgtidErr(e);
    }


}



global['searchPlayer']=searchPlayer
global['sumAllbet']=sumAllbet
function sumAllbet(userid) {
    try{

        let file = __dirname + "/../db_zhudan/zhudan_uid"+userid+".json";
//let rows = pdo_query({"account": uname}, file)
         if(!file_exists(file))
             return  null
        var {readFileSync, writeFileSync, appendFileSync} = require("fs");
        var txt = readFileSync(file).toString();
        console.log(" dbtxt len100 =>" + txt.substring(0, 100))
        let data_rows = JSON.parse(txt)

        require("esm-hook");
//  const _ = require('lodash').default
        const _ = require('lodash')


        let modifiedArr = data_rows.map(function(element){
            return element.ValidBet;
        });


        require("../libx/arr"  +   "")

        console.log(  array_sum(modifiedArr) )
        let arraySum = array_sum(modifiedArr);
        arraySum=arraySum.toFixed(2)
        return  arraySum ;
    }catch (e) {
        log_errV3(e,"userid:"+userid)
    }


}

/**
 * searchPlayersearchPlayer
 * @param uname
 * @returns {*}
 */
async function searchPlayer(acc) {



    log_enterFun_console(arguments)


    if(!acc)
        return  searchPlayerAll()
    let timestamp = time();

    let _paraValue = sprintf("account=%s", acc);
    echo("_paraValue==>" + _paraValue)
    require("./bizHttp")
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_PlayerScore);
    //  alert("url=>"+url)
    var rzt;
    try {
        rzt = await http_get(url);
        console.log(":1240" + rzt)

        let rztobj = JSON.parse(rzt);
        if (rztobj.data.code != 0) {

            let errmsg = errcodeMsg(rztobj.data.code)
            rztobj.errmsg = errmsg;

            rzt = JSON.stringify(rztobj)

        }
        rztobj.data.allbet=sumAllbet(rztobj.data.userid)
        rzt = JSON.stringify(rztobj)

        return rzt;
    } catch (e) {
        checkWhiteIp(e, "");
        checkAgtidErr(e);
    }
    return rzt

}