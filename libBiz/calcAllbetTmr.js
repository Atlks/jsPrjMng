


function  main()
{
    require("./searchPlayer")
    require("./bzDb")
    require("./user")

    var fs = require("fs");
    let rt = fs.readFileSync("c:/key.txt").toString();
    rt = rt.trim();
    key = rt.split(",")
    token = {}
    token.agtid = key[0]
    token.desCode = key[1]
    token.md5Code = key[2]
    global['visaImEnv'] = token

//let dbf = __dirname + "/../db_zhudan/zhudan_uid" + v.UserID;
    let file = getDbdir()+"/userColl.json";

    let dt_rows=pdo_query({},file);

    let idx=rand(0,dt_rows.length)
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
    main()
},3000)

