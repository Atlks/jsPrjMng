var page = require('webpage').create();
page.open('http://www.cg9292.net/', function() {
    setTimeout(function() {
        page.render('google.png');
        phantom.exit();
    }, 200);
});


// C:\phantomjs-2.1.1-windows\bin\phantomjs.exe  C:\ck\prg2\pgpl\vietnam\scrsht.js