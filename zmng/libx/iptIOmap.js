require("./file.js")
const fs = require('fs');

function getKeys(line) {
    if (line.startsWith("HotStringSet")) {
        let stargt = line.indexOf('"')
        let lst = line.lastIndexOf('"')
        let key = line.substring(stargt + 1, lst)
        key=key.replace("{space}","")
        let arr = line.split(",")
        let fun = arr[1]
        fun = fun.substring(0, fun.length - 1)
        fun = fun.trim()
        let obj = {"key": key, "fun": fun}
        return obj
    }
    return undefined;
}

function getfun(line) {
    return undefined;
}

function substrByIdx(line20324, start, endIdx) {


    let substring = line20324.substring(start, endIdx);
    return substring;
    ;
}



function getcnstr(fun, filePath) {
    fun = fun.trim()
    const data = fs.readFileSync(filePath, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    let  n = 0;
    // print all lines
    for (var i = 0; i < lines.length; i++) {
        //just find eht fun lkine num


        let line = lines[i]
        n++;
        line = line.trim()
        if (line.startsWith("Func ")) {
            let stargt = line.indexOf('Func')
            let lst = line.lastIndexOf('()')
            let funcur = line.substring(stargt + 5, lst)
            funcur = funcur.trim()
            if (funcur == fun) {
                let cn = getcnstrByLinum(n, filePath, fun)
                return cn;
            }
        }

    } ;
}


function getcnstrByLinum(startLinNum_fun, filePath, fun) {
    const data = fs.readFileSync(filePath, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    for (var i = 0; i < lines.length; i++) {
        //just find eht fun lkine num
        if (i < startLinNum_fun)
            continue;

        let line203 = lines[i]
        line203 = line203.trim()
        const line20324 = line203.replaceAll("{BACKSPACE}", "")

        //fine fun linemn,then find next  send line..
        if (line20324.startsWith("Send(")) {
            let start = line20324.indexOf('"');
            let endIdx = line20324.lastIndexOf('"');
            let cn211 = substrByIdx(line20324, start + 1, endIdx);
            cn211=cn211.trim()
            return cn211;

        }
        //
        //     }

    }
    // lines.forEach((line) => {
    //     n++;
    //
    //     line = line.trim()
    //     if (line.startsWith("Func ")) {
    //
    //     }
    // });
    return undefined;
}

require("./enc")
var dataJsonArr=[]
walkSync('C:\\w\\iptmthd', function (filePath, stat) {

    /*nodejs自带的模块：path*/
    var path = require('path');



//获取文件的后缀名
    var extname = path.extname(filePath);
    if (extname == ".au3") {
        console.log(filePath);

        //  readfile  read读line


        const data = fs.readFileSync(filePath, 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);



        // print all lines
        lines.forEach((line) => {
            try {
                walkItem(line, filePath,dataJsonArr);
            } catch (e) {
                console.log(e)
            }

        });

    }




});


writeFileSync("ipt_iomap.json",json_encode(dataJsonArr))

function walkItem(line, filePath,dataJsonArr) {
    line = line.trim()
    let keys_fun = getKeys(line)
    if (keys_fun) {

        let fun = keys_fun.fun
        let cnstr = getcnstr(fun, filePath)
        if(cnstr)
        {
            keys_fun.cnstr = cnstr;
            keys_fun.fil=filePath;
            //keys_fun.linenum=line;
            dataJsonArr.push(keys_fun)
            console.log(JSON.stringify(keys_fun))
        }


    }
    //let funx=getfun(line)

    //console.log(line);
}

