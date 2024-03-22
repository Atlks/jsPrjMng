<?php




$startms = getMillisecond();


// 调用
//$file_get_contents = file_get_contents("coll.json");//only 46ms
//echo (getMillisecond() - $startms) . "ms\r\n";
//$jsonrows = json_decode($file_get_contents, true); //need 800ms


$file_get_contents = file_get_contents("serlz.json");//only 46ms
echo (getMillisecond() - $startms) . "ms\r\n";
 $jsonrows = unserialize($file_get_contents ); //need  360ms

echo (getMillisecond() - $startms) . "ms\r\n";

$startNum11 = 5;
$endNum11 = 8;
$fld11 = 'game_id';



$array_slice = qry_range($jsonrows,$fld11,$startNum11,$endNum11, $startms);


print_r($array_slice);

echo getMillisecond() - $startms;
echo "ms";
die();




/**
 * @param $jsonrows
 * @param float $startms
 * @return array
 */
function qry_range($jsonrows, $fld,$startNum,$endNum, float $startms): array
{
    $startIdx = binarySearch($jsonrows, function ($jsonobj) use ($fld, $startNum) {


       // global $startNum, $fld;
        $findVal = $startNum;

        if ($jsonobj[$fld] > $findVal)
            return "fdLtrCur";
        if ($jsonobj[$fld] < $findVal)
            return "fdGrtCur";
        return "eq";

    }, 0, count($jsonrows) - 1);
   // $startIdx=  $startIdx+1;

    echo (getMillisecond() - $startms) . "ms\r\n";
    $endIdx = binarySearch($jsonrows, function ($jsonobj) use ($fld, $endNum) {



        $findVal = $endNum;
        if ($jsonobj[$fld] > $findVal)
            return "fdLtrCur";
        if ($jsonobj[$fld] < $findVal)
            return "fdGrtCur";
        return "eq";

    }, 0, count($jsonrows) - 1);

    $endIdx=$endIdx+1;
    echo (getMillisecond() - $startms) . "ms\r\n";
    print_r(["startIdx" => $startIdx, "endidx" => $endIdx]);


    $array_slice = array_slice($jsonrows, $startIdx, $endIdx - $startIdx);
    return $array_slice;
}




/**
 * find front idx
 * @param $array
 * @param $findVal
 * @param $start
 * @param $end
 * @return int
 */
function binarySearch($array, $findValFun, $start, $end)
{
    // 以中间点作为参照点比较，取整数
    $middle = intval(($start + $end) / 2);
    if ($start > $end) {
        return -1;
    }


    $compareRzt = $findValFun ($array[$middle]);
    if ($compareRzt == "fdGrtCur") {
        // $findVal > $array[$middle]
        // 查找数比参照点大，则要查找的数在右半边
        return binarySearch($array, $findValFun, $middle + 1, $end);

    } elseif ($compareRzt == "fdLtrCur") {
        //$findVal < $array[$middle]
        // 查找数比参照点小，则要查找的数在左半边
        return binarySearch($array, $findValFun, $start, $middle - 1);

    } else {
        return $middle;
    }
}

function getMillisecond()
{
    list($s1, $s2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);
}
