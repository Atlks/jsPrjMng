global['retry'] = retry;


/**
 * retry useage
 * @author ati
 * @version 1.1

 * @description retry desc
 *
 *
 * @param {function} f
 * @param {int} reTrytimes
 * @param {fun} chkFun
 * @returns {*}
 */
function retry(f, reTrytimes, chkFun) {

    var rzt_fnl;
    for (let i = 0; i < reTrytimes; i++) {
        rzt_fnl = f();
        if (chkFun(rzt_fnl))
            break;
    }

    return rzt_fnl;


}

/**
 * 
 */
function pipe() {

}



/**
 * 
 *   Description placeholder
 *  @author ati
 * @version 1.1
 * 

 * @date 9/18/2023 - 12:07:43 AM
 */
function setGlobalErrCatch() {

}

function mq() {

}

/**
 * callcmd desc
 * @author ati
 * @version 1.1
 */
function callCmd() {

}

function setDaemon() {

}


function unittest() {

}

/**
 * callFunPressExcallFunPressEx
 * callFunPressExcallFunPressEx
 *
 * @param fun
 * @param params
 * @returns {*}
 */
function callFunPressEx(fun, params) {
    try {
        echo("\r\n\r\n");
        var funname = arguments.callee.name;
        arg = JSON.stringify(arguments);
        var ivkFundbg = "*********=>" + funname + arg
        console.log(ivkFundbg)


        if (isset("window"))
            func = window[fun];
        else
            func = global[fun];


        if (func == undefined) {
            let eobj = { "enterFunArgs": ivkFundbg, "msg": " cant find fun:" + fun }
            throw eobj;
        }

        //window[cb];
        $r = func.apply("thisobj", params);
        echo(sprintf("[%s] ret==>%s", fun, $r));
        echo("\r\n\r\n");
        return $r;
    } catch (e) {
        echo(e)
        $e2 = errorCast(e);
        let eobj = { "type": "ex", "name": "xxxex", "msg": JSON.stringify($e2), "e": $e2 };
        $rz = JSON.stringify(eobj);
    }


}


// ref  提升稳定性   文档 v2 x8x.docx