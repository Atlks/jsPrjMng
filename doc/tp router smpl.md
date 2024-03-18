



 api.v1\route\app.php

Route::get('/', function () {
return 'ok!!';
});

Route::get('/', function () {
return 'ok!';
});




Route::get('/callfl', function () {
return   require __DIR__."/../".$_GET['fl2024'].".php";
});



http://localhost/callfl?fl2024=mod/act1