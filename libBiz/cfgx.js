
global['readCfg'] = readCfg

function readCfg() {
    const curReqID = getcurReqID()

    let req = global['req' + curReqID];

    let obj = req.query;  //msg cmd cfgx.js
    let file ='../cfg.ini';

    var fs = require('fs');
    return  fs.readFileSync(file).toString()

}



//inc db.conn


global['saveCfg'] = saveCfg



function saveCfg() {
    const curReqID = getcurReqID()

    let req = global['req' + curReqID];

    let obj = req.query;  //msg cmd cfgx.js
  //  let file = getDbdir() + "/msgcmdCfg_Coll.json";


    let txt=req.query.cfgTxt;

    var fs = require('fs');

    fs.writeFileSync('../cfg.ini', txt );



    return "完成"

}

