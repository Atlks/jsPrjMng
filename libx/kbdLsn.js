f = "C:\\w\\iptmthd\\curKey.txt"


var {readFileSync, writeFileSync, appendFileSync} = require("fs");
// txt = readFileSync(iomapfile)
// jsonarr = JSON.parse(txt)

var buff = ""
const fs = require('fs')
const filePath = 'C:\\w\\iptmthd\\'
console.log(`正在监听 ${filePath}`);

function setEchoWinTxt(echoWinTxt) {
    writeFileSync("iptecho.txt", echoWinTxt)
}

fs.watch(filePath, (event, filename) => {
    console.log("event=>" + event)

    console.log("filename=>" + filename)
    try {
        if (event == "change") {
            if (global[event + filename])
                return
            global[event + filename] = true;// read

            console.log(`${filename}文件发生更新`)

            let curiptWd = readFileSync(filePath + "/" + filename).toString()

            console.log(curiptWd)

            curiptWdLow = curiptWd.toLowerCase()


            if (curiptWdLow == "{space}" || curiptWdLow == "{enter}") {
                console.log("out buff=>" + buff)
                buff = ""
                let echoWinTxt=""
                setEchoWinTxt(echoWinTxt);
            }

            if (curiptWdLow == "{backspace}"   ) {
                console.log("  buff=>" + buff)
                let lastIdx=buff.length-1
                buff =buff.substring(0,lastIdx)

                console.log("  buff=>" + buff)
                show_buf2wdlst(buff)
            }

            if (curiptWd.startsWith("{")) {
                return;
            } else {
                buff = buff + curiptWd;
                console.log("buff=>" + buff)
                show_buf2wdlst(buff)
            }


        }
    } catch (e) {
        // lk l  lk lk like

        console.log(e)
    }

})



function show_buf2wdlst(curiptWd) {



    iomapfile = "C:\\modyfing\\apiprj\\jbbot\\zmng\\libx\\ipt_iomap.json"

    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
    txt = readFileSync(iomapfile)
    jsonarr = JSON.parse(txt)


  //  curiptWd = readFileSync(cuript).toString()
    curiptWd = curiptWd.toLowerCase()

    if (curiptWd.startsWith("{"))
        return
    showecho = ""
    for (jsonobj of jsonarr) {
        if (jsonobj.key.startsWith(curiptWd)) {
            showecho = showecho + " " + jsonobj.key + "" + "" + jsonobj.cnstr + " "
        }

    }
    console.log(showecho)
    setEchoWinTxt(showecho);
   // writeFileSync("iptecho.txt",showecho)
}

// setInterval(()=>{
//     try {
//         core();
//     }catch (e) {
//         console.log(e)
//     }
//
// },50)

// s sttste