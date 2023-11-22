


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





global['getDbdirV2']=getDbdirV2

/**
 *
 * @returns {string}
 */
function getDbdirV2(agtid)
{

    let dbdir=__dirname + "/../db/"+agtid+"/";
    console.log("dbdir=>"+dbdir)
    return dbdir;
}
