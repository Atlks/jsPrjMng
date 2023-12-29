<?php

require_once __DIR__."/../lib/iniAutoload.php";
require_once __DIR__."/../lib/cmd.php";
while(true)
{



  $cmd="  chmod -R 777 /www/wwwroot/aapimng";

   exec_console($cmd);
   echo $cmd;
 // sleep(3); for test
  call_user_func_arrayx("sleep",array(300));
  // sleep(60*5);
}