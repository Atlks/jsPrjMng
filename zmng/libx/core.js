

const {split} = require("lodash");
global["split"]=split;

require("./fp_ati1990")
require("./enc")

global["somefun1111"]=xxx;
function  xxx()
{

}

global["isset"]=isset;

function isset(varname) {
    try {
        varname = trim(varname);
        rzt = typeof (eval(varname));
        return typeof (varname) != "undefined";
    } catch (e) {
        console_log("[43isset()] " + e.message);
        //  console_log(e);
        return false;
    }

}