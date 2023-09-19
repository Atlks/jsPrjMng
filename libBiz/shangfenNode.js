
//only for node ivk cant in js
global["shangfen"] = shangfen;
async function  shangfen(uname, score) {
    log_enterFun(arguments)
    authChk()  //alslo refresh global agtid des md5key
  //  require("./fp_ati1990")

    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNget(_paraValue, timestamp, apitype_shangfen);


    log_info(url);
    let rzt=""
    try {
        rzt = await http_get(url);
    } catch (e) {
        checkWhiteIp(e, uname);
        checkAgtidErr(e);
    }


    try {
        rztobj = JSON.parse(rzt);
        if (rztobj.data.code == 0) {
            //  await import("../lowdbx/lowdbX.js")

            let visa =  getLoginToken()
            let dbdir=__dirname + "/../db/"+visa.agtid+"/";
            console.log("dbdir=>"+dbdir)


            var rcd = {"agtid":agtid,"uname": uname, "score": score, "类型": "上分", "time": curDateTime()}
            let dbfile =dbdir+ "scoreLogColl.json";
            await pdo_insert(rcd, dbfile);

            //  var rcd = {"op": "添加用户", "uname": uname, "类型": "添加用户", "time": curDateTime()}

            //   oplog_add(rcd)


            let file = dbdir+"opLogColl.json";
            var rcd = {"agtid":agtid,"op": "上分操作", "uname": uname, "score": score, "类型": "上分", "time": curDateTime()}
            await pdo_insert(rcd, file);


        }
    } catch (e) {
        let eobj = {"stack": e.stack, "msg": e.message}
        log_err(eobj)
    }


    // else
    //     alert(rzt)


    return rzt;


}
