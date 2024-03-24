<?php

require __DIR__ . "/../lib/arr.php";





/**  // search path from dir
 * where ext in
 * AND kw in
 * AND  * path not likein xxxs
 * @param string $dir
 * @return false
 */
function searchFrmDirWhrByKws(string $dir, $extFile, $kwds)
{
    //    print_r($row['path']."\n");
    $a = arr_flt_frmDir($dir, function ($row) use ($kwds, $extFile) {


        // path not likein xxxs
        if (mb_strpos($row['path'], "/vendor/"))
            return false;
        if (mb_strpos($row['path'], "/node_modules/"))
            return false;

        //where ext in (xxx )
        $a = arr_splt($extFile);
        $a = arr_upperElmt($a);
        if (!in_array($row['ext'], $a))
            return false;


//    if (mb_strpos($f, " "))
//    {
//        echo "Dbg";
//    }
        //where txt likein (xxx)
        $t = file_get_contents($row['path']);
        if (!isTxtContainKws($t,arr_splt($kwds)))
            return false;

        return  true;


    });
    return ($a);
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

/**
 * 遍历某个目录下的所有文件
 * @param string $dir
 */
function arr_flt_frmDir($dir, $fltrFun)
{
    $a_rzt = [];
    $list = array();
    $list[] = $dir;
    while (count($list) > 0) {
        //弹出数组最后一个元素
        $file = array_pop($list);

        //处理当前文件
        if (is_file($file)) {
            $row = [];
            $ext = pathinfo($file, PATHINFO_EXTENSION);
            $ext = strtoupper($ext);
            $row['ext'] = $ext;
            $row['path'] = $file;
            if ($fltrFun($row))
                $a_rzt[] = $row;
            // echo $file . "\r\n";
        }

        //如果是目录
        if (is_dir($file)) {
            $children = scandir($file);
            foreach ($children as $child) {
                if ($child !== '.' && $child !== '..') {
                    $list[] = $file . '/' . $child;
                }
            }
        }
    }
    return $a_rzt;

}