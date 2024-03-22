<?php


//$path_data_item = "d:/row3.json";

//file_put_contents($path_data_item,json_encode($map));
$filename = "db10w.zip";
$zip = new ZipArchive();
$zip -> open($filename, ZipArchive::CREATE);  //打开压缩包
for($i=1;$i<10*10000; $i++)
{
    $d = new \DateTime();
    $map = [
        'id' => $d->format( 'Y-m-d His.u' ),
        'game_id' =>  $i,                                     //游戏ID
        'game_room_ids' => 'array'];
    //compress lev looks not take effect ,in read..red sec also same...
  //  $zip->setCompressionName($i.'.txt',ZIPARCHIVE::CM_STORE );
     $zip->addFromString($i.'.txt', json_encode($map));
  //  $zip->addFromString( '1.txt', json_encode($map));
//    if($i>10)
//        break;

}
$zip -> close(); //关闭压缩包

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