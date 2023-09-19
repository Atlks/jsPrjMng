


global['getDbdir']=getDbdir

/**
 *
 * @returns {string}
 */
function getDbdir()
{
    let visa =  getLoginToken()
    let dbdir=__dirname + "/../db/"+visa.agtid+"/";
    console.log("dbdir=>"+dbdir)
    return dbdir;
}


