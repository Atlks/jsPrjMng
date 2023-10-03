global['oplog_add'] = oplog_add
try {
    require("../libx/autoload.js")
} catch (e) {
}

try {
    require("../libx/db.js")
} catch (e) {

}

function oplog_add(rcd) {

    log_fun_enter(arguments)

    try{
        if (isWinformEnv()) {
            let rcdInShell = encodeURIComponent(JSON.stringify(rcd))
            let f = encodeURIComponent("__rootdir__/db/opLogColl.json");
            var hedtx = window.external.callFun("pdo_insert " + rcdInShell + " " + f);
        } else {

            var file;
            //todo here dep 5 lines
            if (__dirname.endsWith("libBiz"))
                file = __dirname + "/../db/opLogColl.json";
            else
                file = __dirname + "/db/opLogColl.json";

            file=    oplog_logDbdir();

            console.log(":29 f=>" + file)
            pdo_insert(rcd, file);

        }
    }catch (e) {
        console.log(e)
        log_errV2(e, arguments)
    }



}


//oplog_add({"aa":111})

global["qryOplog"] = oplog_qry;
global["oplog_qry"] = oplog_qry;

/**
 *
 * @param uname
 * @returns {*|string}
 */
function oplog_qry(uname) {

    //  await import("../lowdbx/lowdbX.js")
    let dbfile =  oplog_logDbdir();

    console.log("47dbfile=>" + dbfile)
//  pdo_exec_insert()


    let _ = require('lodash');
    rzt = pdo_query({}, dbfile);


    rzt = _.orderBy(rzt, ['time'], ['desc']);
    rzt = rzt.slice(0, 300)
    return json_encode(rzt)

}

try{
    require("./libx/sttb.js") 
}catch (e) {
    
}

global['oplog_logDbdir']=oplog_logDbdir
function oplog_logDbdir()
{
    let file = getDbdir()+"/opLogColl.json";
//    let dbfile =getDbdir()+"scoreLogColl.json";
    return file;
}

try{
    require("../libx/sttb.js")
}catch (e) {

}

function oplog_qryINWebV2() {

    authChk()
    $().ready(function () {
        //do something
        var rzt =http_get_jqGet(callrmtRstapiUrl()+"oplog_qry",function (rzt){
            columns = [
                {data: 'agtid'},
                {data: 'uname'},
                {data: 'txt'},
                {data: 'time'}
            ]

            loadToDataTableV2(json_decode(rzt), "tab_oplog", columns, [[3, "desc"]])

        })
            //dsl_callFunCmdMode("oplog_qry")



        console.log(" rzt json str is :" + rzt.substring(0, 250))



        setTimeout(function () {
                }, 50)

    });

}





function oplog_qryINWeb() {
    $().ready(function () {
        //do something
        var rzt = dsl_callFunCmdMode("oplog_qry")

        console.log(" rzt json str is :" + rzt.substring(0, 250))


        retry(() => {
            return dsl_callFunCmdMode("oplog_qry")
        }, 3, (rzt) => {
            try {
                json_decode(rzt);
                return true;
            } catch (e) {
                return fal;
            }
        });

        try {
            json_decode(rzt)
        } catch (e) {
            try {
                rzt = dsl_callFunCmdMode("oplog_qry")
                json_decode(rzt)
            } catch (e2) {
                return;
            }

        }

        // alert(rzt)

        setTimeout(function () {
            columns = [
                {data: 'agtid'},
                {data: 'uname'},
                {data: '类型'},
                {data: 'time'}
            ]

            loadToDataTableV2(json_decode(rzt), "tab_oplog", columns, [[3, "desc"]])
        }, 50)

    });

}


//oplog_add({})