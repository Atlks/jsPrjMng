require("./enc")
require("./mmnc")

//md5Hexencode=md5("ff")




//console.log(md5Hexencode)
//console.log(hexToByteArrStr(md5Hexencode))


// let str = hexToByteArrStr(md5Hexencode);
// console.log(str.length)
// console.log(    str2hexEncode(str))


//  console.log(geneMmnc(md5Hexencode))
 // console.log(ori(md5Hexencode))
//throw  11




var ini = require('ini');
const {readFileSync,writeFileSync,appendFileSync} = require("fs");
var config = ini.parse(readFileSync('c:/temp/cfg847.txt', 'utf-8'));
txt=readFileSync('c:/temp/cfg847.txt', 'utf-8').toString();


var querystring = require('querystring');
var caizhonMap = querystring.parse(txt);

basewd=caizhonMap['bswd'] // f
offst=1;
slt=caizhonMap['st']

// for(let i=1;i<10;i++)
// {
//     console.log("\r\n\r\n\r\n---------------\r\n")
//     const s=basewd+i+slt;
//     console.log(s)
//     const hx=md5(s)
//     console.log(hx)
//     const mmnc= geneMmncCrpt(hx)
//     console.log(mmnc)
//
//     var {readFileSync,writeFileSync,appendFileSync} = require("fs");
//     writeFileSync("xx.log","111");
// }
let i=1;
setInterval(()=>{

   if(i>50)
       process.exit(0);
    console.log("\r\n\r\n\r\n---------------\r\n")
    const s=basewd+i+slt;
    console.log("ff8."+i.toString()+"s")

    console.log("4verfy hexEncd=>"+md5(md5(s)))
    let a128btky_hexEncd = md5(s);
    const mmnc= geneMmncCrpt(a128btky_hexEncd)
    console.log(mmnc)

    i++
},200)

// setTimeout(()=>{
//
//
//
//
// },5000);


// console.log(mmnc)