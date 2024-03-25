<?php


//很久没写PHP了，最近有个需求，需要对数组，按照其中某个值，进行排序。
//
//例如，对这个数组，按照age排序

$a = [
    ["name" => 'peny', "age" => 29],
    ["name" => 'raj', "age" => 22], ["name" => 'sheldon', "age" => 30],

];
//处理这个问题，需要组合使用PHP内置数组方法array_column和array_multisort。
//
arrar_sort("age", SORT_ASC, $a);
print_r($a);
arrar_sort("age", SORT_DESC, $a);
print_r($a);


die();




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



//这样，就完成了对数组$a按照age进行排序。
//
//更进一步
//某些时候，需求可能是按照多个值，进行排序。
//
//array_multisort同样是支持的。

$a = [
    ["name" => 'peny', age => 29, weight => 50],
    ["name" => 'raj', age => 22, weight => 80],
    ["name" => 'sheldon', age => 30, weight => 75],
];

$age = array_column($a, 'age');
$weight = array_column($a, 'weight');
array_multisort($age, SORT_ASC, $weight, SORT_ASC, $a);
