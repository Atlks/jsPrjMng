global["QryShangxiafen"] = QryShangxiafen;

/**
 *
 * @param uname
 * @returns {*|string}
 */
function  QryShangxiafen(uname) {

    log_enterFun(arguments)
    // await import("../lowdbx/lowdbX.js")
    let dbfile = Acc_logDbdir()

    console.log("dbfile=>" + dbfile)
    //  pdo_exec_insert()


    let _ = require('lodash');
    if (uname)
        var queryCondt = {'uname': uname};
    else
        var queryCondt = {}
    require("../libx/db.js")
    let rzt = pdo_query(queryCondt, dbfile);
    //  _.sortBy()

    //   let _ = require('lodash');


    rzt = _.orderBy(rzt, ['time'], ['desc']);
    rzt = rzt.slice(0, 300)


    console.log(rzt)
    return json_encode(rzt);

}
