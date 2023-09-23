//     xxx.htm    ../xxhtm
function includeX(headFile)
{
    if(isWinformEnv())
    {
        var hedtx=window.external.callFun("readFileSyncx __rootdir__/"+headFile);
    }
    else
    {
        var hedtx=readFileSyncx("./"+headFile)

    }

    document.write(hedtx)
}



global['includeXAjax']=includeXAjax
function includeXAjax(headFile)
{
    log_fun_enter(arguments)
    let hedtx;
    if(isWinformEnv())
    {
          hedtx=window.external.callFun("readFileSyncx __rootdir__/"+headFile);
    }
    else
    {
          hedtx=readFileSyncx(__dirname+"/../"+headFile)

    }
    log_fun_ret(arguments,hedtx)
    return hedtx;
  //  return "document.write('"+hedtx+"')";
    // hedtx)
}