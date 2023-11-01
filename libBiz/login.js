  chkRzt_pass="pass";
  chkRzt_crdtNotExist="chkRzt_crdtNotExist"
  chkRzt_unameFmtErr="chkRzt_unameFmtErr"
  chkRzt_unameNotExist="chkRzt_unameNotExist"
  function not_exist(凭据) {
      if(凭据)
          return  false;
      return true;
  }

  function NotExistUname(用户名) {
      return undefined;
  }


  function chkPass(检查结果) {
      return 检查结果
  }


  function chkNotPass(检查结果) {
      return !chkPass(检查结果);
  }

  function if_login_credent_isPwdType_issueLoginCrdt(凭据) {
      return undefined;
  }

  function addOplog(用户用户名登录时间当前时间) {
      return undefined;
  }

  /**
   * loginV2
   * @param 凭据
   */
  function loginV2(凭据) {


      let 检查结果 = check_login_credentials(凭据);
      ifx(chkPass(检查结果),
          if_login_credent_isPwdType_issueLoginCrdt(凭据),
          addOplog("用户 (@用户名@)登录，时间 @当前时间@")


      )

      ifx(chkNotPass(检查结果), tipsNend(检查结果))


  }

  /**
 * 检查登录凭据
 */
function check_login_credentials(凭据)
{
    ifx(not_exist(凭据), tipsNend(chkRzt_crdtNotExist))
    ifx( 凭据.用户名.length < 3, tipsNend(chkRzt_unameFmtErr))
    ifx(NotExistUname(凭据.用户名), tipsNend(chkRzt_unameNotExist))
    // 如果(凭据.类型 == "密码", 检查密码(凭据))
    // 如果(凭据.类型 == "cookie", 检查cookie(凭据))

    return chkRzt_pass;
}


  /**
   * 发放登录凭据
   * @param 用户名

   * @constructor
   */
  function Issue_login_credentials(用户名) {

    过期日 = 计算过期日("@当前日期@+7")
    return () => {

        console.log("发放登录凭据....")
        var 登录凭据 = {"用户名": 用户名, "过期日": 过期日, "签名": "4546fdafsd"};
        登录凭据.加密效验码 = md5(用户名 + 过期日)
        保存登录凭据(登录凭据)
    }

}





function loginInFm() {


    if (!$("#uid").val().trim()) {
        alert("代理id,秘钥不能为空");
        return;
    }

    let arr = $("#uid").val().trim().split(",")
    if(arr.length<3)
    {
        alert("格式不对，检查格式为》：    代理id,descode,md5code")
        return;
    }



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

    var sucsFun= function (dt){

      console.log(" ajax sucsFun dt=> "+dt)
        let rtobj=JSON.parse(dt)
        if(rtobj?.type=="ex")
        {
            alert(rtobj.errmsg)
            return;
        }

      //  alert("sucsFun")
        Cookies.set ("agtid",curvisa.agtid,{ expires: 7, path: '/' });
        Cookies.set("desCode",curvisa.descode,{ expires: 7, path: '/' });
        Cookies.set ("md5Code", curvisa.md5key,{ expires: 7, path: '/' });


        Cookies.set('name', 'value', { expires: 7, path: '/' })
       let a= window['curvisa']
        localStorage.setItem("agtid", a.agtid);
          localStorage.setItem("agentid", a.agtid);
          localStorage.setItem("desCode", a.descode);
          localStorage.setItem("md5Code",a.md5key);


        qryAgtBalINweb()
       //   cookie aleway err ,cant find jq cooke plugin
        // $.cookie ("agtid",a.agtid,{ expires: 7, path: '/' });
        // $.cookie ("desCode",a.descode,{ expires: 7, path: '/' });
        // $.cookie ("md5Code", arr[2],{ expires: 7, path: '/' });
        //set window var
        $("#unameLab").text(a.agtid)
        $("form").hide();
        $("#logined").show();
        window.location.reload()
    }
    http_get_jqGet(callrmtRstapiUrl()+"login "+$("#uid").val().trim(),sucsFun,jqFailFun)




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

global['sendLoginVisa']=sendLoginVisa
  /**
   * save visa to gloal thread local var map
   * @param req
   */
  function sendLoginVisa(req) {
      visa = {"agtid": req.cookies.agtid, "desCode": req.cookies.desCode, "md5Code": req.cookies.md5Code}


      const curReqID=getcurReqID()
      global['agtid'+curReqID]=req.cookies.agtid
      global['agentid'+curReqID]=  global['agtid'+curReqID]
      global['desCode'+curReqID] = req.cookies.desCode
      global['md5Code'+curReqID] = req.cookies.md5Code
      global['visa'+curReqID] =visa

      let file=__dirname+"/../visas/visa"+curReqID+".json"

      const fs = require("fs");
      const path = require("path");
      fs.mkdirSync(path.dirname(file), {recursive: true});
      writeFileV3(file,json_encode(visa))


  }


global['login']=login

/**
 *  todo  jeig global is readly global var...another req should no global
 * login dsc
 * @param uNkey
 */
async function login(uNkey) {

    global['visa']=null

     //    如果(不存在(凭据), 提示并终止(检查结果_凭据不存在)),
    //    如果(长度(凭据.用户名) < 3, 提示并终止(检查结果_凭据无效_用户名无效)),
    let arr = uNkey.trim().split(",")

    //  localStorage.setItem("loginkey", $("#uid").val());

    //todo here glboal var should del...readl global bcs...
    global['agentid'] = arr[0]
    global['desCode'] = arr[1]
    global['md5Code'] = arr[2]

    // localStorage.setItem("agentid", arr[0]);
    // localStorage.setItem("desCode", arr[1]);
    // localStorage.setItem("md5Code", arr[2]);

    let a = {};

    a.agtid = arr[0];
    a.agentid = arr[0];
    a.descode = arr[1];
    a.desCode= a.descode
    a.md5key = arr[2]
    a.md5Code= a.md5key
    a.lgky = uNkey



   // saveLoginVisa(a)


    console.log("lgky arr:" + arr)


    //-----检查凭据有效性
    let rzt = await qryAgtBal()
    let rztobj = JSON.parse(rzt);
    if (rztobj.type == "ex") {
        throw "alrtEx@" + rztobj.msg_to_ui
    }


    //发放登录凭据(凭据.用户名)  save in 在cookie
    //添加操作日志(

    return a;

    // Cookies.set('loginkey', a.agtid.trim(), {expires: 7})
    //
    // let loginkey = Cookies.get('loginkey');
    // console.log("lgky:" + loginkey)
    // let arr2 = loginkey.trim().split(",")


}



  /**
   *
   * @param a
   */
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


/**
 * DEP
 */
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

