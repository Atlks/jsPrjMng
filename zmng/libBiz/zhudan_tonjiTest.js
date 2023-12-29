let file = __dirname + "/../db_zhudan/zhudan_uid29088206";
//let rows = pdo_query({"account": uname}, file)

var {readFileSync, writeFileSync, appendFileSync} = require("fs");
var txt = readFileSync(file).toString();
console.log(" dbtxt len100 =>" + txt.substring(0, 100))
let data_rows = JSON.parse(txt)

require("esm-hook");
//  const _ = require('lodash').default
const _ = require('lodash')


let modifiedArr = data_rows.map(function(element){
    return element.AllBet;
});


require("../libx/arr"  +   "")

console.log(  array_sum(modifiedArr) )

