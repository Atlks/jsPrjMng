
//only for node ivk cant in js
global["shangfen"] = shangfen;


/**
 * updtUserScore local
 * @param uname
 * @returns {Promise<void>}
 */
async function updtUserScore(uname) {
  // let obj=await  findPlayer(uname)
    try{
        await  updateBal(uname)
    }catch (e) {
        log_errV3(e,uname)
    }



}

async function  shangfen(uname, score) {
    log_enterFun(arguments)
    authChk()  //alslo refresh global agtid des md5key
  //  require("./fp_ati1990")

    let visa=getLoginToken();
    let agentid=visa.agtid
    let agtid =visa.agtid
    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNgetV2(_paraValue, timestamp, apitype_shangfen);


    log_info(url);
    let rzt=""
    try {
        rzt = await http_get(url);
    } catch (e) {
        checkWhiteIp(e, uname);
        checkAgtidErr(e);
    }


    try {
      var  rztobj = JSON.parse(rzt);
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
            var rcd = {"agtid":agtid,"txt":"上分"+ score,"op": "上分操作", "uname": uname, "score": score, "类型": "上分", "time": curDateTime()}
            await pdo_insert(rcd, file);


         await   updtUserScore(uname)


        }else
        {
            require("../libx/sys")
            require(libdir + "excel")
            requirex("../libx/excel.js")
            let errmsg = errcodeMsg(rztobj.data.code)
            rztobj.typex="ex", rztobj.namex="Bls_ex"
            rztobj.errmsgx=errmsg
            return  rztobj;

        }

    } catch (e) {
        let eobj = {"stack": e.stack, "msg": e.message}
        log_err(eobj)
    }


    // else
    //     alert(rzt)


    return rzt;


}
