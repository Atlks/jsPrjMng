<?php
use think\facade\Cache;


qt();

/////////

$startms = getMillisecond();

//$zip = new ZipArchive;
//$zip->open('db.zip');
//echo $zip->getFromIndex(999);
//$zip->close();
//db10w search 1.5s
//db100w srch 15s
$rs= qry('db10w.zip',function ($row){
    if ($row['game_id'] == '777')
        return true;
});

echo getMillisecond() - $startms;
echo "ms\r\n";
print_r($rs);

die();




function  qt()

{



    require __DIR__ . '/../vendor/autoload.php';
// 应用初始化导入tp类库
    $app = new \think\App();
    ($app)->console;


    $startms = getMillisecond();
    // echo $startms;
    //select from xxx where xxx
    $CollStorepath = 'db10w.zip';
    $rows = Cache::remember('game_id=666', function () use ($CollStorepath) {

        $rows203 = qry($CollStorepath, function ($jsonobj) {

            if ($jsonobj['game_id'] == 666)
                return true;

        });
        return json_encode($rows203);
    });


    print_r($rows);
    echo getMillisecond() - $startms;
    echo "ms";
    die();


}



function qry($coll_store_postn, $whereFun)
{
    $arr = [];
    //scan also ok..but need flt dir first..
    //flob just flt auto
  //  $jsonrows=json_decode(file_get_contents($coll_store_postn),true);


    $zip = new ZipArchive;
    $zip->open($coll_store_postn);

    for ($i = 0; $i < $zip->numFiles; $i++) {

        $txt=    $zip->getFromIndex($i);;
        $row = json_decode($txt, true);
        if ($whereFun($row))
        {
            $arr[] = $row;
            //break;
        }
    }
   // $zip->get

    $zip->close();



    return $arr;
}


function getMillisecond()
{
    list($s1, $s2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);
}


//dep

$path_data_item = "d:/row3.json";
$map = array(
    "name" => "bar",
    "id" => 33,
);
file_put_contents($path_data_item, json_encode($map));


$filename = "db1.zip";
$zip = new ZipArchive();
$zip->open($filename, ZipArchive::CREATE);  //打开压缩包
//$zip -> addFile($path_data_item, basename($path_data_item));  //向压缩包中添加文件
$zip->addFromString('row3.txt', json_encode($map));


//--------add rcd2
$path_data_item = "d:/row2.json";
$map = array(
    "name" => "bar22",
    "id" => 22,
);
file_put_contents($path_data_item, json_encode($map));
$zip->addFile($path_data_item, basename($path_data_item));  //向压缩包中添加文件


$zip->close(); //关闭压缩包