<?php


// tpuse.php

use think\facade\Cache;

require __DIR__ . '/../vendor/autoload.php';
//require_once __DIR__ . "/../lib/ex.php";//loadErrHdr();


// 应用初始化导入tp类库
$app = new \think\App();
($app)->console;

Cache::set('name2', 2211, 3600);
Cache::set('name', 11 );


//Cache::remember('start_time', time());


$v=Cache::remember('888', function( ){

    $d = new \DateTime();
    $map = [
        'id' => $d->format( 'Y-m-d His.u' ),
        'game_id' =>  888,                                     //游戏ID
        'game_room_ids' => 'array'];
    return json_encode($map);
});
print_r($v);