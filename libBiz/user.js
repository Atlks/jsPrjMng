try {
    global['authChk'] = authChk
    global['set_login_token_inMem'] = set_login_token

} catch (e) {
}

function set_login_token(obj) {
    log_fun_enter(arguments)

    global['agtid'] = obj.agtid
    global['agentid'] = obj.agtid

    global['desCode'] = obj.descode
    global['md5Code'] = obj.md5key

    try {
        window['agentid'] = obj.agtid
        window['agtid'] = obj.agtid
        window['desCode'] = obj.descode
        window['md5Code'] = obj.md5key
    } catch (e) {
    }

}


try {
    require("./libBiz/oplog.js")
} catch (e) {
}
try {
    require("./libx/autoload.js")
} catch (e) {
}
try {
    require("./oplog.js")
} catch (e) {
}
try {
    require("./libx/file.js")
} catch (e) {
}
try {
    require("../libx/file.js")
} catch (e) {
}


try {
    console.log(__dirname)    //C:\modyfing\jbbot\zmng\
    console.log(__filename)   //  C:\modyfing\jbbot\zmng\user.htm

    global['refresh_login_token'] = refresh_login_token
} catch (e) {
}

global['getLoginToken']=getLoginToken
// require("../libx/sys")
// console.log(getLoginToken())
function getLoginToken() {

    let token={};

    try{
        token.agtid= localStorage.getItem("agtid" );
        token.descode=localStorage.getItem("desCode" );
        token.md5key=localStorage.getItem("md5Code" );
        return token;
    }catch (e)
    {
        // only for web front use..
    }


    // localStorage.setItem("agentid", a.agtid);
    // localStorage.setItem("desCode", a.descode);
    // localStorage.setItem("md5Code",a.md5key);
    // "agtid": "111356",
    //     "descode": "26916DD661300B25",
    //     "md5key": "1BC0036763DE22EC",
    //     "lgky": "111356,26916DD661300B25,1BC0036763DE22EC"


    if ( isWinformEnv())
         {
       // process.env.USERPROFILE +
        let f = "__USERPROFILE__/lgky.json"
        let cmd = "readFileSyncx " + encodeURIComponent(f);
        let txt = window.external.callFun(cmd)
//alert(txt)
       // alert(txt)
        if(!txt || txt=="" || txt.length<5)
            return
         try{
             let obj = JSON.parse(txt)
             return obj;
         }catch (e) {
            let eobj={"cmd":cmd,"txt":txt,"e":e}
             alert(JSON.stringify(eobj))
         }


    }else
    {
       // require("./libx/file.js")
        let f = process.env.USERPROFILE + "/lgky.json"
        let txt =  readFileSyncx(f)
        if(!txt || txt=="")
            return

        let obj = JSON.parse(txt)
        return obj;
    }



}


/**
 *  // todo 需要兼容前后端 jyeron frt bkend
 */
function refresh_login_token() {

    //alert( fff(9999) )
    //
    if (funtion_exist("log_fun_enter"))
        log_fun_enter(arguments)
    else {
        //win env
        //   let callOBj={"fun":"log_fun_enter","args":arguments}
     let   callOBj = "log_fun_enter " + Array.prototype.slice.apply(arguments).join(" ");
        window.external.callFun(callOBj)
    }

    let obj = getLoginToken();
    if (!obj) {
        console.log("not login")
        return;
    }

    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {
        set_login_token(obj)
    }
    // },100)


}

global['isLoginCore'] = isLoginCore

function isLoginCore() {
    log_fun_enter(arguments)
    let f = process.env.USERPROFILE + "/lgky.json"
    console.log(" lgky file=>" + f)
    let obj = readFileAsJson((f))

    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {

        return true
    } else {
        return false;
    }
}


function isLogin() {
    log_fun_enter(arguments)

    let obj =getLoginToken()

    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {
        set_login_token(obj)
        return true
    } else {
        return false;
    }
}


function readFileAsJson(f) {
console.log(":161readFileAsJson")
    log_enterFun_console(arguments)
    console.log(f)
    let $s = readFileSyncx(f);
    console.log((" readFileAsJson txt:" + $s))
    return json_decode($s);
}


// require("../libx/autoload.js")
// authChk();

function process_env_USERPROFILE() {

}

try{
    global['playerStatV2']=playerStatV2
}catch (e) {
    
}
function playerStatV2() {
    chkAop();
    authChk()

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()

    timestamp = time();

    _paraValue = sprintf("account=%s", $("#uname").val());
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_playerStat);
    console.log(url)

    jqGet(url, function (data) {
        console.log("[playerStat237] rzt=>" + data)
        rztobj = JSON.parse(data);

        // $("#loaddiv").hide();

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

        // rztobj=JSON.parse(rzt);


        if (rztobj.data.code == 0) {
            arr = [];
            rztobj.data.totalScore=""
            rztobj.data.userid=""
            arr.push(rztobj.data)
            console.log(window['loadToTable'])


            columns= [
                { data: 'userid' },
                { data: 'account' },
                { data: 'totalScore' },
                { data: 'status' }
            ]
         //   alert(JSON.stringify(arr))
            loadToDataTable(arr, "app3",columns)

            $("#app3 tr").each(function (idx, item) {
                // item.show();  item.css("display","");
                //  alert(item)
                //  alert($(item)[0])
                $(item).css("display", "");
                $(item).show();
            })

        } else {
            require("./libx/excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        }
        // alert(window["errcodeMsg" + rztobj.data.code] + " " + data)


        $("#loaddiv").hide()

        //  console.log("[playerStat237] rzt=>" + rzt)


    }, jqFailFun)


}



function authChk() {
    log_fun_enter(arguments)


    let obj =  getLoginToken()
  //  alert(obj)
    if(!obj)
        throw "not_loginex@没有agtid,需要登录"

    console.log(obj)
    console.log("[8authChk ]agentid:" + obj.agentid)


    if (isLogin()) {
        set_login_token(obj)
    } else
        throw "not_loginex@没有agtid,需要登录"
    // if(!agentid)


    console.log("[authChk ]agentid:" + obj.agentid)
}

global['authChkCore'] = authChkCore

function authChkCore() {
    log_fun_enter(arguments)


    let obj =getLoginToken()

    console.log(obj)
    console.log("[8authChk ]agentid:" + obj.agentid)


    if (isLoginCore()) {

    } else
        throw "not_loginex@没有agtid,需要登录"
    // if(!agentid)


    console.log("[authChk ]agentid:" + obj.agentid)
}

function catchHdl(e, extype, catchFun) {

    if (typeof e === 'string') {
        //兼容性增强winform可能不支持str.startwith
        if (startwithV2(e,extype)) {

            catchFun();

        } else {
            throw e;
        }

    } else
        throw e;

}

function user_ini_ui() {


    log_fun_enter(arguments)

    refresh_login_token()
    try {
        authChk()
        console.log("[user_ini_ui] logined..")
        $("#unameLab").text(agentid);//show lab
        $("form").hide();
        $("#loginFm").hide();

        $("#logined").show();

    } catch (e) {


        catchHdl(e, "not_loginex", function () {
            console.log(e.split("@")[1])
            //  console.log(e)
            console.log("[ ] not login  ")
            $("form").show();
            $("#logined").hide();

        })

        //  console.log(e)
        //  console.log("[user_ini_ui] not login  ")


    }
}


function showExitArea() {

}

function showLoginArea() {

}

function user_ini_uiV2() {
    if (isLogin())
        showExitArea();
    else
        showLoginArea();

}


try {
    require("./libx/file.js")
} catch (e) {

}

try {
    require("../libx/file.js")
} catch (e) {

}


function set_login_tokenV2(a) {

}

function saveLoginFlag(a) {

    writeFile(  "__USERPROFILE__/lgky.json", json_encode(a));
    window['agentid'] = a.agtid
    set_login_tokenV2(a)
}






try {
    //global['reg'] = loginLocal
    global['loginLocal'] = loginLocal
    global['exit'] = exit
    global['isLogin'] = isLogin
    global['readFileAsJson'] = readFileAsJson
    global['user_ini_ui'] = user_ini_ui
} catch (e) {

}

