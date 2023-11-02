
global['sumColV2']=sumColV2
/**
 *
 * @param rows
 * @param colMapFun
 * @returns {number}
 */
function sumColV2(colMapFun,rows) {
    let data_rows =rows



    let modifiedArr = data_rows.map(colMapFun);


    require("../libx/arr"  +   "")

    console.log(  array_sum(modifiedArr) )
    let arraySum = array_sum(modifiedArr);
    arraySum=arraySum.toFixed(2)
    return  arraySum ;



}

/**
 *
 * @param rows
 * @param colMapFun.
 * @returns {number}
 */
function  countCol(rows,colMapFun){

}
function  min(rows,colMapFun){

}
function  max(rows,colMapFun){

}