

global['流水']=流水

/**
 *
 * @param msg
 * @returns {Promise<void>}
 */
async function 流水(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.username
    let nknm = msg.from.first_name
    let uname = acc
  let txt=  QryShangxiafen(uname)
    rows=json_decode(txt)

    let tmple="{{ item.uname }} " +
        "    {{ item.类型 }} " +
        "    {{ item.score }} " +
        "    {{ item.time }} \n"
    let output=""
    for(row of rows)
    {
        let tmp=tmple.replace("{{ item.uname }}",row.uname)
        tmp=tmp.replace("{{ item.类型 }}",row.类型)
        tmp=tmp.replace("{{ item.score }}",row.score)
        tmp=tmp.replace("{{ item.time }}",row.time)
        output=output+tmp;

    }

    if(output=="")
        output="流水为空"
   // let txt="格式为: 上分100 下分100 余额 流水"
    const bot = global['bot']
    bot.sendMessage(msg.chat.id,""+output,{reply_to_message_id: msg.message_id})





}