


require("../libx/file")
const fs = require('fs')
exampleFolder="C:\\modyfing\\apiprj\\jbbot\\zmng\\db_zhudan"
// 同步调用
fs.readdirSync(exampleFolder).forEach(file => {

    console.log(("\n\n\n\n\n\n"))
    try{
        console.log(file);
        let filFull=exampleFolder+"/"+file
        console.log(filFull)

        let jo=  readFileAsJson(filFull)
    }catch (e) {
        console.log(e)
    }

});