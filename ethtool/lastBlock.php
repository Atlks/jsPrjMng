<?php




$tm=time();
$url="https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=$tm&closest=before&apikey=VASRGU6XT768WSKI2VME6Z8ZK3GK5E3UDT";

$t= http_get($url);

$json=json_decode($t );
$lastBlockNum=$json->result;
var_dump($lastBlockNum+40);

function http_get($url)
{
    echo "\r\n".$url."\r\n";
    $t=file_get_contents($url) ;
    echo  "\r\n".$t."\r\n";
    return $t;
}
