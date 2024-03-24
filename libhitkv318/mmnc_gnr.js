require("./enc")
require("./mmnc")

//md5Hexencode=md5("ff")
global['dbg']=0;



//console.log(md5Hexencode)
//console.log(hexToByteArrStr(md5Hexencode))


// let str = hexToByteArrStr(md5Hexencode);
// console.log(str.length)
// console.log(    str2hexEncode(str))


//  console.log(geneMmnc(md5Hexencode))
 // console.log(ori(md5Hexencode))
//throw  11





const {readFileSync,writeFileSync,appendFileSync} = require("fs");




basewd=readFileSync('c:/temp/bswd.txt', 'utf-8').toString()// f
offst=1;
slt=readFileSync('c:/temp/st.txt', 'utf-8').toString()
global['spltr2024']=readFileSync('c:/temp/spltr.txt', 'utf-8').toString()

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

   if(i>10)
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



global['geneMmncCrpt']=geneMmncCrpt
/**
 *
 */
function geneMmncCrpt(seed_md5Hexencode)
{
    if( global['dbg'])
    console.log(arguments.callee.name + JSON.stringify(arguments))
    require( __dirname+"/../lib/util2024.js")

    let s=   generateMnemonic_left(generateMnemonicRdm(),Random(2,9))
    s+=' echo '
    s+= generateMnemonic_left(generateMnemonicRdm(),Random(2,7))+' '
        +global['spltr2024']+' '
    s+=generateMnemonic_ivei(geneMmnc(seed_md5Hexencode))+"  "
    s+=generateMnemonic_left(generateMnemonicRdm(),Random(2,12))
    if( global['dbg'])
    console.log('[geneMmncCrpt]ret=>'+s);
    return s;
}

global['generateMnemonic_ivei']=generateMnemonic_ivei

//console.log(generateMnemonic())
function generateMnemonic_ivei(mmnc) {
    if( global['dbg'])
    console.log(arguments.callee.name + JSON.stringify(arguments))

    mmnc = mmnc.trim();
    var arr = mmnc.split(" ");
    var a_houmyar = arr.slice(6, 12);
    var a_cyemyar = arr.slice(0, 6);

    let s = a_houmyar.join(" ") + " " + a_cyemyar.join(" ");
    if( global['dbg'])
    console.log('[generateMnemonic_ivei]ret=>'+s);
    return s

}