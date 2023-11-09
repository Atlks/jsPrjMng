

global['帮助']=帮助

/**
 *
 * @param msg
 * @returns {Promise<void>}
 */
async function 帮助(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.username
    let nknm = msg.from.first_name
    let uname = acc
//上分100 下分100 余额 流水
    let txt="格式为:  反水"
        const bot = global['bot']
        bot.sendMessage(msg.chat.id,""+txt,{reply_to_message_id: msg.message_id})





}