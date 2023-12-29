
global['readCfgAsTxt'] = readCfgAsTxt

function readCfgAsTxt(file) {
    const curReqID = getcurReqID()

    let req = global['req' + curReqID];

    let obj = req.query;  //msg cmd cfgx.js


    var fs = require('fs');
    return  fs.readFileSync(file).toString()

}



//inc db.conn


global['saveCfgFrmRq'] = saveCfgFrmRq



function saveCfgFrmRq(f) {
    const curReqID = getcurReqID()

    let req = global['req' + curReqID];

    let obj = req.query;  //msg cmd cfgx.js
  //  let file = getDbdir() + "/msgcmdCfg_Coll.json";


     let txt=req.query.cfgTxt;
    if(txt.length<5)
        return 

    var fs = require('fs');

    fs.writeFileSync( f, txt );



    return "完成"

}

