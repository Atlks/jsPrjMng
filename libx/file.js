//import {resolve} from "path";

global["file_exists"] = file_exists;

var {join, dirname} = require('path')
var {dirname} = require("path");


global["dirname"] = dirname;
global['readFileAsJson'] = readFileAsJson

function readFileAsJson(f) {
    return json_decode(readFileSyncx(f));
}

global['file_exists'] = file_exists

function file_exists(fil) {


    const fs = require('fs');

    const filePath = '/path/to/file';

    return (fs.existsSync(fil))


}

global["writeFileSyncx"] = writeFileSyncx;


global["parse_ini_file"] = parse_ini_file;

function parse_ini_file(f) {
    log_enterFun(arguments)
    // if (f.startsWith("/"))  not good for mac os
    //     f = __dirname + f;
    console.log("inifile=>" + f)
    var ini = require("ini")
    var path = require("path")
    var fs = require("fs")
    const iopath = f; // 引用Pos.ini的相对地址
    const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));
    return Info;

}

global["writeFileV3"] = writeFileV3;

/**
 *
 * @param fil
 * @param str
 */
function writeFileV3(fil, str) {

    log_enterFun(arguments)
    fil=fil.replace("__USERPROFILE__",process.env.USERPROFILE);
    fil=fil.replace("__rootdir__",__dirname+"/../")

    var fs = require("fs");
    var path = require("path");
    fs.mkdirSync(dirname(fil) , {recursive: true});
    //   fs.mkdirSync(appRoot + '/css

    fs.writeFileSync(fil, str);
}

function writeFileSyncx(fil, str) {

    fil=fil.replace("__USERPROFILE__",process.env.USERPROFILE);
    fil=fil.replace("__rootdir__",__dirname)

    var fs = require("fs");
    var path = require("path");
    fs.mkdirSync(path.dirname(fil), {recursive: true});
    //   fs.mkdirSync(appRoot + '/css

    fs.writeFileSync(fil, str);
}

global["readFileFromUploadFile"] = readFileFromUploadFile;

/**
 *
 * @param req
 * @returns {string}
 */
function readFileFromUploadFile(req) {
    let avatar = req.files.file1;

    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    // avatar.mv('./uploads/' + avatar.name)
    let t = avatar.data.toString();
    return t;
}


global['del_file']=del_file

/**
 *
 * @param f
 */
function  del_file(f)
{
    try{
        const fs = require("fs");
        fs.unlinkSync(f)
    }catch (e) {
         log_errV2(e,arguments)
    }

}


global['readExcelFromUploadFile']=readExcelFromUploadFile
/**
 *
 * @param req
 * @param rowRdr
 * @returns {string|string}
 */
function readExcelFromUploadFile(req,rowRdr) {
    let avatar = req.files.file1;



    //Use the mv() method to place the file in upload directory (i.e. "uploads")
     avatar.mv('tmp827.xlsx',(incomeMsg,f)=>{

         let arg=arguments

         readFromExcel('tmp827.xlsx',rowRdr)

    })
   // let t = avatar.mv
  //  return t;
}

const {resolve} = require("path")
global["resolve"] = resolve;
global["readFileSyncx"] = readFileSyncx;
global["file_get_contents"] = readFileSyncx;
global["file_get_contentsx"] = readFileSyncx;

function readFileSyncx(fil) {

    try{
        log_fun_enter(arguments)
        // process.env.USERPROFILE +
        //  let f = "@USERPROFILE@/lgky.json"
        fil = fil.replace("__USERPROFILE__", process.env.USERPROFILE);
        fil = fil.replace("__rootdir__", __dirname + "/../");


        //  filepath=>C:\modyfing\jbbot\zmng\cfg.js
        console.log("93filepath=>" + resolve(fil))

        if (!file_exists(fil))
            return "";

        var fs = require("fs");
        var path = require("path");
        //  fs.mkdirSync(path.dirname(fil), { recursive: true });
        //   fs.mkdirSync(appRoot + '/css


        let rt = fs.readFileSync(fil).toString();
        console.log(" [readFileSyncx ] ret=>"+ rt.substring(0,300))
        return rt;
    }catch (e) {
        console.log(e)
        return  ""

    }

}

global["file"] = file;
global["file_readLines"] = file;

function file(f) {
    t = readFileSyncx(f)
    return t.split("\r\n")
}

var {readFileSync, writeFileSync, appendFileSync} = require("fs");
const path = require("path");
const ini = require("ini");
const fs = require("fs");
global["readFileSync"] = readFileSync;
global["writeFileSync"] = writeFileSync;
global["appendFileSync"] = appendFileSync;
global["appendFileV2"] = appendFileV2;


function appendFileV2(f,t)
{
    log_enterFun_console(arguments)
    appendFileSync(f,t);
    console.log(" [appendFileV2] ret=>void")
}