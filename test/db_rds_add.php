<?php


//$path_data_item = "d:/row3.json";

//file_put_contents($path_data_item,json_encode($map));
//$redis->lrange("key1", 0 ,5);


$redis = new redis();
$redis -> connect('127.0.0.1',6379);
$redis->auth("123456");

$redis -> flushAll();

for($i=1;$i<100*10000; $i++)
{
    $d = new \DateTime();
    $map = [
        'id' => $d->format( 'Y-m-d His.u' ),
        'game_id' =>  $i,                                     //游戏ID
        'game_room_ids' => 'array'];

    $redis->hMSet("collx",  array($i=> json_encode($map)  ));
   //  ($redis -> lPush('db10w',json_encode($map) ));

}


die();
//--------------------------------------

$filename = "db1.zip";
$zip = new ZipArchive();

$zip -> open($filename, ZipArchive::CREATE);  //打开压缩包
//$zip -> addFile($path_data_item, basename($path_data_item));  //向压缩包中添加文件
$zip->addFromString('row3.txt', json_encode($map));


//--------add rcd2
//$path_data_item = "d:/row2.json";
//$map=array(
//    "name" => "bar22",
//    "id" => 22,
//);
//file_put_contents($path_data_item,json_encode($map));
//$zip -> addFile($path_data_item, basename($path_data_item));  //向压缩包中添加文件


$zip -> close(); //关闭压缩包