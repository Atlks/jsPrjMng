


global['如果']=如果
function 如果(条件, ...通过后执行的指令) {
    // if(typeof  条件 =="function")
    //     条件=条件()

    console.log("[如果] cdt=>" + 条件)
    if (条件) {
        {
            let fns = arguments;
            let rzt;

            for (var i = 1; i < fns.length; i++) {
                let f = fns[i];
                // console.log("cur f is =>"+f)
                rzt = f(rzt);

            }
            return rzt;
        }
    }
}

global['返回结果']=返回结果

/**
 * must a fun,ret ,,beir only rety this fun ,cant to another fun
 * @param 结果
 * @returns {function(): *}
 */
function 返回结果(结果) {
    //
return  ()=> 结果
}

global['返回']=返回
function 返回(结果) {
    return  ()=> 结果;
}