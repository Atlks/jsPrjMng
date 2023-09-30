const fs = require('fs');
const {dirname} = require("path");

f = "c:/w/egls850wd.txt"
f = "C:\\w\\wd850cnKeys.txt"


f="C:\\w\\iptmthd\\cmptrShuyu.txtrmvAiueo.txt"

tmpltpath="C:\\w\\iptmthd\\hotstr_tmplt.au3"
let newfile = "cmptrWords500.au3"

const data = fs.readFileSync(f, 'UTF-8');

// split the contents by new line
const lines = data.split(/\r?\n/);

// print all lines
lines.forEach((line) => {
    console.log(line);
    line = line.trim();
    arr = line.split(" ")
    cn = arr[1]
    keys = arr[0]


    let txt = fs.readFileSync(tmpltpath)
    txt = txt.toString()
    txt = txt.replace("@hotkeys", keys)
    txt = txt.replace("@输出", cn)
    txt = txt.replaceAll("ngemFunname", keys + "Funame")


    // bkspc = geneBkspc(keys)
    // txt = txt.replaceAll("", bkspc)




    fs.appendFileSync(newfile, txt + "\n");

});


function geneBkspc(keys) {
    return "{BACKSPACE}".repeat(keys.length + 1)
}

//fs.close()