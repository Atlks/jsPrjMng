
function adduserFm() {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info("");
    log_info("");
    log_info("");
    log_info("*********=>" + funname + arg)


    timestamp = time();


    let uname = $("#uname").val();
    if (uname == "") {
        $("#loaddiv").hide();
        alert("用户名不能为空")

        return
    }


    //
    // catchHdl(e, "not_loginex", function () {
    //     console.log(e.split("@")[1])
    //     //  console.log(e)
    //     console.log("[ ] not login  ")
    //     $("form").show();
    //     $("#logined").hide();
    //
    // })


    $("#loaddiv").show()
    let nickname = $("#nknm").val();



    http_get_jqGet(callrmtRstapiUrl()+"addUser "+uname+" "+nickname,function (data)
    {
        console.log("[" + funname + "] rzt=>" + data)

        if(data.startsWith("alrtEx"))
        {
            throw  data;
        }
        rztobj = JSON.parse(data);

        // $("#loaddiv").hide();

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

        // rztobj=JSON.parse(rzt);


        if (rztobj.data.code == 0) {
            alert("成功")
            arr = [];
            arr.push(rztobj.data)
            //    console.log( window['loadToTable'])
            //  loadToTableVue(arr, "app3")

            // $("#app3 tr").each((idx, item) => {
            //     // item.show();  item.css("display","");
            //     //  alert(item)
            //     //  alert($(item)[0])
            //     $(item).css("display", "");
            //     $(item).show();
            // })
        } else {
            // require(libdir + "excel.js")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert(errmsg + " ")
        }


        //  console.log("[playerStat237] rzt=>" + rzt)

        $("#loaddiv").hide();

    })


}

global['addUserCore']=addUserCore
/**
 *
 * @param uname
 * @param nickname
 * @returns {Promise<void>}
 */
async function addUserCore(uname, nickname) {
    // _paraValue = sprintf("account=%s", $("#uname").val());
    let _paraValue = "account=%s&nickname=%s&headindex=0&linecode=10001_1&lastloginip=255.224.22.12&gamebackurl=www.test.com&logintype=1&gameid=0";
    _paraValue = sprintf(_paraValue, uname, nickname);

    let timestamp = time();
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_regLogin);
    console.log(url)
    log_info(url)


    // alert(rcd)

    let rzt=   await http_get_jqStyle(url, function (data) {
        rzt = data

    }, jqFailFun)

    console.log(rzt)
}



global['addUser']=addUser
async function addUser(uname, nickname) {






    //判断是否存在
    let rzt2= await searchPlayer(uname)
    let rztobj = JSON.parse(rzt2);
    if(rztobj.data.code==0)
        throw "alrtEx@玩家已经存在"

    // alert(rcd)


    //---------------------add    user core

    // _paraValue = sprintf("account=%s", $("#uname").val());
    let _paraValue = "account=%s&nickname=%s&headindex=0&linecode=10001_1&lastloginip=255.224.22.12&gamebackurl=www.test.com&logintype=1&gameid=0";
    _paraValue = sprintf(_paraValue, uname, nickname);

    let timestamp = time();
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_regLogin);
    console.log(url)
    log_info(url)

    let rzt=   await http_get_jqStyle(url, function (data) {
        rzt = data

    }, jqFailFun)


    let visa=getLoginToken()
    let agtid=visa.agtid
    try{//------------add other prop
        let rzt2= await searchPlayer(uname)
        let rztobj = JSON.parse(rzt2);


        // "status": 0,
        //     "userid": 32077089,
        //     "account": "777",
        //     "totalScore": 885.0,
        //is user not exist add user
       let file = getDbdir()+"/userColl.json";

        let rows=pdo_query({"account":uname},file)
        if(rows.length==0)
        {

            let rcd2={"status":0,"totalScore":rztobj.data.totalScore,"userid":rztobj.data.userid,"nickname":nickname,"agtid": agtid,"account": uname,"time": curDatetimeV2()}

            pdo_insert(rcd2, file);
        }else
        {
            console.log("alread have row  uname=>"+uname)
        }

    }catch (e){
        console.log(e)

        // if(typeof  e =="string")
        // if(e.startsWith("alrtEx"))
        //         throw  e


    }


    //-----------add op log
    try {
        var rcd = {"txt": "添加用户","agtid": agtid, "op": "添加用户", "uname": uname, "类型": "添加用户", "time": curDatetimeV2()}

        oplog_add(rcd)
    } catch (e) {
        console.log(e)
        log_errV2(e, arguments)
    }

    return rzt;
}