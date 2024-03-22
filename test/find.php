<?php



function binarySearch($array, $findVal, $start, $end)
{
    // 以中间点作为参照点比较，取整数
    $middle = intval(($start + $end) / 2);
    if ($start > $end) {
        return -1;
    }
    if ($findVal > $array[$middle]) {
        // 查找数比参照点大，则要查找的数在右半边
        return binarySearch($array, $findVal, $middle + 1, $end);

    } elseif ($findVal < $array[$middle]) {
        // 查找数比参照点小，则要查找的数在左半边
        return binarySearch($array, $findVal, $start, $middle - 1);

    } else {
        return $middle;
    }
}

// 调用
$array = [10,12,16,19,20,34,56,78,84,95,100];
echo binarySearch($array, 20, 0, count($array)-1);