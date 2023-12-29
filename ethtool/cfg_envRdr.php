<?php


print_r(parse_ini_file(".env")['hostname']);
$val = (int)((0.1+0.7)*10);
echo "rrP:".$val;


class LotteryHash28
{
    public $lottery_no = 2;

}

$inicls=parse_ini_file(".env")['game_ini_class'];
$c=new $inicls();