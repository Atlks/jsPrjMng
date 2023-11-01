// /**
//  *
//  */
// function core() {
//     cuript = "C:\\w\\iptmthd\\cur_ipt_wd_buf.txt";
//
//
//     iomapfile = "C:\\modyfing\\apiprj\\jbbot\\zmng\\libx\\ipt_iomap.json"
//
//     var {readFileSync, writeFileSync, appendFileSync} = require("fs");
//     txt = readFileSync(iomapfile)
//     jsonarr = JSON.parse(txt)
//
//
//     curiptWd = readFileSync(cuript).toString()
//     curiptWd = curiptWd.toLowerCase()
//
//     if (curiptWd.startsWith("{"))
//         return
//     showecho = ""
//     for (jsonobj of jsonarr) {
//         if (jsonobj.key.startsWith(curiptWd)) {
//             showecho = showecho + " " + jsonobj.key + "" + "" + jsonobj.cnstr + " "
//         }
//
//     }
//     console.log(showecho)
//     writeFileSync("ipt_echo.txt",showecho)
// }
// //
// setInterval(()=>{
//     try {
//         core();
//     }catch (e) {
//         console.log(e)
//     }
//
//     },50)
//
// //  l  lk la  la l la la la lan  an a any
// //   l
//
