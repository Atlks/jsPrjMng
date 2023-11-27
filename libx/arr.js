global["array_sum"] = array_sum;

function array_sum(arr) {

    arr=arr.filter((e)=>{
        if(e)
            return true;
    })
    var sum = 0;
    var sum = arr.reduce(function (prev, curr) {
        if(!isNumber(prev))
            prev=0

        if(!isNumber(curr))
            curr=0

        return prev + curr;
    }, 0);
    return nbr_fmt_fix2(sum);
}

global['array_sumV2']=array_sumV2
function array_sumV2(arr) {
    var sum = 0;
    var sum = arr.reduce(function (prev, curr) {
        if(!isNumber(prev))
            prev=0

        if(!isNumber(curr))
            curr=0

        return prev + curr;
    }, 0);
    return nbr_fmt_fix2(sum);
}


function nbr_fmt_fix2(arraySum)
{
    try{
        arraySum=parseFloat(arraySum)
    }catch (e)
    {

    }

    try{
        arraySum=arraySum.toFixed(2)
    }catch (e)
    {
        console.log(e)
    }



    try{
        arraySum=parseFloat(arraySum)
    }catch (e)
    {

    }
    return  arraySum

}


global["array_column"] = array_column;
 //— 返回输入数组中指定列的值
function array_column(data_rows,clmnName)
{
    let modifiedArr = data_rows.map(function(element){
        return element[clmnName];
    });
    return modifiedArr
}





// function array_sum(arr){
//     var sum = 0;
//     var sum = arr.reduce(function (prev, curr) {
//         return prev + curr;
//     }, 0);
//     return sum;
// }
function map_filter_reduce(arr) {
    var sum = 0;
    var sum = arr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    return sum;
}

global["array_merge"] = array_merge;
function array_merge(rzt_all, rzt) {
    return rzt_all.concat(rzt);
}