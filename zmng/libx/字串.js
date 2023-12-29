
try{
    global["以xx开头"] = startWz;
    global["startWz"] = startWz;
}catch (e) {
  // console.log(e)
}




try{
    window['以xx开头']= startWz
}catch (e) {
   // console.log(e)
}


function startWz(str, wz) {

    wz=wz.toLowerCase()
    try{
        return str.startsWith(wz);
    }catch (e)
    {
        var reg=new RegExp("^"+wz,"ig");
        return reg.test(str);
        // return str.startWith(wz);
    }


}
global["长度"] = 长度;
function 长度(字串) {
    return 字串.length
}