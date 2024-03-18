


## invoke  

http://localhost/api/v1/callfl?fl2024=mod/act1
Route::get('callfn', 'ThirdParty/callfn');
Route::get('callfl', 'ThirdParty/callfl');


# cfg router
\app\api\route\app.php
Route::get('callfn', 'ThirdParty/callfn');
Route::get('callfl', 'ThirdParty/callfl');


# adpter 
    public function callfl(){
        $f=$_GET['fl2024'];
      return   require __DIR__."/../../../".$f.".php";

    }


    public function callfn(){
        $f=$_GET['fl2024'];
        require_once __DIR__."/../../../".$f.".php";


        $fun=$_GET['fn2024'];

        return $fun();

    }




# mod/act1.xx



<?php

 

  //   return  "Act111";