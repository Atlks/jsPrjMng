



function exitInfm() {
    $("form").show();
    $("#logined").hide();
    global['agentid'] = null
    global['desCode'] = null
    global['md5Code'] = null
    window['agentid'] = null
    window['desCode'] = null
    window['md5Code'] = null
    window['agtid'] = null
    localStorage.removeItem("agtid" );
    localStorage.removeItem("agentid" );
    localStorage.removeItem("desCode" );
    localStorage.removeItem("md5Code" );



      localStorage.removeItem("agentid");


    Cookies.remove('agtid')
    Cookies.remove('desCode')
    Cookies.remove('md5Code')

    let a = {};

    a.agtid = null

    a.descode = null;
    a.md5key = null
    a.lgky = null

    http_get_jqGet(callrmtRstapiUrl()+"exit")

    console.log(agentid)
}

global['exit']=exit

/**
 *
 */
function exit() {
    // $("form").show();
    // $("#logined").hide();
    global['agentid'] = null
    global['desCode'] = null
    global['md5Code'] = null

    //  localStorage.removeItem("agentid");



    let a = {};

    a.agtid = null

    a.descode = null;
    a.md5key = null
    a.lgky = null
    //bcsd maybe im env need use
   // writeFile("__USERPROFILE__/lgky.json",json_encode(a))
    console.log(agentid)
}