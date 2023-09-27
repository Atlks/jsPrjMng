


global['下分']=下分




/**
 * sheofen tlgrm
 */
async function 下分(msg) {

    log_fun_enter(arguments)


    let acc = msg.from.username
    let nknm = msg.from.first_name
    try{
        await addUser(acc, nknm)
    }catch (e)
    {
        console.warn(e)
    }



    let txt = msg. text;
 let   arr = txt.split(" ")


   // let score = arr[1]
    let score =  txt.replace(/[^0-9]/ig,"");

    let uname = await xiafen(acc, score)

    await updateBal(acc)

      const bot = global['bot']
       await bot.sendMessage(msg.chat.id, "ok", {reply_to_message_id: msg.message_id})
    return uname

}


