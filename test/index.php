<?php

//$_GET['s']="/menuIdx";

global $router;
include __DIR__."/lib/router.php";




echo  ($router[$_GET['s']])();

