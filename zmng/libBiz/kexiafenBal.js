
global['kexiafenBal']=kexiafenBal
/**
 *
 * @param uname
 * @returns {Promise<string>}
 * @constructor
 */
async function kexiafenBal(uname) {

    log_enterFun(arguments)
    authChk()
    timestamp = time();

    //  _paraValue = "account=%s";
    //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>" + _paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_kexiafen);

    try {
        let rzt = await http_get(url);
        return rzt;
    } catch (e) {
        checkWhiteIp(e, uname);

   // @ts-ignore
        checkAgtidErr(e);

        //   throw  e


    }


}
