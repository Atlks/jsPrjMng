global['如果'] = 如果

/**
 *if fp mode
 * @param 条件
 * @param 通过后执行的指令集

 */
function 如果(条件, ...通过后执行的指令集) {
    // if(typeof  条件 =="function")
    //     条件=条件()

    console.log("[如果] cdt=>" + 条件)
    return () => {
        if (条件) {
            {
                let fns = arguments;
                let rzt;

                for (let i = 1; i < fns.length; i++) {
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

/**
 *
 * @param 结果
 * @returns {function(): *}
 */
function 返回(结果) {
    return () => 结果;
}


global['执行指令序列'] = 执行指令序列

/**
 *
 * @param 集合
 * @param 单条操作指令
 */
function 循环(集合, 单条操作指令) {
    console.log(集合)
    for (let 单条数据 of 集合) {
        单条操作指令(单条数据);
    }
}

function 循环FP(集合, 单条操作指令) {
    console.log(集合)
    return ()=>{
        for (let 单条数据 of 集合) {
            单条操作指令(单条数据);
        }
    }

}

/**
 *  use raw mode ,also fp
 * @param 操作序列

 */
function 执行指令序列(...操作序列) {
    return () => {
        for (操作 of 操作序列) {
            操作();
        }
    }


}

/**
 *use cns mode
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
