
function loginInFm() {


    if (!$("#uid").val().trim()) {
        alert("代理id,秘钥不能为空");
        return;
    }

    let arr = $("#uid").val().trim().split(",")



    global['agentid'] = arr[0]
    global['desCode'] = arr[1]
    global['md5Code'] = arr[2]
    window['agtid'] = arr[0]
    window['agentid'] = arr[0]
    window['desCode'] = arr[1]
    window['md5Code'] = arr[2]

    let a = {};

    a.agtid = arr[0];

    a.descode = arr[1];
    a.md5key = arr[2]
    a.lgky = $("#uid").val()
    window['curvisa']=a



    //saveLoginVisa  in fm

    var sucsFun= function (a2){


        Cookies.set ("agtid",curvisa.agtid,{ expires: 7, path: '/' });
        Cookies.set("desCode",curvisa.descode,{ expires: 7, path: '/' });
        Cookies.set ("md5Code", curvisa.md5key,{ expires: 7, path: '/' });


        Cookies.set('name', 'value', { expires: 7, path: '/' })
       let a= window['curvisa']
        localStorage.setItem("agtid", a.agtid);
          localStorage.setItem("agentid", a.agtid);
          localStorage.setItem("desCode", a.descode);
          localStorage.setItem("md5Code",a.md5key);
       //   cookie aleway err ,cant find jq cooke plugin
        // $.cookie ("agtid",a.agtid,{ expires: 7, path: '/' });
        // $.cookie ("desCode",a.descode,{ expires: 7, path: '/' });
        // $.cookie ("md5Code", arr[2],{ expires: 7, path: '/' });
        //set window var
        $("#unameLab").text(a.agtid)
        $("form").hide();
        $("#logined").show();
    }
    http_get_jqGet("api?callfun=login "+$("#uid").val().trim(),sucsFun)




    console.log("lgky arr:" + arr)

    // Cookies.set('loginkey', a.agtid.trim(), {expires: 7})
    //
    // let loginkey = Cookies.get('loginkey');
    // console.log("lgky:" + loginkey)
    // let arr2 = loginkey.trim().split(",")



    //console.log(json_encode(a))
    // writeFileSyncx(__dirname + "/cfg.json", json_encode(a));
    //alert("ok")




}


global['login']=login

/**
 * login dsc
 * @param uNkey
 */
function login(uNkey) {


    let arr = uNkey.trim().split(",")

    //  localStorage.setItem("loginkey", $("#uid").val());

    global['agentid'] = arr[0]
    global['desCode'] = arr[1]
    global['md5Code'] = arr[2]

    // localStorage.setItem("agentid", arr[0]);
    // localStorage.setItem("desCode", arr[1]);
    // localStorage.setItem("md5Code", arr[2]);

    let a = {};

    a.agtid = arr[0];

    a.descode = arr[1];
    a.md5key = arr[2]
    a.lgky = uNkey
    saveLoginVisa(a)



    console.log("lgky arr:" + arr)

    return a;

    // Cookies.set('loginkey', a.agtid.trim(), {expires: 7})
    //
    // let loginkey = Cookies.get('loginkey');
    // console.log("lgky:" + loginkey)
    // let arr2 = loginkey.trim().split(",")



}

function saveLoginVisa(a) {

    writeFileV3(  "__USERPROFILE__/lgky.json", json_encode(a));

  try{
      window['agentid'] = a.agtid
      set_login_tokenV2(a)
  }catch (e)
  {
      console.log(e)
  }

}





function loginLocal() {
    // a = {};
    //
    // a.agtid = $("#uid").val();
    // a.descode = $("#password").val();
    // a.md5key = $("#md5key").val();
    //  require("./libx/file.js")

    if (!$("#uid").val().trim()) {
        alert("代理id,秘钥不能为空");
        return;
    }

    let arr = $("#uid").val().trim().split(",")

    //  localStorage.setItem("loginkey", $("#uid").val());

    global['agentid'] = arr[0]
    global['desCode'] = arr[1]
    global['md5Code'] = arr[2]

    // localStorage.setItem("agentid", arr[0]);
    // localStorage.setItem("desCode", arr[1]);
    // localStorage.setItem("md5Code", arr[2]);

    let a = {};

    a.agtid = arr[0];

    a.descode = arr[1];
    a.md5key = arr[2]
    a.lgky = $("#uid").val()
    saveLoginFlag(a)



    console.log("lgky arr:" + arr)

    // Cookies.set('loginkey', a.agtid.trim(), {expires: 7})
    //
    // let loginkey = Cookies.get('loginkey');
    // console.log("lgky:" + loginkey)
    // let arr2 = loginkey.trim().split(",")

    $("#unameLab").text(a.agtid)

    //console.log(json_encode(a))
    // writeFileSyncx(__dirname + "/cfg.json", json_encode(a));
    //alert("ok")

    $("form").hide();
    $("#logined").show();


}

