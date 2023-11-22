global['qryAgtBal'] = qryAgtBal


/**
 *
 */
function qryAgtBalINweb() {



    $("#loaddiv").show()
    if (!isLogin()) {
        $("#loaddiv").hide();
        return;
    }

    let obj =getLoginToken()
    let url =  callrmtRstapiUrl()+"qryAgtBal " + obj.agtid;
    console.log(url)
    var sccsFun = function (data) {
        let data1 = "[qryAgtBalINweb] rzt=>" + data;
        console.log(data1)


        log_info(data1);
        if(data.includes("not_loginex@"))
        {
            alert("登录超时")
            return
        }
     let   rztobj = JSON.parse(data);



        $("#loaddiv").hide();

        //   rztobj=JSON.parse(rzt);
        if (rztobj.errors) {
            let errobj = {"url": url, "ret": data}
            log_err(errobj)
            alert("发生错误:" + data);
            return;
        }


        if (rztobj.data.code == 0) {
            //alert("此代理余额为:" + rztobj.data.score)
            $("#agtBalLab").text(rztobj.data.score + "")
        } else {
            if (rztobj.errmsg)
                alert(rztobj.errmsg)
        }

        $("#loaddiv").hide();

        return rztobj;


    }


    http_get_jqGet(url, sccsFun, jqFailFun)

}
require("../libx/php")
require("../libx/sys")
try{
    requirex("../libx/php")
    requirex("../libx/logger")
}catch (e){

}

 // https://dtinterface.1saeda.com
global['qryAgtBal'] = qryAgtBal

/**
 * biz  qryAgtBal
 * @returns {Promise<*>}
 */
async function qryAgtBal() {

    require("../libx/logger")
    requirex("../libx/logger")
    log_fun_enter(arguments)
    require("../libBiz/bizHttp")
    require("../libx/httpSync")
    var rztobj;





    // 返回当前异步作用域的asyncId
    const eid = getcurReqID()


    let timestamp = time();
    let _paraValue = ""
    let url = buildUrlNget_x(_paraValue, timestamp, 9); // apitype_agtBal
log_info(url)
    let rzt = await http_get_jqStyle(url, null, jqFailFun)

    rztobj = JSON.parse(rzt);
    if (rztobj.data.code != 0) {
        let errmsg = errcodeMsg(rztobj.data.code)
        rztobj.errmsg = errmsg;
        rztobj.msg_to_ui=errmsg;
        rztobj.type="ex";
        rztobj.typex="ret_data_ex"
        throw rztobj;
    }



    // 返回当前异步作用域的asyncId
    const curReqID = getcurReqID()
    let file=__dirname+"/../visas/visa"+curReqID+".json"
    // const fs = require("fs");
    // fs.unlinkSync(file)
    del_file(file)


    return rzt;
}


// var sccsF=function (data) {
//
//     let data1 = "[agtbal648] rzt=>" + data;
//     console.log(data1)
//
//
//     log_info(data1);
//     rztobj = JSON.parse(data);
//
//     $("#loaddiv").hide();
//
//     return rztobj;
//
//
// }
//
// sccsF(rzt);

//   rztobj = JSON.parse(data);


//   rztobj=JSON.parse(rzt);
// if(rztobj.errors)
// {
//     let errobj={"url":url,"ret":data}
//     log_err(errobj)
//     alert("发生错误:" + data);
//     return;
// }
//
//
// if (rztobj.data.code == 0)
// {
//     //alert("此代理余额为:" + rztobj.data.score)
//     $("#agtBalLab").text(rztobj.data.score+"")
// }
//
// else
// {
//     // require("./libx/excel.js")
//
//
//     let errmsg = errcodeMsgV2(rztobj.data.code)
//     alert("发生错误::" + errmsg + " ")
//
//     //  alert(window["errcodeMsg" + rztobj.data.code] + " " + data)
// }