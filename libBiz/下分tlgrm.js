


global['下分']=下分




/**
 * sheofen tlgrm
 */
async function 下分(msg) {

    log_fun_enter(arguments)



    let uname_tg=msg.from.username
    let acc = msg.from.id
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
    if(score=="")
    {
        //  throw "ex@格式错误，上下分不能为空"
        const bot = global['bot']
        await bot.sendMessage(msg.chat.id, "格式错误，上下分不能为空", {reply_to_message_id: msg.message_id})
        return
    }

  // let uname = await xiafen(acc, score)

   // await updateBal(acc)

    let dbfile = getDbdir()+"/cashinAplctn.json";
    let rcd={"message_id":msg.message_id,"id":idBasetime(),"nknm":nknm,"uname_tg":uname_tg,"uid_tg":acc,"acc":acc,"uname":acc,"cashio":"下分","amt":score,"time": curDatetimeV2()}
    pdo_insertV3(rcd,dbfile)


    const bot = global['bot']
    await bot.sendMessage(msg.chat.id, "提交完毕，请等待审核", {reply_to_message_id: msg.message_id})


      return

}


