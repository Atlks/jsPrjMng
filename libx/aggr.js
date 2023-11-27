

global['sumColV3']=sumColV3
/**
 *
 * @param rows
 * @param colMapFun
 * @returns {number}
 */
function sumColV3(colName,rows) {
    require("./arr")
    let data_rows =  array_column(rows,colName)
    return  array_sumV2(data_rows)

}



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
    modifiedArr=modifiedArr.filter((e)=>{
        if(e)
            return true;
    })

    require("../libx/arr"  +   "")

    console.log(  array_sum(modifiedArr) )
    let arraySum = array_sum(modifiedArr);
    try{
        arraySum=arraySum.toFixed(2)
    }catch (e)
    {
        console.warn("...warning...")
        console.warn(e)
       // console.log(e)
    }

    return  parseFloat(arraySum) ;



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