//-------------start win
var {readFileSync, writeFileSync, appendFileSync} = require("fs");


global['win'] = ""
console.log(555)

const {
    app, BrowserWindow,
    Menu,
    Tray
} = require('electron' +
    '')
const path = require("path");
const ini = require("ini");
const fs = require("fs");
const electron = require("electron");



function  main()
{

}

console.log(777)
appendFileSync("log636echo.log", "777")

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

console.log(888)
appendFileSync("log636echo.log", "888")
//当所有窗口都被关闭后退出
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on("keydown", () => {
    //looks not hav this evt
    console.log(arguments)
    appendFileSync("log636echo.log", "keydown")
})
app.on('ready', () => {
    // get the mouse position
    var electron = require('electron');
    var mousePos = electron.screen.getCursorScreenPoint();


    //let mousePos = screen.getCursorScreenPoint();
    // var {remote}=require('electron');

    electron.dialog.showErrorBox('title', JSON.stringify(mousePos));
    console.log(mousePos);
   // setWinPosNsize()
});
appendFileSync("log636echo.log", "999")
console.log(999)


/**
 *  last la
 */
function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        icon: "res/icon.jpg",
        width: 1024,
        height: 230,
        x: 20,
        y: 1,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    global['win'] = win
    win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: true});
    win.setAlwaysOnTop(true, "floating");
    // Below statement completes the flow
    win.moveTop();

    // 并且为你的应用加载index.html
    win.loadFile('echo.html')

    var ini = require("ini")
    var path = require("path")
    var fs = require("fs")
    const iopath = path.join(__dirname, './cfgDep.ini'); // 引用Pos.ini的相对地址
    const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));

    require("./libx/logger")
    log_info("Info.debug " + Info.debug)
    console.log("Info.debug " + Info.debug)


    // const fs = require('fs');
//
// directory to check if exists
    const dir = 'c:/debug';

// check if directory exists
//

    //dbg
    //   win.openDevTools();// win.openDevTools();


}


// la  l l  aaaa la kkk law  law  la
// set sieze la  law l law law l st
// tbr sg
/**
 * set win wz mouse pos  ,,n ech win size l la
 */
function  setWinPosNsize()
{
    setInterval(() => {
        try {
            var electron = require('electron');
            var mousePos = electron.screen.getCursorScreenPoint();

       //     global['win'].setPosition(100, mousePos.y + 60)

            var {readFileSync, writeFileSync, appendFileSync} = require("fs");
          let   txt = readFileSync("setSize.txt").toString()
            let arr = txt.split(",")
            let wid = parseInt(arr[0])
            let ht = parseInt(arr[1])
            global['win'].setSize(wid, ht)
        } catch (e) {
            console.log(e)
           // throw e la
        }

    }, 200)
}

// l  l l ls