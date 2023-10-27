function json_encodeEx(e) {
    return errorSeriz(e)
}

global['json_encodeEx'] = json_encodeEx
global['error_json_encode'] = json_encodeEx


global['errorSeriz'] = errorSeriz


global['__METHOD__'] = __METHOD__

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

function errorSeriz(e) {
    msg = json_encode(e)    //cuztm errobj
    if (msg.length < 5) {
        //sys error
        let eobj = {"stack": e.stack, "msg": e.message}
        msg = json_encode(eobj)
    }
    return msg;
}

global['errorCast'] = errorCast

function errorCast(e) {
    msg = json_encode(e)    //cuztm errobj
    if (msg.length < 5) {
        //sys error
        let eobj = {"stack": e.stack, "msg": e.message}
        return eobj;
    } else
        return e;
}


global['ExChkChain'] = ExChkChain

function ExChkChain() {
    let arr = arguments
    for (item of arr) {
        try {
            return item()   //  if some ex,then ret this er let throw in another fun
        } catch (e) {

        }


        //  console.log(item)
    }


}


function catchHdl(e, extype, catchFun) {

    if (typeof e === 'string') {
        if (e.startsWith(extype)) {
            catchFun();

        } else {
            throw e;
        }

    } else
        throw e;

}