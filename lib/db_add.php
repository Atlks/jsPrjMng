<?php


require __DIR__ . "/../lib/dbg.php";


//----------------------- save

$map = ["id" => 1, "age" => 5, "name" => "name55", "addtm" => date("Y-m-d")];  // ,  ,
$map = ["id" => 2, "name" => "name22", 'col3' => 12];  // ,  ,

$tabl = "tb1";
$dbFileName = "coll.db";


$arr=[];
$db = new SQLite3($dbFileName);
$db->exec(" BEGIN TRANSACTION; ");
for($i=1;$i<100*10000;$i++)
{
    if($i%300==0)
        var_dump($i);
    $d = new \DateTime();
    $map = [
        'id' => $d->format( 'Y-m-d His.u' ),
        'game_id' =>  $i,                                     //游戏ID
        'game_room_ids' => 'array'];
    saveFast($tabl, $map, $db);

}
$db->exec(" COMMIT;");

//delDt(["id" => 1], $tabl, $dbFileName);


//------------------qery
//
//$querySql = " select * from  $tabl ";
//
//
//$arr_rzt = qry($querySql, $dbFileName);
//
//print_r($arr_rzt);


/**
 * @param SQLite3 $db
 * @param string $querySql
 * @return array
 */
function qry(string $querySql, $dbFileName): array
{
    setDbgFunEnter(__METHOD__, func_get_args());
    $db = new SQLite3($dbFileName);
    $SQLite3Result = $db->query($querySql);
    $arr_rzt = [];
    while ($row = $SQLite3Result->fetchArray(SQLITE3_ASSOC)) {
        $arr_rzt[] = ($row);
    }
    setDbgRtVal(__METHOD__, array_slice($arr_rzt, 0, 3));
    return $arr_rzt;
}

function save($tabl, $map, $dbFileName)
{
  //  setDbgFunEnter(__METHOD__, func_get_args());

    //--------------------- crt table

  //  @crtTable($tabl, $map, $dbFileName);


    $db = new SQLite3($dbFileName);
    $sql = "replace into $tabl" . arr_toSqlPrms($map);
//    setDbgVal(__METHOD__, "sql", $sql);
    $ret = $db->exec($sql);
 //   setDbgRtVal(__METHOD__, $ret);

}

function saveFast($tabl, $map,$db)
{
    //  setDbgFunEnter(__METHOD__, func_get_args());



     $sql = "replace into $tabl" . arr_toSqlPrms($map);
  //  $sql = "insert into $tabl" . arr_toSqlPrms($map);

     $db->exec($sql);


}



function delDt(array $array, string $tabl, string $dbFileName)
{
    setDbgFunEnter(__METHOD__, func_get_args());


    $sql = "delete from $tabl where id=" . $array['id'];
    setDbgVal(__METHOD__, "sql", $sql);
    $db = new SQLite3($dbFileName);
    $ret = $db->exec($sql);
    setDbgRtVal(__METHOD__, $ret);

}


/**
 * @param $dbFileName
 * @param $tabl
 * @param $map
 * @return array
 */
function crtTable($tabl, $map, $dbFileName)
{
    setDbgFunEnter(__METHOD__, func_get_args());
    $db = new SQLite3($dbFileName);
    $sql = " CREATE TABLE $tabl ( id text  PRIMARY KEY) ";
    setDbgVal(__METHOD__, "sql", $sql);
    $db->exec($sql);
    $typeMapPHP2sqlt = ["integer" => "int", "string" => "text"];
    foreach ($map as $k => $v) {
        if (strtolower($k) == "id")
            continue;
        $sqltType = $typeMapPHP2sqlt[gettype($v)];
        if (strtolower($sqltType) != "integer")
            $sqltType = "text";
        $crtColm = "alter table $tabl add column $k  $sqltType";
        setDbgVal(__METHOD__, "sql", $crtColm);
        $db->exec($crtColm);
    }
    setDbgRtVal(__METHOD__, "");
}


function arr_toSqlPrms($arr)
{
//    foreach ($arr as $k => $v)
//    {
//        $f[] = $k;
//        $val[] = "'".$v."'";
//    }
//    $f = implode(',',$f);


    $columns = implode(", ", array_keys($arr));
    //$val = implode(',',array_values($arr));
    $escaped_values = array_map(function ($v) {
        return "'" . $v . "'";
    }, array_values($arr));
    $values = implode(",", $escaped_values);
    return "(" . $columns . ")values(" . $values . ")";
}