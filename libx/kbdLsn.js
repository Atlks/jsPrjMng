//f = "C:\\w\\iptmthd\\keysdir\\curKey.txt"
var buff = ""
var {readFileSync, writeFileSync, appendFileSync} = require("fs");
const fs = require('fs')


/**
 * la law 法律
 */
function  main()
{
    const prcsmd = require("child_process");
    const filePath = 'C:\\w\\iptmthd\\keysdir\\'
    console.log(`正在监听 ${filePath}`);
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
                    findWdByBufpartNwrtToUi(buff)
                    buff = ""
                    setEchoWinTxt(buff);
                }
                if (curiptWdLow == "{backspace}") {
                    console.log("  buff=>" + buff)
                    let lastIdx = buff.length - 1
                    buff = buff.substring(0, lastIdx)

                    console.log("  buff=>" + buff)
                    findWdLstByPartwd(buff)
                }
                if (curiptWd.startsWith("{")) {
                    return;
                } else {
                    buff = buff + curiptWd;
                    console.log("buff=>" + buff)
                    findWdLstByPartwd(buff)
                }
            }
        } catch (e) {
            console.log(e)
        }

    })

}

// txt = readFileSync(iomapfile)
// jsonarr = JSON.parse(txt)
// last 最后的 la

main()

/**
 *
 * @param echoWinTxt
 */
function setEchoWinTxt(echoWinTxt) {
    writeFileSync("iptecho.txt", echoWinTxt)
}


/** csl cs
 * undefined undefi nedundefined undefined
 * undefined
 * undefined  law 法律 jst 就 我 nam 名字
 *  law  law law last  last
 * law LAW LAW LAW LAW LAW law
 * @param buff
 * @constructor
 */
function findWdByBufpartNwrtToUi(buff) {

    console.log("[iptBufToUI]"+ JSON.stringify(arguments) )
   let cnstr=findWdByBufpart(buff)
    if(!cnstr)
        return
    console.log("[Buf2wdWrtToUI]cnstr=>"+cnstr)


    try {
        let exe = "C:\\prgrm\\AutoIt3\\AutoIt3.exe"
        let cmd = exe + "  writeToUi.au3 " + cnstr;

        console.log(cmd)
       // return
        var prcsmd = require('child_process');
        // let rzt =
        prcsmd.execSync(cmd, {

            maxBuffer: 20000 * 1024,


        }).toString();

    } catch (e) {
        console.log(e)

    }

}


/**
 *  csl 控制台 csl 控制台
 * @param curiptWd
 * @returns {*}
 */
function findWdByBufpart(curiptWd) {


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
        if (jsonobj.key==(curiptWd)) {
            return jsonobj.cnstr
        }

    }

}

/**
 *
 * @param curWdpart
 */
function findWdLstByPartwd(curWdpart) {


    iomapfile = "C:\\modyfing\\apiprj\\jbbot\\zmng\\libx\\ipt_iomap.json"

    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
    txt = readFileSync(iomapfile)
    jsonarr = JSON.parse(txt)


    //  curiptWd = readFileSync(cuript).toString()
    curWdpart = curWdpart.toLowerCase()

    if (curWdpart.startsWith("{"))
        return
    showecho = ""
    for (jsonobj of jsonarr) {
        if (jsonobj.key.startsWith(curWdpart)) {
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