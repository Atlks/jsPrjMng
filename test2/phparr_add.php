<?php



$filename = "coll1.php";
$arr = [];
$txt = "<?php return [@kv@] ;";


//die();
$curitemTpmplt=file_get_contents("arritemTmpl.txt");

for ($i = 1; $i < 1 * 10000; $i++) {
    if ($i % 1000 == 0)
        var_dump($i);
    $d = new \DateTime();
    $id = $d->format('Y-m-d His.u');
    $curSec = "\n\n\n" . "[" . $id . "]\n";



    $key = "id"; $v=$i;
    $curitemTpmplt1 = getKvStmt($key, $curitemTpmplt, $v,"int");

    $key = "dt"; $v=$id;
    $curitemTpmplt2 =  getKvStmt($key, $curitemTpmplt, $v) ;
    $arrStmt = "'idd@id@'=>[" . $curitemTpmplt1 . "," . $curitemTpmplt2 . "] ";
    $arrStmt =    str_replace("@id@", $i, $arrStmt);


    $arr[] = $arrStmt;





    //   file_put_contents($filename,$curSec,FILE_APPEND);// perf ybe

}


$kvs=join(",\n\n\n",$arr);
$txt = str_replace("@kv@", $kvs, $txt);
file_put_contents($filename, $txt);


die();


/**
 * @param string $key
 * @param $curitemTpmplt
 * @param string $v
 * @return array|string|string[]
 */
function getKvStmt(string $key, $curitemTpmplt, string $v, $type="str")
{
    $curitemTpmplt = str_replace("@key@", $key, $curitemTpmplt);

    if($type=="str")
        $curitemTpmplt = str_replace("@val@", "'".$v."'", $curitemTpmplt);
    else
        $curitemTpmplt = str_replace("@val@",  $v , $curitemTpmplt);
    return $curitemTpmplt;
}


