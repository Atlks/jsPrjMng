<?php

//  http://localhost/api/v1/callfl?fl2024=mod/callfn&fl2025=fx&fn2025=f1
$f=$_GET['fl2025'];
require_once __DIR__."/../".$f.".php";



$fun=$_GET['fn2025'];

return $fun();