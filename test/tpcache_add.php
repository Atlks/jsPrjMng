<?php


//ifj exposd err..need   .env file


use think\facade\Cache;

require __DIR__ . '/../vendor/autoload.php';
// 应用初始化导入tp类库
$app = new \think\App();
($app)->console;


$startms = getMillisecond();

// Cache::set('coll1', [ 1,2 ]);


//Cache::set('name', [1,2,3]);
//Cache::push('name', 4);


//
for($i=1;$i<10*1000;$i++)
{
    $d = new \DateTime();
    $map = [
        'id' => $d->format( 'Y-m-d His.u' ),
        'game_id' =>  $i,                                     //游戏ID
        'game_room_ids' => 'arrayx'];
    Cache::push('coll1',json_encode($map) );

}
//Cache::push('coll1',2);
//print_r(Cache::get("coll1") );
echo  "finis...";



function getMillisecond()
{
    list($s1, $s2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);
}