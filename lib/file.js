import fs from "fs";


function  delFile(path)
{
    const fs = require('fs')
    // fs.writeFileSync('gd.txt', JSON.stringify(req.query) ,'utf8')
 //   fs.appendFileSync('gd.txt', JSON.stringify(req.query)+"\r\n" ,'utf8')
    //  res.send(fs.readFileSync("gdok.htm"))
    fs.unlinkSync(path)
}