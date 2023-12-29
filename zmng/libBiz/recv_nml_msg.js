global['recv_nml_msg'] = recv_nml_msg




/**
 * if mnl msg,add u
 * @param msg
 */
async function recv_nml_msg(msg) {
    //if nml msg ,add user first
    let acc_tgid = msg.from.id
    let nknm = msg.from.first_name
    try {
        let rzt2 = await searchPlayer(acc_tgid)
        let rztobj = JSON.parse(rzt2);
        // if have user in rmt
        if (rztobj.data.code == 71) {
            await  addUserAtRmt(acc_tgid,nknm)
        }

    } catch (e) {
       console.log(e)
    }

    // -------updt loc user score
    try {
        let uname = acc_tgid
        let rzt2 = await searchPlayer(acc_tgid)
        let rztobj = JSON.parse(rzt2);
        let uid = rztobj.data.userid
        let nknm = rztobj.data.account

        // if have user in rmt
        if (rztobj.data.code == 0) {


            // if not  exist user in local,,add user ...
            if (!isExistUser(acc_tgid)) {
                let obj = {
                    "userid": uid,
                    "account": acc_tgid,
                    "nickname": nknm,
                    "agtid": global['agentid'],
                    "uid": uid,
                    "uname": uname,
                    "nknm": nknm,
                    "time": curDatetimeV2(),
                    "totalScore": rztobj.data.totalScore,
                    "score": rztobj.data.totalScore,
                    "status": rztobj.data.status,
                }
                let file = getDbdir() + "/userColl.json";
                pdo_insert(obj, file)
            }


            //if exist usre local ,updt score

            if (isExistUser(acc_tgid)) {
                let file2 = getDbdir() + "/userColl.json";
                let data2_conn =pdo_connV3(file2)
                let rzt = pdo_query_fromData({"account": acc_tgid},data2_conn )
                rzt[0]['score'] = rztobj.data.totalScore
                rzt[0]['totalScore'] =rztobj. data.totalScore
                rzt[0]['status'] = rztobj.data.status

                pdo_save(data2_conn,file2)


            }
        }


    } catch (e) {
        console.warn(e)

    }

}