global['如果'] = 如果

function 如果(条件, ...通过后执行的指令集) {
    // if(typeof  条件 =="function")
    //     条件=条件()

    console.log("[如果] cdt=>" + 条件)
    return () => {
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

}

global['返回结果'] = 返回结果

/**
 * must a fun,ret ,,beir only rety this fun ,cant to another fun
 * @param 结果
 * @returns {function(): *}
 */
function 返回结果(结果) {
    //
    return () => 结果
}

global['返回'] = 返回

function 返回(结果) {
    return () => 结果;
}


global['执行指令序列'] = 执行指令序列

function 循环(操作序列, 单条操作指令) {
    console.log(操作序列)
    for (操作 of 操作序列) {
        单条操作指令(操作);
    }
}


function 执行指令序列(...操作序列) {
    return () => {
        for (操作 of 操作序列) {
            操作();
        }
    }


}

/**
 *
 * @param 操作序列

 */
function 执行指令序列FP(...操作序列) {
    return () => {
        循环(操作序列, (操作) => {
            try {
                操作()
            } catch (e) {
                console.log(操作)
                console.log(e)
                throw  e
            }

        })


    }
}
