
// inc   conn.asp
//auto load here ,not caller is bettre todo

global['余额']=余额

/**
 *
 * @param msg
 * @returns {Promise<void>}
 */
async function 余额(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.username
    let nknm = msg.from.first_name
    let uname = acc
    let rzt2 = await searchPlayer(uname)
    let rztobj = JSON.parse(rzt2);
    let uid = rztobj.data.userid



    if (rztobj.data.code == 0) {

        const bot = global['bot']
     //   bot.sendMessage
        sendMsg(msg.chat.id,"余额为："+rztobj.data.totalScore,{reply_to_message_id: msg.message_id})


    }


}