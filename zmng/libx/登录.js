// @ts-check


检查结果_凭据无效_用户名无效 = "用户名无效"
检查结果_凭据不存在 = "检查结果_没有凭据"
检查结果_凭据过期 = "凭据过期"
检查结果_凭据校验签名不通过 = "凭据校验签名不通过"
检查结果_凭据无效缺失栏目 = "凭据无效缺失栏目"
检查结果_用户不存在 = "用户不存在"
检查结果_密码错误 = "密码错误"
检查结果_通过 = "pass"
检查结果 = "pass"
运行结果 = ""

// @ts-ignore
require("./字串.js")
require("./系统.js")
require("./操作日志.js")
require("./控制流程函数.js")
require("./编码.js")

//jsdoc libx/登录.js


/**
 * 登录流程2.0
 * @author ati
 * @version 2.0
 * 登录流程
 * @param 凭据   类型（密码，cookie)，用户名，密码，签名，过期日
 * @param 密码
 */
function 登录流程(凭据) {


    执行指令序列(
        //---------检查登录凭据(凭据) 按照一下规则;
        如果(不存在(凭据), 提示并终止(检查结果_凭据不存在)),
        如果(长度(凭据.用户名) < 3, 提示并终止(检查结果_凭据无效_用户名无效)),
        // 如果凭据类型是token模式则按照一下规则核验((
        如果(凭据.过期日,
            echo("token check start"),
            如果(凭据过期(凭据.过期日), 提示并终止(检查结果_凭据过期)),
            如果(校验签名不通过(凭据.签名), 提示并终止(检查结果_凭据校验签名不通过)),
            echo("token check end"),
        ),


        如果(用户不存在(凭据.用户名), 提示并终止(检查结果_用户不存在)),
        //如果凭据类型是密码验证模式则检查密码(
        如果(凭据.密码,
            如果(核验密码错误(凭据.密码), 提示并终止(检查结果_密码错误))),

        // 检查通过，开始登陆
        $("如果是登录凭据是密码类型则发放登录凭据"),
        如果(凭据.密码, 发放登录凭据(凭据.用户名)),
        添加操作日志("用户:(@用户名@)  事件:登录，时间:@当前时间@ ip:@ip@"),
    )();


}

function $() {
    return () => {
    }
}

/**
 * @author ati
 * @version v2 lgtk mode
 * 登录流程token模式 cookie moshi
 * @param 凭据
 */
function 登录流程token模式(凭据) {


    执行指令序列(
        //---------检查登录凭据(凭据) 按照一下规则;
        如果(不存在(凭据), 提示并终止(检查结果_凭据不存在)),
        如果(长度(凭据.用户名) < 3, 提示并终止(检查结果_凭据无效_用户名无效)),

        echo("token check start"),
        如果(凭据过期(凭据.过期日), 提示并终止(检查结果_凭据过期)),
        如果(校验签名不通过(凭据.签名), 提示并终止(检查结果_凭据校验签名不通过)),
        echo("token check end"),

        // 检查通过，开始登陆
        如果(用户不存在(凭据.用户名), 提示并终止(检查结果_用户不存在)),
        ()=> exchLoginVisa交换visa(凭据)
       // 添加操作日志("用户:(@用户名@)  事件:登录，时间:@当前时间@ ip:@ip@"),
    )();


}


/**
 * v23107  参数改为单独的用户名，密码，提升可读性
 *
 * 登录流程密码模式 登录流程密码模式
 * @param 凭据
 */
function 登录流程密码模式(用户名,密码) {


    执行指令序列(
        //---------检查登录凭据(凭据VISA) 按照一下规则;
        如果(不存在(密码), 提示并终止(检查结果_凭据不存在)),
        如果(长度(用户名) < 3, 提示并终止(检查结果_凭据无效_用户名无效)),


        如果(用户不存在(用户名), 提示并终止(检查结果_用户不存在)),
        如果(核验密码错误(密码), 提示并终止(检查结果_密码错误)),

        // 检查通过，开始登陆
        //  登录凭据是密码类型则发放登录凭据(凭据)
        发放登录凭据(用户名),
        添加操作日志("用户:(@用户名@)  事件:登录，时间:@当前时间@ ip:@ip@"),
    )();


}


let 凭据 = {}

凭据.用户名 = "aaa"
凭据.密码 = "123"
登录流程(凭据)


// 设置("检查结果", 检查结果_通过),
//
//     // 检查结果 = ,
//     // ()=>{ console.log("nnnn")},

//  显示( 如果(false,那么(返回(1)),否则(返回(2))));

/**
 *
 * @param 密码
 * @returns {undefined}
 */
function 核验密码错误(密码) {
    //  return true;
    return false;
}


function 提示并终止Ex(提示内容) {


    throw  "ex@" + 提示内容

}

function 提示并终止(提示内容) {

    return () => {
        throw  "ex@" + 提示内容
    }
}

// function 是否过期(过期日) {
//     return undefined;
// }
//
// function 过期(过期日) {
//     return undefined;
// }

function 校验签名不通过(凭据) {
    return undefined;
}


function 凭据过期(过期日) {
    return undefined;
}


function 用户不存在(用户名) {
    return false;
}

function 不存在(凭据) {

    if (凭据)
        return false;
    return true;
}


function 计算过期日(s) {

    return "2005";

}


function 过期日(过期日) {
    return 过期日
}

function 发放登录凭据(用户名) {

    过期日 = 计算过期日("@当前日期@+7")
    return () => {

        显示("发放登录凭据....")
        var 登录凭据 = {"用户名": 用户名, "过期日": 过期日, "签名": "4546fdafsd"};
        登录凭据.加密效验码 = md5(用户名 + 过期日)
        保存登录凭据(登录凭据)
    }

}

//function

/**
 * exchLoginVisa from cookie to global threadlocal
 * save visa to gloal thread local var map
 *
 * invike:::exchLoginVisa交换visa(req.cookies)
 * @param token
 */
function exchLoginVisa交换visa(token) {
    visa = {"uid": token.uid,}


    const curReqID = getcurReqID()
    global['uid' + curReqID] = token.uid
    global['uname' + curReqID] = token.uname
    global['visa' + curReqID] = visa

}

/**
 * cookie localstore file etc..rds
 * @param 登录凭据
 */
function 保存登录凭据(登录凭据) {

    console.log("保存登录凭据ck......" + JSON.stringify(登录凭据))

}


// function 如果检查通过(检查结果, ...操作序列) {
//     return () => {
//         如果(检查结果 == 检查结果_通过, 执行指令序列(操作序列))
//     }
//
// }
//
//
// function 如果检查不通过(检查结果, ...操作序列) {
//     return () => {
//         如果(检查结果 != 检查结果_通过, () => {
//             console.log("..如果检查不通过..")
//             执行指令序列(操作序列)
//         })
//     }
//
// }


//
// // @ts-ignore
//
//
// function 保存登录状态() {
//     //save toklen
//     console.log("save token")
// }

//
// function 终止流程() {
//     console.log("终止流程d代码")
// }
//
// function 提示(提示信息) {
//
//     return () => {
//         console.log(提示信息)
//     }
// }

//
// function 那么(...满足条件后执行的指令集) {
//
//
//     // for (f of fns) {
//     //
//     // }
//     return () => {
//         let fns = arguments;
//         let rzt;
//
//         for (var i = 0; i < fns.length; i++) {
//             let f = fns[i];
//             rzt = f(rzt);
//
//         }
//         return rzt;
//     };
//
// }

// function 否则(...不满足条件的时候执行的指令集) {
//     return () => {
//         let fns = arguments;
//         let rzt;
//
//         for (var i = 0; i < fns.length; i++) {
//             let f = fns[i];
//             rzt = f(rzt);
//
//         }
//         return rzt;
//     };
// }


// function 检查用户名密码(用户名, 密码) {
//
//     __检查通过 = false;
//     // console.log(111)
//     __检查不通过 = true;
//
//
//     __检查通过 = true;
//     __检查不通过 = false;
//     return true;
//
// }


//
// function 如果凭据类型是token模式则按照一下规则核验(指令集) {
//     指令集()
// }


/**  登录算法
 * alias login

 * @author ati
 * @version 1.1
 @copyright aaaa
 * @description 登录算法desc
 * @param {string} 用户名  username
 * @param {any} 密码
 */

// function 登录Dep(用户名, 密码) {
//
//     /*** @type {*} */
//     let aaa = "a"
//
//     检查用户名密码(用户名是("aaa"), 密码是(123)); //  is not empty
//     如果(__检查通过,
//         那么(发放登录凭据(用户名是("aaa"), 过期日("2024-01-01")), 显示退出按钮区域,
//             关闭登录区域, 转到主界面, 添加操作日志()),
//         否则(提示("用户名密码不对"), 终止流程)
//     )
//     // pipe()
//
// }


// function 检查不通过() {
//     return __检查通过
// }


// function 如果是登录凭据是密码类型则发放登录凭据(凭据3) {
//
//
//     return () => {
//         显示("==> 如果是登录凭据是密码类型则发放登录凭据 检测开始")
//         如果(凭据3.密码, 发放登录凭据(凭据3.用户名))
//         显示("==>。。。 如果是登录凭据是密码类型则发放登录凭据 检测结束")
//     }
// }

//登录流程("用户名=aaa&密码=123")


// function 获取登录凭据() {
//     let 凭据 = {}
//     凭据.类型 = "密码"
//     凭据.用户名 = "aaa"
//     凭据.密码 = "123"
//     return 凭据;
// }

// /**
//  * 根据规则来  核验规则
//  * @param 凭据
//  * @returns {undefined}
//  */
// function 检查登录凭据(凭据) {
//
//     核验规则 = []
//
//
//     显示("==》如果凭据类型是token验证模式则检查token 检测开始")
//
//     显示("==》==》 如果凭据类型是token验证模式则检查token 检测结束")
//
//     显示("==》用户不存在 检测开始")
//
//     显示("==》==》用户不存在 检测结束")
//
//
//     运行结果 = 检查结果_通过
//     return 检查结果_通过
// }


// /**
//  * 检查cookie凭据  token
//  * @param 凭据
//  */
// function 如果凭据类型是token验证模式则检查token(凭据) {
//
//
//     如果(凭据.过期日, () => {
//             显示("凭据类型是token验证模式")
//             如果(长度(凭据.用户名) < 3, 提示并终止(检查结果_凭据无效_用户名无效))
//             如果(凭据过期(凭据.过期日), 提示并终止(检查结果_凭据过期))
//             如果(校验签名不通过(凭据.签名), 提示并终止(检查结果_凭据校验签名不通过))
//             如果(用户不存在(凭据.用户名), 提示并终止(检查结果_用户不存在))
//             显示(" token验证模式完成")
//         }
//     )
//
//
// }

//
// /**
//  *
//  * @param 凭据
//
//  */
// function 如果凭据类型是密码验证模式则检查密码(凭据, 后继操作) {
//     如果(凭据.密码, () => {
//         显示("凭据类型是密码验证模式开始")
//         后继操作()
//         显示(" 密码验证完成")
//     })
//
//
// }