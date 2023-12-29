



global['readMsgCmdCfg'] = readMsgCmdCfg

function readMsgCmdCfg() {
    const curReqID = getcurReqID()

    let req = global['req' + curReqID];

    let obj = req.query;  //msg cmd cfg
    let file = getDbdir() + "/msgcmdCfg_Coll.json";


    return pdo_query({}, file);

}