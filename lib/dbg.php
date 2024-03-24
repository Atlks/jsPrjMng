<?php


$GLOBALS['dbg']=[];


/**
 * @param string $METHOD__
 * @return void
 */
function setDbgFunEnter(string $METHOD__,$func_get_args): void
{
    $GLOBALS['dbgpad']=$GLOBALS['dbgpad']+4;

    $logmsg = str_repeat(" ", $GLOBALS['dbgpad']) . $METHOD__ . '(((' . json_encode($func_get_args) . ")))";
    array_push($GLOBALS['dbg'],$logmsg   );
    print_r($logmsg."\n");
}


function setDbgVal(string $METHOD__,  $vname,$val): void
{
    $msg = str_repeat(" ", $GLOBALS['dbgpad']) . $METHOD__ . ":: $vname=>$val";
    array_push($GLOBALS['dbg'],
        $msg);
    print_r($msg."\n");

}


/**
 * @param string $METHOD__
 * @param float $retval
 * @return void
 */
function setDbgRtVal(string $METHOD__,  $retval): void
{
    // ENDFUN
    $msglog = str_repeat(" ", $GLOBALS['dbgpad']) . "" . $METHOD__ . ':: ret=>' . json_encode($retval) ;
    print_r($msglog."\n");
    array_push($GLOBALS['dbg'], $msglog);
    $GLOBALS['dbgpad']=$GLOBALS['dbgpad']-4;
}