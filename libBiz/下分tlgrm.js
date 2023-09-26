


global['下分']=下分


global['updateBal']=updateBal

/**
 *  acc_updateBal
 * @param acc
 */
async function updateBal(acc) {
    let uname = acc
    let rzt2 = await searchPlayer(uname)
    let rztobj = JSON.parse(rzt2);
    let uid = rztobj.data.userid
    let nknm = rztobj.data.account


    if (rztobj.data.code == 0) {


        if (isExistUser(uname)) {
            let file2 = getDbdir() + "/userColl.json";
            let data2_conn = pdo_connV3(file2)
            let rzt = pdo_query_fromData({"account": uname}, data2_conn)
            rzt[0]['score'] = rztobj.data.totalScore
            rzt[0]['totalScore'] = rztobj.data.totalScore
            rzt[0]['status'] = rztobj.data.status
         //   rzt[0]['nickname'] = rztobj.data.nickname

            pdo_save(data2_conn, file2)


        }
    }
}

/**
 * sheofen tlgrm
 */
async function 下分(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.username
    let nknm = msg.from.first_name
    try{
        addUser(acc, nknm)
    }catch (e)
    {
        console.warn(e)
    }



    let txt = msg. text;
    arr = txt.split(" ")


    let score = arr[1]

    let uname = await xiafen(acc, score)

    updateBal(acc)

      const bot = global['bot']
       bot.sendMessage(msg.chat.id,"ok",{reply_to_message_id: msg.message_id})
    return uname

}


