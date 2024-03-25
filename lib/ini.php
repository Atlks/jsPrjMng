<?php


//为了编写.ini文件,你需要创建自己的函数,因为除了阅读之外,PHP没有提供开箱即用的功能(可以在这里找到：
//
//http://php.net/manual/pl/function.parse-ini-file.php).
//
//可能将多维数组封装到.ini-syntax兼容字符串的函数示例可能如下所示：


t2();
function  t2()
{

    $rows=[];
    //你可以像这样测试它：

    for($i=0;$i<3;$i++)
    {

        $d = new \DateTime();
        $timID = $d->format('Y-m-d His.u');
        $dtname="user";
        $locID="loc";
        $id=$dtname.$timID.$locID;

        $rows[$id]=["id" => $id,"timex"=>$timID,"naem"=>"nmmm","rn"=>"","rn2"=>""];
    }




    $arr2ini = arr2iniV2($rows);
    file_put_contents("inistr.ini", $arr2ini);
//echo $arr2ini;
    print_r(parse_ini_file("inistr.ini", true));
}


function arr2iniV2(array $a, array $parent = array())

{
    $out = '';

    foreach ($a as $k => $v) {
        if (is_array($v)) {
//subsection case

//merge all the sections into one array...

            $sec = array_merge((array)$parent, (array)$k);

//add section information to the output

            $out .= "\n\n\n[" . join('.', $sec) . ']' . PHP_EOL;

//recursively traverse deeper

            $out .= arr2iniV2($v, $sec);

        } else {
//plain key->value case

            $out .= "$k=$v" . PHP_EOL;

        }

    }

    return $out;

}

function arr2ini(array $a, array $parent = array())

{
    $out = '';

    foreach ($a as $k => $v) {
        if (is_array($v)) {
//subsection case

//merge all the sections into one array...

            $sec = array_merge((array)$parent, (array)$k);

//add section information to the output

            $out .= '[' . join('.', $sec) . ']' . PHP_EOL;

//recursively traverse deeper

            $out .= arr2ini($v, $sec);

        } else {
//plain key->value case

            $out .= "$k=$v" . PHP_EOL;

        }

    }

    return $out;

}



function  t()
{
    //你可以像这样测试它：

    $x = [
        'sec2' => ["kkk" => 11],

        'section1' => [

            'key1' => 'value1',

            'key2' => 'value2',

            'subsection' => [

                'subkey' => 'subvalue',

                'further' => ['a' => 5],

                'further2' => ['b' => -5]]]


    ];

    $arr2ini = arr2ini($x);
    file_put_contents("inistr.ini", $arr2ini);
//echo $arr2ini;
    print_r(parse_ini_file("inistr.ini", true));
}
