<?php

//tp6  cmd test
//  php.exe  test\call_tp_t.php calltp
//echo 111;
// 命令行入口文件
// 加载基础文件
require __DIR__ . '/../vendor/autoload.php';

//$fun = "fff641";

$GLOBALS['fun641'] = "fff641";
$GLOBALS['prm641'] = ["ttt65222__PRM"];
$GLOBALS['callbackFun'] =function ($ret){
  echo  $GLOBALS['ret641'];
  echo 99;
};



// 应用初始化
(new \think\App())->console->run();


function fff641($prm) {
  echo $prm;
  return "retval111";
}

