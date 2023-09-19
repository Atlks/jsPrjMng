

/**
 * pipe useage
 * @author ati
 * @version 1.1

 * @description pipe methodChain
 *
 *

 * @returns {*}
 */

function pipe() {
    let fns = arguments;
    let rzt;

    for (var i = 0; i < fns.length; i++) {
        let f = fns[i];
        rzt = f(rzt);

    }
    // for (f of fns) {
    //
    // }
    return rzt;
}