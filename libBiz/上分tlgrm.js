


global['上分']=上分
/**
 * sheofen tlgrm
 */
async function 上分(msg) {

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
   let  arr = txt.split(" ")


    let score =  txt.replace(/[^0-9]/ig,"");
   if(score=="")
   {
       //  throw "ex@格式错误，上下分不能为空"
       const bot = global['bot']
       await bot.sendMessage(msg.chat.id, "格式错误，上下分不能为空", {reply_to_message_id: msg.message_id})
return
   }

        //arr[1]

   // let uname = await shangfen(acc, score)
   // await updateBal(acc)

    let dbfile = getDbdir()+"/cashinAplctn.json";
    let rcd={"message_id":msg.message_id,"id":idBasetime(),"uname":acc,"cashio":"上分","amt":score,"time": curDatetimeV2()}
     pdo_insertV3(rcd,dbfile)



      const bot = global['bot']
       await bot.sendMessage(msg.chat.id, "提交完毕，请等待审核", {reply_to_message_id: msg.message_id})
    return

}


