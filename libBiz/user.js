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

global['getLoginToken'] = getLoginToken
// require("../libx/sys")
// console.log(getLoginToken())



global['findPlayerV2']=findPlayerV2
async function findPlayerV2(uname,visa) {



    log_enterFun_console(arguments)


    if(!uname)
        return  searchPlayerAll()
    let timestamp = time();

    let _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNgetV4(_paraValue,   apitype_PlayerScore,visa);
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


/**
 *
 * @returns {{desCode: *, md5Code: *, agtid: *}|*|{}}
 */
function getLoginToken() {


    try {
        let token = {};
        token.agtid = localStorage.getItem("agtid");
        token.descode = localStorage.getItem("desCode");
        token.md5key = localStorage.getItem("md5Code");
        return token;
    } catch (e) {
        // only for web front use..
    }

    if (global['visaImEnv'])
        return global['visaImEnv']   //env im im env

    const curReqID = getcurReqID()
    let req = global['req' + curReqID];
    //   req.cookies
    // if(req)
    // {
    if (req) {
        if (req.query.callfun.startsWith("login")) {
            let callfun = req.query.callfun;
            callfun = callfun.trim()
            let arrx = callfun.split(" ");
            arrx = array_filter(arrx);
            let fun = arrx[0]
            let kystr = arrx[1]
            let uNkey = kystr

            let arr = uNkey.split(",")
            let a = {};

            a.agtid = arr[0];
            a.agentid = arr[0];
            a.descode = arr[1];
            a.desCode = a.descode
            a.md5key = arr[2]
            a.md5Code = a.md5key
            a.lgky = uNkey
            return a;
            // var token=  getLoginToken()
            // var desCode=token.desCode
            // var agentid=token.agtid
            // var md5Code=token.md5Code

        } else {
            //normal model
            let reqQry = req.query;  //msg cmd cfg
            var desCode = req.cookies.desCode
            var agentid = req.cookies.agtid
            var md5Code = req.cookies.md5Code
            return req.cookies;
        }
    }


    // }else
    // { //maybe im env
    //     var token=  getLoginToken()
    //     var desCode=token.desCode
    //     var agentid=token.agtid
    //     var md5Code=token.md5Code
    // }

    //for api login chek
    //   return global['visa'];


    // localStorage.setItem("agentid", a.agtid);
    // localStorage.setItem("desCode", a.descode);
    // localStorage.setItem("md5Code",a.md5key);
    // "agtid": "111356",
    //     "descode": "26916DD661300B25",
    //     "md5key": "1BC0036763DE22EC",
    //     "lgky": "111356,26916DD661300B25,1BC0036763DE22EC"


    if (isWinformEnv()) {
        // process.env.USERPROFILE +
        let f = "__USERPROFILE__/lgky.json"
        let cmd = "readFileSyncx " + encodeURIComponent(f);
        let txt = window.external.callFun(cmd)
//alert(txt)
        // alert(txt)
        if (!txt || txt == "" || txt.length < 5)
            return
        try {
            let obj = JSON.parse(txt)
            return obj;
        } catch (e) {
            let eobj = {"cmd": cmd, "txt": txt, "e": e}
            alert(JSON.stringify(eobj))
        }


    } else {
        // require("./libx/file.js")
        let f = process.env.USERPROFILE + "/lgky.json"
        let txt = readFileSyncx(f)
        if (!txt || txt == "")
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
        let callOBj = "log_fun_enter " + Array.prototype.slice.apply(arguments).join(" ");
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

global['isExistUser'] = isExistUser

/**
 *
 * @param acc
 * @returns {boolean}
 */
function isExistUser(acc) {
    let file = getDbdir() + "/userColl.json";

    let rows = pdo_query({"account": acc}, file)
    if (rows.length == 0)
        return false
    if (rows.length > 0)
        return true;
}

function isLogin() {
    log_fun_enter(arguments)

    let obj = getLoginToken()
    console.log("[8authChk ]getLoginToken:" + obj)
    if (obj.agtid)
        return true
    else
        return false;
    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {
        set_login_token(obj)
        return true
    } else {
        return false;
    }
}

function  find()
{
    searchPlayer()
    findPlayer
}

global['readFileAsJsonV2']=readFileAsJsonV2
function readFileAsJsonV2(f,dft=[]) {

    if(!file_exists(f))
        return dft
    console.log(":161readFileAsJson")
    log_enterFun_console(arguments)
    console.log(f)
    let $s = readFileSyncx(f);
    console.log((" readFileAsJson txt:" + $s.substr(0,300)))
    return json_decode($s);
}


global['readFileAsJson']=readFileAsJson
function readFileAsJson(f) {
    console.log(":161readFileAsJson")
    log_enterFun_console(arguments)
    console.log(f)
    let $s = readFileSyncx(f);
    if($s.trim()=="")
        $s="[]"
    console.log((" readFileAsJson txt:" +   $s.substr(0,300)))
    return json_decode($s);
}


// require("../libx/autoload.js")
// authChk();

function process_env_USERPROFILE() {

}

try {
    global['playerStatV2'] = playerStatV2
} catch (e) {

}

function playerStatV2() {
    authChkFrt()
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
            rztobj.data.totalScore = ""
            rztobj.data.userid = ""
            arr.push(rztobj.data)
            console.log(window['loadToTable'])


            columns = [
                {data: 'userid'},
                {data: 'account'},
                {data: 'totalScore'},
                {data: 'status'}
            ]
            //   alert(JSON.stringify(arr))
            loadToDataTable(arr, "app3", columns)

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


global['addUserAtRmt'] = addUserAtRmt

async function addUserAtRmt(uname, nickname) {


    //判断是否存在
    // let rzt2= await searchPlayer(uname)
    // let rztobj = JSON.parse(rzt2);
    // if(rztobj.data.code==0)
    //     throw "alrtEx@玩家已经存在"

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

    let rzt = await http_get_jqStyle(url, function (data) {
        rzt = data

    }, jqFailFun)


    return rzt;
}

function authChkFrt() {
    if (Cookies.get('agtid')) {
    } else {
        throw "not_loginex@没有agtid,需要登录"
    }
}

/**
 * dep todo   chk cookie from web api
 * @returns {boolean}
 */
function authChk() {

    return true;
    log_fun_enter(arguments)


    let obj = getLoginToken()
    //  alert(obj)
    if (!obj)
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


    let obj = getLoginToken()

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
        if (startwithV2(e, extype)) {

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
    log_fun_enter(arguments)
    if (isLogin()) {
        console.log("[user_ini_uiV2] logined true")
        // showExitArea
        $("form").hide();
        $("#loginFm").hide();
        $("#logined").show();

    } else {
        console.log("[user_ini_uiV2] logined false")
        //showLoginArea();
        $("form").show();
        $("#loginFm").show();
        $("#logined").hide();
    }


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

    // writeFile(  "__USERPROFILE__/lgky.json", json_encode(a));
    // window['agentid'] = a.agtid
    // set_login_tokenV2(a)
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

