<?php

t();
function t()
{
    $CollStorepath = "db/col1";

    $startms=getMillisecond();
   // echo $startms;
    //select from xxx where xxx
    $rows = qry($CollStorepath, function ($jsonobj) {

        if ($jsonobj['game_id'] == '777')
            return true;

    });
    print_r($rows);
    echo getMillisecond()-$startms;
    echo "ms";
    die();




//   date('Y-m-d His.u')  only sec lev
    for($i=1;$i<10000;$i++)
    {
        $d = new \DateTime();
        $rule = [
            'id' => $d->format( 'Y-m-d His.u' ),
            'game_id' =>  $i,                                     //游戏ID
            'game_room_ids' => 'array'];
          add($rule, $CollStorepath);
    }
    die();







    //file_put_contents("")





//del("2024-03-06 133704",$dbStorepath);

    $rule = [
        'id' => '2024-03-06 133728',
        'game_id' => '22222',                                     //游戏ID
        'game_room_ids' => 'array'];
//updt($rule,$CollStorepath);


}



function getMillisecond() {
    list($s1, $s2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);
}


/**
 * save_add
 * @param $obj
 * @param $coll_store_postn
 * @return void
 */
function add($obj, $coll_store_postn)
{
    if (!file_exists($coll_store_postn))
        mkdir($coll_store_postn, 0777, true);

    $objStorepath = $coll_store_postn . "/" . $obj['id'] . ".json";
    // var_dump($objStorepath);
    file_put_contents($objStorepath, json_encode($obj, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}


function del($objId, $coll_store_postn)
{
    unlink($coll_store_postn . "/" . $objId . ".json");
}


/**
 * save_updt
 * @param $obj
 * @param $coll_store_postn
 * @return void
 */
function updt($obj, $coll_store_postn)
{
    del($obj['id'], $coll_store_postn);
    add($obj, $coll_store_postn);

}


function qry($coll_store_postn, $whereFun)
{
    $arr = [];
    //scan also ok..but need flt dir first..
    //flob just flt auto
    $files = glob($coll_store_postn . "/*.json"); //获取目录下的所有文件和文件夹，不包括子目录

    foreach ($files as $file) {
//    if (is_file($file)) {  //判断是否是文件
//        echo $file . ‘

        $txt = file_get_contents($file);
        $jsonobj = json_decode($txt, true);
        if ($whereFun($jsonobj))
            $arr[] = $jsonobj;


    }
    return $arr;
}