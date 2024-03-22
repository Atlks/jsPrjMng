<?php

//seywe iuswe
// 400d*5=2000d
// ch 25*30=800d
// so sum 3kd
//10hao 400u.1500d
//so exp will 1500d
//need ,cvt 4kd




// tpuse.php
use app\api\controller\MemberVip;
use app\commons\service\MemberVipService;
require __DIR__ . '/../vendor/autoload.php';
//require_once __DIR__ . "/../lib/ex.php";//loadErrHdr();
require_once __DIR__ . "/../config/console.php";
require_once __DIR__ . "/../app/common.php";

// 应用初始化导入tp类库
 (new \think\App())->console;
//// composer update topthink/framework
//var_dump(9999);
//$rows_dxds = \think\facade\Db::query("select 11 c1 ");
//// $rows_dxds = \think\facade\Db::query("select 1 as c1 from db1.t1  ");
//var_dump($rows_dxds);
//
////$rzt=\think\facade\Db::execute("update db1.t1 set c1='000' ");
////var_dump($rzt);
//
//var_dump($rows_dxds[0]['c1']);

//   s=/index.php?s=api/v1/MemberVip/t
$data = (new MemberVip())->t();
print_r($data);
//var_dump($data);
//
//try{
//    foreach ($data['list'] as &$row) {
//        $row['level']=$row['level']+1;
//        if( $row['level']==11)
//            $row['level']=0;
//      //  var_dump($row['level']);
//    }
//}catch (\Throwable $e)
//{
//   // var_dump($e)  ;
//}

file_put_contents("data403.json",json_encode($data,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

