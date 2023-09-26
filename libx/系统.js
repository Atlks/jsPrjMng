function 提示(提示信息) {
    console.log(提示信息)
}


global['显示']=显示
global['echo']=显示
function  显示(s)
{
    console.log(s)
}




global['当前时间']=当前时间
function 当前时间()
{
    return curDateTime()
}


//
// global['执行指令序列']=执行指令序列
//
// function 循环(操作序列, 单条操作指令) {
//     for(操作 of 操作序列)
//     {
//         单条操作指令(操作);
//     }
// }
//
// /**
//  *
//  * @param 操作序列
//
//  */
// function 执行指令序列(操作序列) {
//     return  ()=>{
//         循环(操作序列,(操作)=>{  操作() })
//
//
//
//     }
// }
function 设置(变量名, 变量值) {

    return () => {
        window[变量名] = 变量值;
    }
}