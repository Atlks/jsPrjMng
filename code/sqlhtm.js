const cheerio = require("cheerio");
const fs = require("fs");

// html parse
 
function  qry2024()
{
    require( __dirname+"/sqlQery.js");


    sqlQryV2(  $("#sql").val() ,$("#site").val());

}



function shenhe2024()
{
    global['dbname_abcXXX']=$("#site").val();
    require( __dirname+"/SQL_updt_lib.js");
    main214();
}