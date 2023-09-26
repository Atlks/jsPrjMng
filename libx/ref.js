

function  eval2023(){

}
require("./logger.js");

function  getProps(obj)
{
   return   Object.keys(obj);
}


function  evalx(str)
{
    log_enterFun(arguments)
   let eval1 = eval(str);
    log_info(" ret=》"+eval1);
   return  eval1;
}


global['dsl_callFrmUiToBiz']=dsl_callFrmUiToBiz
/**
 *
 * @param cmd
 * @returns {Promise<*>}
 */
async function dsl_callFrmUiToBiz(cmd) {


   log_enterFun_console(arguments)

   let args = cmd.split(" ")
   args = array_filter(args)
   const params = args.slice(1)
   let $rz = await call_func(args[0], params)
   return $rz;

}



 //echo(111)

global["call_func"] = call_func;

/**
 *
 * @param fun
 * @param params
 * @returns {Promise<*>}
 */
async function call_func(fun, params) {
   let arg = JSON.stringify(arguments);
   // arg = JSON.stringify(params);
   let ivkFundbg = "******[call_func]" + arg
   console.log(ivkFundbg);
   log_info(ivkFundbg)
   require("./php");
   require("./core")
   require("./fp_ati1990")
   //in js   apply fun is Fun obj proty.meth..heyou bind call ...

   var func=""
   if (isset("window"))
      func = window[fun];
   else
      func = global[fun];
    if(!func)
       throw "cant find fun ex@ fun=》"+fun;

   //  func=eval(cb);
 //  console.log("[call_func] func=> "+func)

   try {
      // if(params.length==0)
      //    params=null;
      $r = await func.apply("thisobj", params);
      let str = sprintf("54[call_func] ret==>%s",  $r);
      console.log(str.substring(0,300));
      log_info(str.substring(0,300))
      // echo("\r\n\r\n");
      return $r;
   } catch (e) {
      console.log(e)

      log_err("e at:" + fun + arg)
      log_err(json_encode(e));
      throw  e;
   }

}