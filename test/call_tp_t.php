<?php

//tp6  cmd test
//  php.exe  test\call_tp_t.php calltp


use app\model\Setting;

require_once __DIR__."/../lib/sys1011.php";



function main101() {
   echo 999;

  $set = Setting::find(3);
  echo   $set->value;

 // return "retval111";
}






// call main（）
call_inTpX("main101");






