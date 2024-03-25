
<?php

require_once __DIR__."/../lib/str2024.php";
$filename = "coll.ini";
$arr=[];
$txt="";






//die();
for($i=1; $i<1*10000; $i++)
{
    if($i%1000==0)
        var_dump($i);
    $d = new \DateTime();
    $id = $d->format('Y-m-d His.u');
    $curSec="\n\n\n"."[".$id."]\n";
    $map = [
        'id' => $id,
        'game_id' =>  $i,                                     //游戏ID
        'game_room_ids' => 'array'];
    $content = http_build_queryVat($map, "", "\n");
     $arr[]=$map;
    $curSec.= $content;  //fast than arr join ,,and norm dot conn
    $txt.=$curSec;

   //   file_put_contents($filename,$curSec,FILE_APPEND);// perf ybe

}

   file_put_contents($filename,$txt);




die();


////1. 创建一个关联数组，将要写入ini文件的配置项和值放入数组中。
//
//“`
//
//2. 使用`http_build_query()`函数将数组转换成字符串形式。
//
//“`php
//$content = http_build_query($config, ”, “\n”);
//“`
//
//3. 使用`file_put_contents()`函数将内容写入ini文件，该函数的第一个参数为ini文件的路径，第二个参数为要写入的内容。
//
//“`php
//file_put_contents(‘config.ini’, $content);