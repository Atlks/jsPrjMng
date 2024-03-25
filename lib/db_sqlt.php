<?php


require __DIR__ . "/../lib/dbg.php";
require __DIR__ . "/../lib/sql.php";

//----------------------- save

$map = ["id" => 1, "age" => 5, "name" => "name55", "addtm" => date("Y-m-d")];  // ,  ,
$map = ["id" => 2, "name" => "name22", 'col3' => 12,'room'=>5];  // ,  ,

$tabl = "tb6";
$dbFileName = "sqlxx.db";
//save($tabl, $map, $dbFileName);

updt( $tabl,$map, $dbFileName);


//delDt(["id" => 1], $tabl, $dbFileName);


//delDtJqStl("#1",$tabl, $dbFileName);


//------------------qery

$querySql = " select * from  $tabl ";


//$arr_rzt = qry($querySql, $dbFileName);
$arr_rzt = qryJqStl("#2",$tabl, $dbFileName);

print_r($arr_rzt);



die();




function updt( $tabl,$map, $dbFileName)
{
    setDbgFunEnter(__METHOD__, func_get_args());

    //--------------------- crt table




    $db = new SQLite3($dbFileName);
    $sql = "update $tabl set " . arr_toSqlPrms4update($map)." where id=".$map['id'];
    setDbgVal(__METHOD__, "sql", $sql);
    setDbgVal(__METHOD__, "sql_ret",  $db->exec($sql));
    setDbgRtVal(__METHOD__, "");
}


function delDtJqStl($loctr, string $tabl, string $dbFileName)
{
    setDbgFunEnter(__METHOD__, func_get_args());
    $loctr=trim($loctr);
    $id=substr($loctr,1);
    $sql = "delete from $tabl where id=$id"  ;
    setDbgVal(__METHOD__, "sql", $sql);
    $db = new SQLite3($dbFileName);
    $ret = $db->exec($sql);
    setDbgRtVal(__METHOD__, $ret);

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

function qryJqStl($loctr, string $tabl, string $dbFileName)
{
    setDbgFunEnter(__METHOD__, func_get_args());
    $loctr=trim($loctr);
    $id=substr($loctr,1);
    $sql = "select * from $tabl where id=$id"  ;
    setDbgVal(__METHOD__, "sql", $sql);

    $ret = qry($sql,$dbFileName);
    setDbgRtVal(__METHOD__, array_slice($ret, 0, 3));

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
    setDbgVal(__METHOD__, "", $sql);
    $db->exec($sql);
    $typeMapPHP2sqlt = ["integer" => "int", "string" => "text"];
    foreach ($map as $k => $v) {
        if (strtolower($k) == "id")
            continue;
        $sqltType = $typeMapPHP2sqlt[gettype($v)];
        if (strtolower($sqltType) != "integer")
            $sqltType = "text";
        $crtColm = "alter table $tabl add column $k  $sqltType";
        setDbgVal(__METHOD__, "", $crtColm);

        setDbgVal(__METHOD__, "sql_ret", $db->exec($crtColm));


        $idxname=$k."Idx2024";
        $sql_idx="  CREATE INDEX $idxname ON  $tabl (  $k ); ";
        setDbgVal(__METHOD__, "", $sql_idx);

        setDbgVal(__METHOD__, "sql_ret", $db->exec($sql_idx));
    }
    setDbgRtVal(__METHOD__, "");
}




function save($tabl, $map, $dbFileName)
{
    setDbgFunEnter(__METHOD__, func_get_args());

    //--------------------- crt table

    @crtTable($tabl, $map, $dbFileName);


    $db = new SQLite3($dbFileName);
    $sql = "replace into $tabl" . arr_toSqlPrms4insert($map);
    setDbgVal(__METHOD__, "sql", $sql);
    $ret = $db->exec($sql);
    setDbgRtVal(__METHOD__, $ret);

}
