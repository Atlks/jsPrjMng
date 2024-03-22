<?php


$startms=getMillisecond();
//第二个参数设置为true，读取多维数组
$config=parse_ini_file('coll.ini',TRUE);


echo "rdNunsrlzTime=>".(getMillisecond()-$startms);
echo "ms";
die();



print_r($config);





function getMillisecond() {
    list($s1, $s2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);
}
