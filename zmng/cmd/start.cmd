//node_modules/.bin/node-dev  libBiz/callweb.js

node_modules/.bin/node-dev libBiz/callweb.js

Linux后台运行命令有两种方式：

    cmd & ： 后台运行，关掉终端会停止运行
    nohup cmd & ： 后台运行，关掉终端不会停止运行



    nohup node_modules/.bin/node-dev  libBiz/callweb.js &
