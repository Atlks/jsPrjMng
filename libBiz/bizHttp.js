




function callRmtFun($exprs, f, failF) {

    let url="api?callfun="+$exprs;

    console.log(" [http_get_jqget] " + $url)


    // log_info("\r\n");

    log_info("  [http_get_jqget] url=>" + $url);

    $.get($url, function (data) {
        console.log("[http_get_jqget] ret=>" + $url)
        log_info(" [jqGet] ret=>" + data);
        if(f)
            f(data)
    }, "text").fail(failF);
}



//node env
try {
    window['buildUrlNget_x'] = buildUrlNget_x
} catch (e) {

}

try {
    global['checkWhiteIp'] = checkWhiteIp
} catch (e) {

}

/**
 * checkWhiteIp n cvt ex type
 * @param e
 * @param uname
 */
function checkWhiteIp(e, uname) {
    if (e.httpStatuCode == 502) {
        let rzt = e.httpRzt_clr;
        //  let obj = json_decode(rzt);
        let eobj = {
            "[checkWhiteIp]  cur uname": uname,
            "httpRzt": rzt,
            "type": "ex","typex": "ip_auth_ex",
            "httpStatuCode":e.httpStatuCode,
            "msg_to_ui": "发生错误，可能ip权限不足，需要加白" + rzt
        }
        throw eobj;
    } else
        throw  e;
}

global['buildUrlNget_x'] = buildUrlNget_x

function buildUrlNget_x(_paraValue, timestamp, apitype_xxx) {
    var url;
    if (isWinformEnv()) {
        //noteice if  _paraValue empty ..
        if (_paraValue == "")
            _paraValue = "__empty__"
        let funExprs = "buildUrlNgetV2 " + _paraValue + " " + timestamp + " " + apitype_xxx;

        //  alert(funExprs)
        url = window.external.callFun(funExprs);
    } else
        url = buildUrlNgetV2(_paraValue, timestamp, apitype_xxx);
    return url;


}


global['buildUrlNgetV3'] = buildUrlNgetV3



function buildUrlNgetV3(_paraValue, timestamp, apitype_shangfen) {

    if (_paraValue == "__empty__")
        _paraValue = ""
    log_enterFun(arguments)

    authChk()
    var paraValue = ""

    paraValue = aes_encrypt_ecbX(_paraValue, desCode);


    md5key = md5(sprintf("%s%s%s", agentid, timestamp, md5Code));


    $url_tpmplt = "https://ng.mqbsx.com/GameHandle?agentid=%s&timestamp=%s&type=%s&paraValue=%s&key=%s";
    $url = sprintf($url_tpmplt, agentid, timestamp, apitype_shangfen, urlencode(paraValue), md5key);


    return $url;
}


try{
    require("./libx/aes.js")
}catch(e){}

try{
    require("./aes.js")
}catch(e){}


// v2 just for reflct jyeronsin
global['buildUrlNgetV2'] = buildUrlNgetV2

function buildUrlNgetV2(_paraValue, timestamp, apitype_shangfen) {

    if (_paraValue == "__empty__")
        _paraValue = ""
    log_enterFun(arguments)

    authChk()

    paraValue = aes_encrypt(aes_mode_ECB(), _paraValue, desCode);
    md5key = md5(sprintf("%s%s%s", agentid, timestamp, md5Code));


    $url_tpmplt = "https://ng.mqbsx.com/GameHandle?agentid=%s&timestamp=%s&type=%s&paraValue=%s&key=%s";
    $url = sprintf($url_tpmplt, agentid, timestamp, apitype_shangfen, urlencode(paraValue), md5key);


    return $url;
}


function bzGet($url, f) {
    jqGet($url, f, failF);
}

try {
    window['jqFailFun'] = jqFailFun
} catch (e) {
}

global['jqFailFun']=jqFailFun;
function jqFailFun(jqXHR, textStatus, errorThrown) {

    $("#loaddiv").hide();
    let arg = JSON.stringify(arguments);
    log_err(arg)


    //if( jqXHR?. responseJSON?.errors )
    //for 兼容。net webbrtower edge  ie11 ,not spt nullsafe sync
    if (jqXHR && jqXHR.responseJSON && jqXHR.responseJSON.errors) {
        alert("参数错误 检查代理id " + JSON.stringify(jqXHR.responseJSON.errors));
        return;
    }

    if (jqXHR.status == 403) {
        alert("错误 检查ip加白处理 " + jqXHR.responseText);
        return;
    }


    if (jqXHR.status == 400) {
        alert("错误 检查参数 " + jqXHR.responseText);
        return;
    }


}