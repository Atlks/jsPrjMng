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

//----allbet
let dbf = __dirname + "/../db_zhudan/zhudan_uid" + userid + ".json";
console.log(dbf)
let dtRows = readFileAsJsonV2(dbf, [])

require("../libx/aggr")



let allbet = sumColV2((e) => e.ValidBet, dtRows)

let fsRat = getFsRat()
let feshweiAmt = allbet * fsRat;


let alreadyFsAmt = get_alreadyFsAmtV2(userid);


let fsFnl = feshweiAmt - alreadyFsAmt

if (fsFnl <= 0)
    fsFnl = 0
fsFnl = nbr_fmt_fix2(fsFnl)
if (fsFnl <= 0) {

  //  let output = await outputToIm(acc, 0, fsRat, fsFnl);

    return
}


console.log(alreadyFsAmt)