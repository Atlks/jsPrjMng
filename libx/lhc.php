<?php

$str = "特码01 02 03押10";

echo json_encode(tema($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);


function tema($str) {
  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 2, $pos - 2);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $nums_arr = explode(" ", $nums);
  foreach ($nums_arr as $key => $value) {
    $bet = "特码" . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}


//------------------特肖

$str="特肖虎牛鼠猪狗鸡猴羊马蛇龙兔押10";


echo json_encode(teXiao($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
function teXiao(string $str) {

  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 2, $pos - 2);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $nums_arr = str_splitX($nums);
  foreach ($nums_arr as $key => $value) {
    $bet = "特肖" . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}



//正码



$str="正码01 02 03 04押10";


echo json_encode(zhenma($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
function zhenma(string $str) {

  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 2, $pos - 2);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $nums_arr = explode(" ", $nums);
  foreach ($nums_arr as $key => $value) {
    $bet = "正码" . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}


//----连码
$str="三中三01 02 03押10";

echo json_encode(lianma($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
function lianma(string $str) {

  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 3, $pos - 3);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $frt=mb_substr($str,0,3);

  $nums_arr = explode(" ", $nums);
  foreach ($nums_arr as $key => $value) {
    $bet = $frt . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}

//连码 特串
$str="特串01 02押10";

echo json_encode(lianma_techuan($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
function lianma_techuan(string $str) {

  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 2, $pos - 2);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $frt=mb_substr($str,0,3);

  $nums_arr = explode(" ", $nums);
  foreach ($nums_arr as $key => $value) {
    $bet = "特串" . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}



//  连肖


$str="三肖虎牛鼠押10";

echo json_encode(lianxiao($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
function lianxiao(string $str) {

  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 2, $pos - 2);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $frt=mb_substr($str,0,2);

  $nums_arr = str_splitX($nums);
  foreach ($nums_arr as $key => $value) {
    $bet = $frt . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}


// 不中


$str="五不中01 02 03 04 05押10";

echo json_encode(buzhong($str), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
function buzhong(string $str) {

  $pos = mb_strpos($str, "押");
  $nums = mb_substr($str, 3, $pos - 3);
  $money = mb_substr($str, $pos + 1);
  $arr = [];

  $frt=mb_substr($str,0,3);

  $nums_arr = explode(" ", $nums);
  foreach ($nums_arr as $key => $value) {
    $bet = $frt . $value . "押" . $money;
    $arr[] = $bet;
  }
  return $arr;
}




//支持中文的splt ,,ori splt only eng
function str_splitX($str)
{
  //support chinese char,,,,  str_split not spt chins char
  return  preg_split('/(?<!^)(?!$)/u', $str);
}
