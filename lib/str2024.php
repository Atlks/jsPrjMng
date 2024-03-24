<?php

//$map = [
//    'id' => 1,
//    'game_id' =>  22,                                     //游戏ID
//    'game_room_ids' => 'array'];
//print_r(http_build_queryVat($map,"","\n"));
/**
 * @param $extFile
 * @return false|string[]
 */
function str_splt($extFile)
{
    $a = explode(" ", $extFile);
    $a = array_filter($a);
    return $a;
}
function http_build_queryVat(array $map, string $string, string $string1)
{
    $str="";
    foreach ($map as $k => &$v) {
        $str.=$k."=".$v.$string1;
    }
    return $str;
}



function isTxtContainKws( $t,array $a)
{
    $mustmatchCnt = count($a);
    $nowMatchCnt = 0;

    foreach ($a as $v) {
        if (mb_strpos($t, $v)) {
            $nowMatchCnt++;
        }

    }

    return ($mustmatchCnt == $nowMatchCnt);


}