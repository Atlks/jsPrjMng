<?php

use think\facade\Request;

require __DIR__ . '/../vendor/autoload.php';

// 应用初始化导入tp类库
 (new \think\App())->console;


$r=Request::get("type/d",1);
 $rows_dxds = \think\facade\Db::query("select 11 c1 ");
//// $rows_dxds = \think\facade\Db::query("select 1 as c1 from db1.t1  ");
 var_dump($rows_dxds);


