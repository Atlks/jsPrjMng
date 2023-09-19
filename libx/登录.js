// @ts-check

var __检查通过 = false


// @ts-ignore
require("./系统.js")

//jsdoc libx/登录.js

/**  登录算法
 * alias login

 * @author ati
 * @version 1.1
 @copyright aaaa
 * @description 登录算法desc
 * @param {string} 用户名  username
 * @param {any} 密码
 */

function 登录(用户名, 密码) {

    /*** @type {*} */
    let aaa = "a"

    检查用户名密码(用户名是("aaa"), 密码是(123)); //  is not empty
    如果(__检查通过,
        那么(发放登录凭据(用户名是("aaa"), 过期日("2024-01-01")), 显示退出按钮区域,
            关闭登录区域, 转到主界面, 添加操作日志()),
        否则(提示("用户名密码不对"), 终止流程)
    )
    // pipe()

}


function 检查不通过() {
    return __检查通过
}

function 登录(用户名, 密码) {


    检查用户名密码(用户名是("aaa"), 密码是(123));
    如果(__检查通过, 那么(发放登录凭据(用户名是("aaa"), 过期日("2024-01-01")),
            显示退出按钮区域, 关闭登录区域, 转到主界面, 添加操作日志())
    )

    如果(检查不通过 ,那么(提示("用户名密码不对"), 终止流程))


}

//  显示( 如果(false,那么(返回(1)),否则(返回(2))));

登录("aaa", 123)


function 添加操作日志() {

}

function md5(msg) {
}

function 过期日(过期日) {
    return 过期日
}

function 发放登录凭据(用户名, 过期日) {

    var 登录凭据 = {"用户名": 用户名, "过期日": 过期日};
    登录凭据.加密效验码 = md5(用户名 + 过期日)
    保存登录凭据(登录凭据)
}

function 保存登录凭据(登录凭据) {

}

function 用户名是(用户名是) {
    return 用户名是

}


function 密码是(密码) {
    return 密码;
}


function 检查通过() {
    return __检查通过
}


// @ts-ignore
function 返回(v) {
    return () => v;
}


function 保存登录状态() {
    //save toklen
    console.log("save token")
}

function 显示退出按钮区域() {

}

function 终止流程() {

}

function 提示(提示信息) {

    return () => {
        console.log(提示信息)
    }
}

function 转到主界面() {
    console.log("welcome")
}

function 关闭登录区域() {
}


function 那么(...满足条件后执行的指令集) {


    // for (f of fns) {
    //
    // }
    return () => {
        let fns = arguments;
        let rzt;

        for (var i = 0; i < fns.length; i++) {
            let f = fns[i];
            rzt = f(rzt);

        }
        return rzt;
    };

}

function 否则(...不满足条件的时候执行的指令集) {
    return () => {
        let fns = arguments;
        let rzt;

        for (var i = 0; i < fns.length; i++) {
            let f = fns[i];
            rzt = f(rzt);

        }
        return rzt;
    };
}


function 检查用户名密码(用户名, 密码) {
    __检查通过 = true;
    __检查通过 = false;
    // console.log(111)

}

function 如果(条件, 通过后执行的指令, 拒绝后执行的指令) {
   // if(typeof  条件 =="function")
   //     条件=条件()

    if (条件) {
        return 通过后执行的指令()
    } else {
        if (拒绝后执行的指令)
            return 拒绝后执行的指令()
    }

}