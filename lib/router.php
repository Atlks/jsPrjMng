<?php

//$_GET['s']="/menuIdx";



$router=[];

$router["/menuIdx"]=function (){
    return 111;
};

$router["/tree"]=function (){
    return "tree...";
};
$router["/"]=function (){
    return "ok";
};

//$s=$_GET['s'];
//
//$fn=$router[$s];
//echo  $fn();
//
