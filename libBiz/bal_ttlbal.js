


function ttlbal_inweb()
{
 // req sys.js
 let url =  callrmtRstapiUrl()+"ttlbal "  ;
 console.log(url)
 $( "#ttlbalLbl" ).load( url);
}


global['ttlbal']=ttlbal
function  ttlbal()
{
 require("../libBiz/searchPlayer")
 require("../libBiz/bzDb")
 require("../libBiz/user")
 require("../libx/aggr")

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

 let file = getDbdir()+"/userColl.json";

 let dt_rows=pdo_query({},file);




 let ttlBal = sumColV2((e) => e.totalScore, dt_rows)

 console.log(ttlBal)
 return ttlBal
}

