global["array_sum"] = array_sum;

function array_sum(arr) {
    var sum = 0;
    var sum = arr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    return sum;
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