require("./enc")
require("./mmnc")

basewd=""  // f..k
offst=1;
slt=""

for(let i=3;i<10;i++)
{
    console.log("\r\n\r\n\r\n---------------\r\n")
    let s=basewd+i+slt;
    console.log(s)
    let hx=md5(s)
    console.log(hx)
    let mmnc= geneMmncCrpt(hx)
    console.log(mmnc)
}



// console.log(mmnc)