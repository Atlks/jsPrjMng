<?php


$HexNum=dechex( blockNumb );
$t = $this->http_helper->http_request("https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x$HexNum&boolean=true&apikey=VASRGU6XT768WSKI2VME6Z8ZK3GK5E3UDT");
$json=json_decode($t,true);
return  $json['result']['hash'];