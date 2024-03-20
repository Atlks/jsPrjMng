<?php

//echo file_get_contents("https://google.com/");
//echo file_get_contents("https://coinmarketcap.com/");
//
//echo file_get_contents("https://www.coingecko.com/");



// create curl resource
$ch = curl_init();

// set url
curl_setopt($ch, CURLOPT_URL, "https://www.coingecko.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 跳过证书检查

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');

// $output contains the output string
$output = curl_exec($ch);
echo $output;


if($error=curl_error($ch)){
    die($error);
}


// close curl resource to free up system resources
curl_close($ch);
