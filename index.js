$("#loaddiv").hide();
// $("#loaddiv").hide();

window["errcodeMsg-2"] = "未找到对应代理编号信息"
window["errcodeMsg-3"] = "代理MD5校验码错误"
window["errcodeMsg-4"] = "参数转码或代理解密校验码错误\n"


try {
    const winlogger = require("logger");
} catch (e) {
}
try {
    const winlogger = require("./libx/logger.js");
} catch (e) {
}
try {
    const winlogger = require(__dirname + "/libx/logger.js");
} catch (e) {
}

try {
    console.log(__dirname)  //C:\modyfing\jbbot\zmng
} catch (e) {
}

try {
    window["winlogger"] = winlogger
} catch (e) {
}

try{
    require("./libx/fp_ati1990.js");
    require("./libx/datetime.js");
    require("./libx/api2023jb.js");require("./libx/autoload.js");
    require("./libx/jq.js");
    const _ = require("lodash");
} catch (e) {
}

// a5312={}
// alert(a5312.aaa)  //just undefined



//
// setTimeout(function (){
//
//     //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
//     rzt=  dsl_callFunCmdMode("agtBal" )
//
//
//     //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
//     console.log("[agtbal648] rzt=>" + rzt)
//     rztobj=JSON.parse(rzt);  $("#loaddiv").hide();
//      alert("此代理余额为:"+rztobj.data.score)
//
//
// },1000000)

//  $("#loaddiv").hide();
// rztobj.data.totalScore=rztobj.data.score;
//   window['bindJsonToTable'](rztobj)


//console.log("login stzt agentid:"+agentid)


// async function clk() {
//
//     document.getElementById("fname").value = 111;
//     console.log(1111111111111111);
//
//
//     uname = "uname1";
//     pwd = "";
//     nickname = uname + "nknm";
//
//     // reg(uname, pwd, nickname);
//
//     const {exec, execSync} = require('child_process');
//     cmd = "node    " + __dirname + "/libx/callFun.js reg " + uname + " pwd " + nickname;
//     // cmd = "electron    "+__dirname+"/libx/callFun.js reg "+uname +" pwd "+ nickname ;
//
//
//     console.log(cmd)
//     rzt = execSync(cmd).toString();
//     rzt = rzt.split("\r\n").pop();
//     console.log("[clk()] rzt=>" + rzt)
//
//
//     //cant drktl use ,,said  The V8 platform used by this instance of Node does not support creating Workers
//     // sync async all cant use
//     //  const {reg, login} = require('./libBiz/api.js');
//     //  await reg("u2", "", "u2nknm")
//
//
//     //获取相对于浏览器视口的坐标
//     console.log('x:' + event.clientX + "  y:" + event.clientY);
//     img = $("<img src='res/coin.png'  width='50' height='50' style='position: absolute;top:0' >");
//     img.css("left", event.clientX).css("top", event.clientY);
//     $(img).animate({top: 555}, {duration: 5000, queue: false});
//
//     $("body").append(img);
//
//
//     writeFileSyncx("43200x.txt", "999");
//     //  mainPrcsFun1();
// }


function writeFileSyncx(fil, str) {
    try{
        var fs = require("fs");
        var path = require("path");
        fs.mkdirSync(path.dirname(fil), {recursive: true});
        //   fs.mkdirSync(appRoot + '/css

        fs.writeFileSync(fil, str);
    }catch (e)
    {
        console.log(e)
    }

}



$(
    function () {


        // setInterval(function () {
        //     rdmX = Math.round(Math.random() * 1000);
        //     console.log(rdmX)
        //     img = $("<img src='res/coin.png'  width='50' height='50' style='position: absolute;top:0' >");
        //     img.css("left", rdmX)
        //     $(img).animate({top: 555}, {duration: 5000, queue: false});
        //
        //     $("body").append(img)
        //
        // }, 10000);

       // sametime run 同时运行 效果动画
        setTimeout(function () {
            $("#btnLg").animate({width: '100%'}, {duration: 3000, queue: false});
        }, 0)

        $("#btnLg").fadeOut(500).fadeIn(3000);
        console.log(999)

        // $("#btnLg").click(function(){
        //
        //     $("#div3").fadeIn(3000).fadeOut(3000);
        // });
        console.log("login stzt agentid:"+global['agentid'])
        if( global['desCode'] )
        console.log("desCode:"+desCode)
        //ini login form
        user_ini_ui();
        // if(global['agentid'] )
        // {
        //
        //
        // }else
        // {
        //
        // }


    });