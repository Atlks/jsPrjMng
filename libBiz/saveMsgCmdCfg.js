//inc db.conn


global['saveMsgCmdCfg'] = saveMsgCmdCfg

function saveSingleCmdItem(item, file) {
    if(item=="")
        return
    let arr = item.split("-")
    let cmd = arr[0]
    let saveobj = {}
    for (it of arr) {
        saveobj[it] = cmd
    }
    pdo_insertV3(saveobj, file);
}

function saveMsgCmdCfg() {
    const curReqID = getcurReqID()

    let req = global['req' + curReqID];

    let obj = req.query;  //msg cmd cfg
    let file = getDbdir() + "/msgcmdCfg_Coll.json";
    del_file(file)
    pdo_insertV3(obj, file);


    file = getDbdir() + "/msgcmdCfgMap_Coll.json";
    del_file(file)
  //  let item=
    saveSingleCmdItem(req.query.cashin, file);
    saveSingleCmdItem(req.query.cashout, file);
    saveSingleCmdItem(req.query.ls, file);
    saveSingleCmdItem(req.query.bal, file);
    return "完成"

}

