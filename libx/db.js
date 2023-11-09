// import _ from 'lodash';

function pdo_exec_query(qryDsl, dbfile) {
    //  alert("上分成功")
    // await import("../lowdbx/lowdbX.js")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    return pdo_query(qryDsl, dbfile);
}


global["pdo_query_fromData"] = pdo_query_fromData

/**
 *
 * @param qryDsl
 * @param data
 * @returns {string[]}
 */
function pdo_query_fromData(qryDsl, data) {
    console.log("[pdo_query] qryDsl=>" + qryDsl)
    const _ = require('lodash')
    let rzt = _.filter(data, qryDsl)
    console.log("[pdo_query]rzt is=>" + JSON.stringify(rzt).substring(0, 300))
    return rzt;

}

global["pdo_query"] = pdo_query

/**
 *
 * @param qryDsl
 * @param dbfile
 * @returns {string[]}
 */
function pdo_query(qryDsl, dbfile) {

    log_enterFun(arguments)
    // var  _ = await import("lodash")  not err,but cant use _.flt said cant find this fun
    // import  lds = require('lodash') ;
    console.log("::23")
    let data;
    var {readFileSync, writeFileSync, appendFileSync} = require("fs");

    if (!file_exists(dbfile)) {
        writeFileSync(dbfile, "[]")
    }
    var txt = readFileSync(dbfile).toString();
    if(txt.trim()=="")
        txt="[]"

    console.log(" dbtxt len100 =>" + txt.substring(0, 100))
    data = JSON.parse(txt)

    require("esm-hook");
    //  const _ = require('lodash').default
    const _ = require('lodash')
    let rzt = _.filter(data, qryDsl)
    console.log("[pdo_query]rzt is=>" + JSON.stringify(rzt).substring(0, 300))
    return rzt;

}


global['pdo_insert'] = pdo_insert

async function pdo_insert(rcd, dbfile) {

    // f=f.replace("__rootdir__",__dirname)
    dbfile = dbfile.replace("__rootdir__/", __dirname + "/../")
    let arg = JSON.stringify(arguments);
    let ivkFundbg = "******[pdo_insert]" + arg
    console.log(ivkFundbg);
    log_info(ivkFundbg)

    //   require("secury")
    let a = [];
    a.push(rcd);
    a.push(dbfile)
    return await call_funcNoEx("pdo_insert_coreV2", a)

}

// async function pdo_conn(file) {
//
//
//     const defaultData = []
//     //  file = join(__dirname, file);
//     let jsonFile = new JSONFileSync(file);
//     let db = new LowSync(
//         jsonFile, defaultData);
//     db.read()
//     //  var rcd = {"u": 123, "age": 19}
//     // db.data.push(rcd)
//     return db;
//
// }

//global["pdo_conn"] = pdo_conn

// require("./autoload")
// pdo_insert_coreV2({time:curDateTime()},__dirname+"/db820.txt")

global['pdo_insert_coreV2'] = pdo_insert_coreV2


/**
 *
 * @param dbfile
 * @returns {{data: (*), dbf, write: db.write}}
 */
function pdo_connV2(dbfile) {

    require("./file.js")

    if (!file_exists(dbfile))
        writeFileSyncx(dbfile, "[]");
    let data2 = readFileAsJson(dbfile);
    let db = {
        data: data2
        , dbf: dbfile,
        write: function () {
            writeFileSyncx(dbfile, json_encode(this.data));
        }
    };
    return db;
}

global['pdo_connV3'] = pdo_connV3

/**
 *
 * @param dbfile
 * @returns {{data: (*), dbf, write: db.write}}
 */
function pdo_connV3(dbfile) {

    require("./file.js")

    if (!file_exists(dbfile))
        writeFileSyncx(dbfile, "[]");
    let data2 = readFileAsJson(dbfile);

    return data2;
}

global['pdo_save'] = pdo_save

/**
 *
 * @param data2
 * @param file2
 */
function pdo_save(data2, file2) {
    writeFileSyncx(file2, json_encode(data2));
}


/**
 *
 * @param rcd
 * @param dbfile
 * @returns {{data: *, dbf, write: write}}
 */
function pdo_insert_noEx(rcd, dbfile) {
    try {

        log_enterFun(arguments)


        let db;

        db = pdo_connV2(dbfile)

        if (typeof rcd == "string")
            rcd = JSON.parse(rcd)
        db.data.push(rcd)

// Finally write db.data content to file
        db.write()
        return db;
    } catch (e) {
        console.log(e)

        log_err("e at:" + fun + arg)
        let eobj = {"stack": e.stack, "msg": e.message}
        log_err(json_encode(eobj));
    }


}

global['pdo_insertV3']=pdo_insertV3

/**
 * throw ex
 * @param rcd
 * @param dbfile
 * @returns {{data: *, dbf, write: write}}
 */
function pdo_insertV3(rcd, dbfile) {

    log_enterFun(arguments)

    let db;

    db = pdo_connV2(dbfile)

    if (typeof rcd == "string")
        rcd = JSON.parse(rcd)
    db.data.push(rcd)

// Finally write db.data content to file
    db.write()
    return db;
}


/**
 *
 * @param rcd
 * @param dbfile
 * @returns {{data: *, dbf, write: write}}
 */
function pdo_insert_coreV2(rcd, dbfile) {
    //  alert("上分成功")
    log_enterFun(arguments)
    // await import("../lowdbx/lowdbX.js")
    console.log("54 pdo_insert_coreV2")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    try {
        require("../libx/secury")
    } catch (e) {
        console.log("---warning----")
        //in ems test ,weillerr
        console.log(e)
    }

    // let arg = JSON.stringify(arguments);
    // let ivkFundbg = "******[pdo_insert_coreV2]" + arg
    // log_info(ivkFundbg)
    let db;
    console.log("68 pdo_insert_coreV2")
    db = pdo_connV2(dbfile)

    if (typeof rcd == "string")
        rcd = JSON.parse(rcd)
    db.data.push(rcd)

// Finally write db.data content to file
    db.write()
    return db;
}


/**
 * conn mysql
 * @returns {Connection}
 */
function getConn() {
    path = require("path");
    fs = require("fs");
    mysql = require("mysql");
    ini = require('ini');
    var fs = require("fs");
    var path = require("path");
    const iopath = path.join(__dirname, '../.env'); // 引用Pos.ini的相对地址
    const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));
    console.log(Info)

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: Info.database.hostname,
        user: Info.database.username,
        password: Info.database.password,
        database: Info.database.database
    });

    connection.connect();
    return connection;
}


/**
 *
 * @param sql
 * @param connection
 * @param finishFun
 */
function query(sql, connection, finishFun) {
    const {exec, execSync} = require('child_process');


//    var connection = getConn();
//token = "6510408569:AAHrrbsKgCvklwiFje_TKPF-ABMz0kdxn2c" // msg2025
    token = "";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        //  console.log(JSON.stringify(results));
        token = results[0].s_value
        console.log('The solution is: ', results[0].s_value);


        finishFun(error, results, fields)
    });
    connection.end(); //要加不然唱起了回报个 conn close err。。。must add beir longt time
    console.log(9999);
}