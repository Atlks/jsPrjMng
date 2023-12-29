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

global['apiurl2023'] = "https://dtinterface.1saeda.com"
require("../libBiz/user")
require("../libx/excel")
require("../libx/php")
require("../libx/aggr")
require("../libx/logger")
require("./searchPlayer")

require("./反水")

let userid=29121703

userid=29310938  //ati user Xxx0079468

const  fsamt=getThisTimeCashbackAmt(userid,0.005)


console.log(fsamt)

console.log(JSON.stringify("aa"))
console.log(JSON.stringify(123))

console.log(new Date("2023-11-25")-new Date("2023-11-25"))