<?php


function qryOneRowGetColVal($sql, $colName)
{
    try {

        return \think\facade\Db::query($sql)[0][$colName];

    } catch (\Throwable $e) {
        // var_dump($e)  ;
    }
}