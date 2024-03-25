<?php





function arr_toSqlPrms4insert($arr)
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

// arrar_map useage
function arr_toSqlPrms4update($arr)
{
//    foreach ($arr as $k => $v)
//    {
//        $f[] = $k;
//        $val[] = "'".$v."'";
//    }
//    $f = implode(',',$f);


    // $columns = implode(", ", array_keys($arr));
    //$val = implode(',',array_values($arr));
    $escaped_values = array_map(function ($k,$v) {
        return $k."='" . $v . "'";
    }, array_keys($arr), array_values($arr));
    $values = implode(",", $escaped_values);
    return  $values;
}
