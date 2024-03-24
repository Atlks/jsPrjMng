








/**
 * @param string $METHOD__
 * @return void
 */
function setDbgFunEnter(  $METHOD__,$func_get_args)
    {
        $GLOBALS['dbgpad']=$GLOBALS['dbgpad']+4;

        array_push($GLOBALS['dbg'], str_repeat(" ", $GLOBALS['dbgpad']) . $METHOD__ . '(((' . json_encode($func_get_args).")))");
}


function setDbgVal(  $METHOD__,  $vname,$val)
    {
        array_push($GLOBALS['dbg'], str_repeat(" ", $GLOBALS['dbgpad']) . $METHOD__ . ":: $vname=>$val" );

}


/**
 * @param string $METHOD__
 * @param float $retval
 * @return void
 */
function setDbgRtVal(  $METHOD__,  $retval)
    {
        // ENDFUN
        array_push($GLOBALS['dbg'], str_repeat(" ", $GLOBALS['dbgpad']) ."". $METHOD__ . ':: ret=>' . $retval);
$GLOBALS['dbgpad']=$GLOBALS['dbgpad']-4;
}