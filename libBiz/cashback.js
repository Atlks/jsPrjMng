function addFslogRcdV2(userid, fslogRcd) {
    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = dbdir + "cashbackLog.json"
    pdo_insertV3(fslogRcd, dbf)
}
global['addFslogRcdV2']=addFslogRcdV2

global['listFslogRcd']=listFslogRcd
function listFslogRcd(userid, fslogRcd) {
    let visa = getLoginToken()
    let dbdir = __dirname + "/../db/" + visa.agtid + "/";
    let dbf = dbdir + "cashbackLog.json"
    let pdoQuery = pdo_query({},dbf);
    pdoQuery=pdoQuery.sort((a,b)=>b.tmstmp-a.tmstmp)
    return pdoQuery
}

/**
 * 反水总额
 */
function  cashbackTtlAmt()
{

}
/**
 * 有效反水总额=反水总额-ardyCshbk
 */
function  cashbackCanAvb()
{

}


function listFslogRcd_webload() {

    authChk()
    $().ready(function () {
        //do something
        var rzt =http_get_jqGet(callrmtRstapiUrl()+"listFslogRcd",function (rzt){
            columns = [
                {data: 'userid'},
                {data: 'account'},
                {data: 'fsAmt'},
                {data: 'dttm'},
                {data: 'agentid'},
            ]

            loadToDataTableV2(json_decode(rzt), "tab_oplog", columns, [])

        })
        //dsl_callFunCmdMode("oplog_qry")



        console.log(" rzt json str is :" + rzt.substring(0, 250))



        setTimeout(function () {
        }, 50)

    });

}