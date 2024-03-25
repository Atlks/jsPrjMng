<?php

$subo=["name"=>999];

$map = [
    'id' => 1,
    'game_id' =>  22,                                     //游戏ID
    'game_room_ids' => json_encode($subo)];
$content = http_build_query($map, "", "\n");


file_put_contents("col.ini",$content);