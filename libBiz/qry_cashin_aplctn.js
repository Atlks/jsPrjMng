
function  rfs(rowID){

    let row= window['row'+rowID]

    rvw_rfsAjax(row,(dat)=>{
        qryCashinOutAplctnFmevt()
    })

}



/**
 *
 * @param rowID
 */
function accpt2423(rowID)
{
    let row= window['row'+rowID]

        //  let uname=,
        rvw_passAjax(row,(dat)=>{
            qryCashinOutAplctnFmevt()
        })
        // cashinAjax(row.uname,row.amt,(rzt)=>{
        //     alert("处理完毕")
        // })
    // }
    //
    // if(row.cashio=="下分")
    // {
    //     rvw_rfsAjax(row)
    //     //  let uname=,
    //
    // }



}
// global['qryCashinOutAplctnFmevt']=qryCashinOutAplctnFmevt
/**
 * class="btn btn-primary"
 *vst 通用性
 */
function qryCashinOutAplctnFmevt() {

    authChk()
    $().ready(function () {
        //do something
        var rzt2
        http_get_jqGet(callrmtRstapiUrl()+"qry_cashin_aplctn",function (rzt){
            columns = [

                {data: 'uname'},
                {data: 'cashio'},
                {data: 'amt'},
                {data: 'time'},
                {data: 'statShow'},
                {
                    data: 'time',
                    render: function ( data, type, row ) {
                        console.log(row)
                        window['row'+row.id]=row
                        let id=row.id;
                        let clkstr="accpt2423('"+id+"')"
                        let clkstr_rfs="rfs('"+id+"')"
                        return '<button class="accptbtn btn btn-success" onclick='+clkstr+'>通过</button><button  class="accptbtn btn btn-danger" onclick='+clkstr_rfs+'>拒绝</button>';
                    }
                }
            ]

            console.log(" rzt json str is :" + rzt.substring(0, 250))

            rzt2=rzt;
            loadToDataTableV2(json_decode(rzt), "tab_oplog", columns, [[3, "desc"]])

        })
        //dsl_callFunCmdMode("oplog_qry")





        setTimeout(function () {
        }, 50)

    });

}



global["qry_cashin_aplctn"] = qry_cashin_aplctn;

/**
 *
 * @param uname
 * @returns {*|string}
 */
function qry_cashin_aplctn(uname) {


    let dbfile = getDbdir()+"/cashinAplctn.json";

    console.log("47dbfile=>" + dbfile)
//  pdo_exec_insert()


    let _ = require('lodash');
    rzt = pdo_query({}, dbfile);


    rzt = _.orderBy(rzt, ['time'], ['desc']);
    rzt = rzt.slice(0, 300)
    return rzt

}