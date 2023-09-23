
try{
    global["json_decode"] = json_decode;
    global["json_encode"] = json_encode;
    global["md5"] = md5;
    global["strip_tagsx"] = strip_tagsx;
   // module.exports = {urlencode, md5};
}catch (e) {
    
}


global['urlencode']=urlencode
function urlencode($prm) {
    return encodeURIComponent($prm)
}


global['md5']=md5
// 辅助函数
function md5(data) {
    var CryptoJS = require("crypto-js");
    return CryptoJS.MD5(data).toString();
}

//global["shangfen"]=shangfen;
function strip_tagsx($t) {
    $t = strip_tags($t);
    $t = removeBlankLines($t);
    return $t;
}

function strip_tags($t) {
    result = $t;
    //  var result = $t.replace(/<\/?.+?>/g,"")
    //result = $t.replace(/<\/?.+?>/g,"")   //cant replace img mlt line


    result = result.replace(/<style>[\s\S]*?<\/style>/igm, "")
    // var regex=/<style>[\s\S]*?<\/style>/ig;
    result = result.replace(/<\/?[^>]*>/img, "")

    //.replace(/ /g,"");
    return result;
}

function json_decode($s) {
    return JSON.parse($s)
}

/**
 * cant encode err   if err ,use json_encode_Err
 * @param $s
 * @returns {string}
 */
function json_encode($s) {
    return JSON.stringify($s, null, 2)
}


/**
 * json_encode_Err  json_encode_Err
 * @param e
 * @returns {string}
 */
function json_encode_Err(e)
{
//     e.stack1 = e?.stack  //bcs this two prpop cant to json encode
// // if(e.message)
//     e.msg1 = e?.message

    let eobj = {"e":e,"stack": e.stack, "msg": e.message}

    return json_encode(eobj)
}


global['json_encode_ErrRawErrObj']=json_encode_ErrRawErrObj
function json_encode_ErrRawErrObj(e)
{
    e.stack1 = e?.stack  //bcs this two prpop cant to json encode
// if(e.message)
    e.msg1 = e?.message



    return json_encode(e)
}


function  encodeShellCmd(rcd)
{

    // String ( JSON.stringify(rcd)  )
}