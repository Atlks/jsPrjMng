//-------------start win


function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        icon:"res/icon.jpg",
        width: 1024,
        height: 230,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

 

    // 并且为你的应用加载index.html
    win.loadFile('echo.html')

    var ini= require("ini")
    var path=require("path")
    var fs=require("fs")
    const iopath = path.join(__dirname, './cfg.ini'); // 引用Pos.ini的相对地址
    const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));

    require("./libx/logger")
    log_info("Info.debug "+ Info.debug)
    console.log("Info.debug "+ Info.debug)


    // const fs = require('fs');

// directory to check if exists
    const dir = 'c:/debug';

// check if directory exists


        win.openDevTools();// win.openDevTools();



}




const {
    app, BrowserWindow,
    Menu,
    Tray
} = require('electron')
const path = require("path");
const ini = require("ini");
const fs = require("fs");



// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

//当所有窗口都被关闭后退出
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})