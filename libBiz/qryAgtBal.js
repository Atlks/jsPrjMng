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
        rztobj = JSON.parse(data);

        rztobj = JSON.parse(data);

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


global['qryAgtBal'] = qryAgtBal

/**
 * biz  qryAgtBal
 * @returns {Promise<*>}
 */
async function qryAgtBal() {
    require("../libBiz/bizHttp")
    require("../libx/httpSync")
    var rztobj;


    let timestamp = time();
    let _paraValue = ""
    let url = buildUrlNget_x(_paraValue, timestamp, 9); // apitype_agtBal

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