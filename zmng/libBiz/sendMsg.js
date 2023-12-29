

global['sendMsg']=sendMsg
function   sendMsg(chatid,txt,opt)
{
    log_fun_enter(arguments)
    const bot = global['bot']
    bot.sendMessage(chatid,txt,opt)

}


