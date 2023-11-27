//import {resolve} from "path";

global["file_exists"] = file_exists;

try{
    var {join, dirname} = require('path')
    var {dirname} = require("path");

}catch (e){

}

global["writeFileJson"] = writeFileJson;
function writeFileJson(fil, obj) {
    try{
        var fs = require("fs");
        var path = require("path");
        fs.mkdirSync(path.dirname(fil), {recursive: true});
        //   fs.mkdirSync(appRoot + '/css

        fs.writeFileSync(fil, json_encode(obj));
    }catch (e)
    {
        console.log(e)
    }

}





global["readFileAsArr"] = readFileAsArr;
function readFileAsArr(f) {


    var fs = require("fs");
    let rt = fs.readFileSync(f).toString();
    rt = rt.trim();
    const  idss = rt.split(",")
    return idss
}
function __METHOD__(e) {
    //Error
    //     at loadToTableVue (C:\modyfing\jbbot\zmng\node_modules\ui.js:116:17)
    //     at main (C:\modyfing\jbbot\zmng\node_modules\uiT.js:7:5)
    let arr = e.stack.split("\n")
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    // re.exec(st), m = re.exec(st);
    // callerName = m[1] || m[2];
    let funname = arr[1]
    funname = funname.trim();
    let brk = funname.indexOf("(")
    funname = funname.substr(3, brk - 3)
    return funname.trim();
}
function log_enterFun_console(arguments1) {

    var funname;
    // var callerName;
    try {
        throw new Error();
    } catch (e) {
        funname = __METHOD__(e);

    }
    //   var funname = arguments1.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

}


global['readFileAsJsonV2']=readFileAsJsonV2
function readFileAsJsonV2(f,dft=[]) {

    if(!file_exists(f))
        return dft
    console.log(":161readFileAsJson")
    log_enterFun_console(arguments)
    console.log(f)
    let $s = readFileSyncx(f);
    console.log((" readFileAsJson txt:" + $s))
    require("./enc")
    return json_decode($s);
}

global["dirname"] = dirname;
global['readFileAsJson'] = readFileAsJson

function readFileAsJson(f) {
    require("./enc")
    return json_decode(readFileSyncx(f));
}

global['file_exists'] = file_exists

function file_exists(fil) {


    const fs = require('fs');

 //   const filePath = '/path/to/file';
   // const fs = require("fs");
    return (fs.existsSync(fil))


}


function filesize(lastptn) {
    if (!file_exists(lastptn))
        return 0
    const fs = require('fs');
    const sttObj = fs.statSync(lastptn)

    return sttObj.size;
}

global['walkSync' ]=walkSync
function walkSync(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    // http://nodejs.cn/api/fs.html#fsreaddirsyncpath-options
    // http://nodejs.cn/api/fs.html#class-fsdirent 新增于: v10.10.0
    fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
        var filePath = path.join(currentDirPath, dirent.name);
        if (dirent.isFile()) {
            callback(filePath, dirent);
        } else if (dirent.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
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

try{
    const {resolve} = require("path")
    global["resolve"] = resolve;
    global["readFileSyncx"] = readFileSyncx;
    global["file_get_contents"] = readFileSyncx;
    global["file_get_contentsx"] = readFileSyncx;
}catch (e){

}

// todo sld in filex mdl

function readFileSyncx(fil) {

    try{
        require("./logger")
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

global["fs_watch"] = fs_watch;

/**
 *
 * @param filePath
 * @param hdlr
 */
function  fs_watch(filePath,hdlr)
{
    const fs = require('fs')
    fs.watch(filePath, (event, filename) => {
        console.log("event=>" + event)
        console.log("filename=>" + filename)
        try {
            hdlr(event, filename,filePath)
        } catch (e) {
            console.log(e)
        }

    })
}


global["file"] = file;
global["file_readLines"] = file;

function file(f) {
    t = readFileSyncx(f)
    return t.split("\r\n")
}
try{
    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
}catch (e){

}

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