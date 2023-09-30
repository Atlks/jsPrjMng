
const fs = require('fs');
const {dirname} = require("path");

f="c:/w/egls850wd.txt"
f="C:\\w\\wd850cnKeys.txt"
f="C:\\w\\iptmthd\\cmptrShuyu.txt"



const data = fs.readFileSync(f, 'UTF-8');

// split the contents by new line
const lines = data.split(/\r?\n/);

// print all lines
lines.forEach((line) => {
    console.log(line);
    line=line.trim();
    arr=line.split("\t")

    keys=arr[0]
    cn=arr[1]
    if(cn)
    {

        newword=""

        if(keys.length<=4)
        {
            newword=keys
        }else
        {
            firstCh=keys.substr(0,1)
            otherStr=keys.substr(1,100)

            const reg = /[aeiou]/ig
            otherStr=otherStr.replaceAll(reg,"")

            newword=firstCh+otherStr
        }

        let newline=newword+" "+cn

        let newfile=f+"rmvAiueo.txt"
        // fs.mkdirSync(dirname(newfile) , {recursive: true});
        //   fs.mkdirSync(appRoot + '/css
        // newline="::"+newline+"::"
        fs.appendFileSync(newfile, newline +"\n");

    }




});

//fs.close()