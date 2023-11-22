
// node cmd/calcAllbetTmr.js
global['apiurl2023'] = "https://dtinterface.1saeda.com"
function  main()
{
    require("../libBiz/searchPlayer")
    require("../libBiz/bzDb")
    require("../libBiz/user")

   //---- todo  noet use
   let kf= __dirname+"/../_noup/key.txt"

    var fs = require("fs");
    let rt = fs.readFileSync(kf).toString();
    rt = rt.trim();
    key = rt.split(",")
    token = {}
    token.agtid = key[0]
    token.desCode = key[1]
    token.md5Code = key[2]
    global['visaImEnv'] = token

    //--------statrt

//let dbf = __dirname + "/../db_zhudan/zhudan_uid" + v.UserID;
    let file = getDbdir()+"/userColl.json";

    let dt_rows=pdo_query({},file);

    let idx=rand(0,dt_rows.length)
    console.log("idx:"+idx)
    let row=dt_rows[idx]

    let rzt=sumAllbet(row.userid)
    if(rzt)
    {
        if(rzt!=row.allbet )
        {
            row.allbet=sumAllbet(row.userid)

            pdo_save(dt_rows,file)
        }

    }


}

setInterval(function (){
    require("../libx/err.js")
    try{
        main()
    }catch (e) {
        console.log(e)
    }
},3000)

