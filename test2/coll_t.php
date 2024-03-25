<?php


require  __DIR__."/../lib/dbg.php";
$GLOBALS['dbg']=[];

$GLOBALS['dbgpad']=0;

$startms = getMillisecond();
$var = require("coll1.php");

echo getMillisecond() - $startms;
echo "ms\r\n";
//print_r($var);

print_r($GLOBALS['dbg']);





function getMillisecond() {


    setDbgFunEnter(__METHOD__,  func_get_args());
    nanus(11);
    list($s1, $s2) = explode(' ', microtime());
    $ms = (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);


    $retval = $ms;
    setDbgRtVal(__METHOD__, $retval);
    return $retval;
}



function nanus($pm)
{
    setDbgFunEnter(__METHOD__,func_get_args());

    nanus_aa(22);

    setDbgVal(__METHOD__,"namexx",999);

    setDbgRtVal(__METHOD__, "r11");
}

function nanus_aa(int $int)
{
    setDbgFunEnter(__METHOD__,func_get_args());



    setDbgRtVal(__METHOD__, "r22");
}


