
//electron D:\stand\site.group.api.v1\sql\idx.js



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



function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        icon:"res/icon.jpg",
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })


    // 菜单模板设置
    let template = [
        {
            label: '用户',
            submenu: [
                {label: '切换用户'}
            ]
        },
        {
            label: '帮助',
            submenu: [
                {
                    label: '控制台',
                    click: () => {
                        win.webContents.openDevTools({ mode: 'bottom' })
                    }
                },
                {label: '关于'}
            ]
        }
    ]

    // 加载菜单
    //let m = Menu.buildFromTemplate([])
    //  Menu.setApplicationMenu(m)

    // 并且为你的应用加载index.html
    win.loadFile('sql.htm')

    var ini= require("ini")
    var path=require("path")
    var fs=require("fs")
    // const iopath = path.join(__dirname, './cfgDep.ini'); // 引用Pos.ini的相对地址
    // const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));
    //
    // require("./libx/logger")
    // log_info("Info.debug "+ Info.debug)
    // console.log("Info.debug "+ Info.debug)


    // const fs = require('fs');

// directory to check if exists
    const dir = 'c:/debug';
    win.openDevTools();// win.openDevTools();
// check if directory exists
    if (fs.existsSync(dir))
        // if(Info.debug==1)
    {

        win.openDevTools();// win.openDevTools();
        //show menu
    }else
    {
        //hide menu
        // 加载菜单
        //let m = Menu.buildFromTemplate([])
        //  Menu.setApplicationMenu(m)


    }

    // win.openDevTools();
    creatTray();

    // setTimeout(function (){
    //
    //
    //     app.quit();
    //     app.quit();
    //     app.exit()
    // },5000)

}

//-----------------托盘图标
function creatTray() {


    //设置托盘图标和菜单
    var trayMenuTemplate = [
        {
            label: '打开',
            click: () => {
                mainWindow.show();
            }
        },
        {
            label: '退出',
            click: () => {
                app.quit();
                app.quit();//因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况
            }
        }
    ];
    //系统托盘图标
    appTray = new Tray('res/icon.jpg')
    //图标的上下文菜单
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
    //设置此托盘图标的悬停提示内容
    appTray.setToolTip('我的托盘图标');
    //设置此图标的上下文菜单
    appTray.setContextMenu(contextMenu);
    //单击右下角小图标显示应用左键
    appTray.on('click', function () {
        // mainWindow.show();
    })
    //右键
    appTray.on('right-click', () => {
        appTray.popUpContextMenu(trayMenuTemplate);
    });

}
