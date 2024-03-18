


# tp routr mode



include    __DIR__."/../mod/act2.php";
use think\facade\Route;

Route::get('/act2', function () {
return 'act2!!';
});



# fl mode 

add   /callfl?f=xxx


Route::get('callfl', 'ThirdParty/callfl');


    public function callfl(){

      return   require __DIR__."/../../../".$_GET['fl2024'].".php";

    }


    public function callfn(){
        require __DIR__."/../../../".$_GET['fl2024'].".php";
        return $_GET['fn2024']();

    }





## fun mode

exted in callfl mode

/callfl?f=callfn.php&fl=xxx.php&fn=f1
<?php

//  http://localhost/api/v1/callfl?fl2024=mod/callfn&fl2025=fx&fn2025=f1
$f=$_GET['fl2025'];
require_once __DIR__."/../".$f.".php";



$fun=$_GET['fn2025'];

return $fun();

