async function pulldt(startTime, startTimex) {





    let _paraValue = "startTime=%s&endTime=%s"
    let endtime = startTime + 24 * 3600 * 1000
    _paraValue = sprintf(_paraValue, startTime, endtime)
    let timestamp = timeStamp();
//type2023_gameorderPull=6
    let url = buildUrlNget_zhudan(_paraValue, timestamp, 6);
    log_info(url)
    let rzt = await http_get_jqStyle(url, null, jqFailFun)
    console.log(rzt)
    let rztobj = JSON.parse(rzt);
    if (rztobj.data.code !== 0) {
        let errmsg = errcodeMsg(rztobj.data.code)
        rztobj.errmsg = errmsg;
        rztobj.msg_to_ui = errmsg;
        rztobj.type = "ex";
        rztobj.typex = "ret_data_ex"
        throw rztobj;
    }


    const _ = require('lodash')
    for (const v of rztobj.data.list) {
        try{
            let dbf = __dirname + "/../db_zhudan/zhudan_uid" + v.UserID+".json";
            console.log(dbf)
            let dtRows = readFileAsJsonV2(dbf, [])

            if (!_.find(dtRows, {'ObjectID': v.ObjectID})) {
                pdo_insertV3(v, dbf)
            }
        }catch (e) {
            console.log(e)

            log_errV5(e,"","polllog659_err.log")
        }



    }
}

async function main() {

    require("../libx/err")
    require("./qryAgtBal")

    require("../libx/excel")

    var fs = require("fs");
    let rt = fs.readFileSync(__dirname+"/../_noup/key.txt").toString();
    rt = rt.trim();
    key = rt.split(",")
    token = {}
    token.agtid = key[0]
    token.desCode = key[1]
    token.md5Code = key[2]
    global['visaImEnv'] = token
    var token = global['visaImEnv']
    var desCode = token.desCode
    var agentid = token.agtid
    var md5Code = token.md5Code
    global['apiurl2023'] = "https://dtinterface.1saeda.com"


    require("../libx/logger")
    requirex("../libx/logger")
    log_fun_enter(arguments)
    require("../libBiz/bizHttp")
    require("../libx/httpSync")
    var rztobj;


    require("../libx/sys")


// 返回当前异步作用域的asyncId
    const eid = getcurReqID()


    let timestamp = timeStamp();

  //  rand(2,7)
  //  while (true)
    {
        try{
            let startDt=timestamp-rand(0,3) * 24 * 3600 * 1000

            let startTime = startDt+ rand(0,24) * 3600 * 1000
            //只保留三个月数据only save 3month dat..doc said..
            // let untiltime=timestamp-100 * 24 * 3600 * 1000
            //  服务器端
               //throw 22
            await pulldt(startTime, 0);
        }catch (e)
        {
            console.log(e)
            log_errV5(e,"","polllog659_err.log")
        }


    }








}

(async function () {

    require("../libx/err")
    require("../libx/errHdlr")
    require("../libBiz/bizErr")
    try {
        setInterval(async ()=>{
            await main()

        },  10000)

    } catch (e) {
        console.log(e)
    }

})()

//console.log(qryAgtBal())
// node C:\modyfing\apiprj\jbbot\zmng\libBiz\orderPull_rdm.js
