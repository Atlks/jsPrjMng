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