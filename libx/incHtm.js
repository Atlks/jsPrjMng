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
    let hedtx;
    if(isWinformEnv())
    {
          hedtx=window.external.callFun("readFileSyncx __rootdir__/"+headFile);
    }
    else
    {
          hedtx=readFileSyncx("../"+headFile)

    }

    return hedtx;
  //  return "document.write('"+hedtx+"')";
    // hedtx)
}