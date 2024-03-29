// electron.app负责管理Electron 应用程序的生命周期， electron.BrowserWindow类负责创建窗口。 
const {
    app,
    BrowserWindow,
    Menu,
    MenuItem,
    globalShortcut
} = require('electron');

// 保持引用一个全局的窗口对象mainWindow，如果没有的话，窗口将会在JavaScript对象垃圾回收时被自动关闭;
let mainWindow;
const menu = new Menu();

menu.append(new MenuItem({
    label: 'Print',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Ctrl+Shift+I',
    click: () => {
        console.log('time to print stuff')
    }
}))
// 它将在应用程序准备就绪后打开一个窗口：
function createWindow() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegrationInWorker: true
        }
    })

    // 然后加载应用的 index.html。
    mainWindow.loadFile('index.html')

    // 打开开发者工具
    mainWindow.webContents.openDevTools()

    // 当 window 被关闭，这个事件会被触发。
    mainWindow.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null
    });
    globalShortcut.register('CommandOrControl+X', () => {
        console.log('CommandOrControl+X is pressed')
    })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (mainWindow === null) {
        createWindow()
    }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
// process.dlopen = () => {
//     throw new Error('Load native module is not safe')
// }
// let worker = new Worker('script.js')

let myNotification = new Notification('标题', {
    body: '通知正文内容'
  })
  
  myNotification.onclick = () => {
    console.log('通知被点击')
  }