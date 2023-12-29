
global['添加操作日志']=添加操作日志
function 添加操作日志(内容) {
    return () => {
        console.log("添加操作日志...." + 内容)
    }

}
