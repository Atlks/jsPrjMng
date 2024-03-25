<?php

/**
 * @param $a
 * @return array|string[]
 */
function arr_upperElmt($a): array
{
    $a = array_map(function ($itm) {
        return strtoupper($itm);
    }, $a);
    return $a;
}

/**
 * @param $extFile
 * @return false|string[]
 */
function arr_splt($extFile)
{
    $a = explode(" ", $extFile);
    $a = array_filter($a);
    return $a;
}

function arrar_sort($colName, $SORT_ASC, &$a)
{

    //  arrar_sort($colName,SORT_ASC,$a);
//    $age_arr = array_column($a, $colName);
//    asort($age_arr);
    //if($SORT_ASC==SORT_ASC)
    // $sourtMap=[SORT_ASC]

    if ($SORT_ASC == SORT_ASC) {
        usort($a, function ($itm, $itm2) use ($SORT_ASC, $colName) {


            if ($itm[$colName] < $itm2[$colName])
                return -1; //dont swap
            else if ($itm[$colName] > $itm2[$colName])
                return 1;
            else
                return 0; //eq  dont swap

        });
    }

    if ($SORT_ASC == SORT_DESC) {
        usort($a, function ($itm, $itm2) use ($SORT_ASC, $colName) {


            if ($itm[$colName] < $itm2[$colName])
                return 1;  //swap
            else if ($itm[$colName] > $itm2[$colName])
                return -1;
            else
                return 0; //eq  dont swap

        });
    }


}


/**
 * 遍历某个目录下的所有文件
 * @param string $dir
 */
function arr_flt_frmDirWhrby($dir, $fltrFun)
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