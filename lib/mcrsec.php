<?php
//echo  microtime();

echo getMillisecond();
function getMillisecond() {
    list($s1, $s2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);
}

/*
     * 获取时间差，毫秒级
     */

function get_subtraction()
{
    $t1 = microtime(true);
    $t2 = microtime(true);
    return (($t2-$t1)*1000).'ms';
    }

/*
 * microsecond 微秒     millisecond 毫秒
 *返回时间戳的毫秒数部分
 */
function get_millisecond()
{
    list($usec, $sec) = explode(" ", microtime());
    $msec=round($usec*1000);
    return $msec;

}

/*
 *
 *返回字符串的毫秒数时间戳
 */
function get_total_millisecond()
{
    $time = explode (" ", microtime () );
    $time = $time [1] . ($time [0] * 1000);
    $time2 = explode ( ".", $time );
    $time = $time2 [0];
    return $time;
}

/*
 *
 *返回当前 Unix 时间戳和微秒数(用秒的小数表示)浮点数表示，常用来计算代码段执行时间
 */

function microtime_float()
{
    list($usec, $sec) = explode(" ", microtime());
    return ((float)$usec + (float)$sec);
}

//$millisecond = get_millisecond();
//$millisecond = str_pad($millisecond,3,'0',STR_PAD_RIGHT);
//echo date("YmdHis").$millisecond;