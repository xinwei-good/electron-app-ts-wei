const { app, BrowserWindow, Menu,ipcMain,dialog,BrowserView } = require('electron')  
const path =require('path')

 module.exports =class loginWindow{
    constructor(){
      MainWindow.create()
      // this.win =BrowserWindow
    }
    static win
    static async create(){
        // Menu.setApplicationMenu(null) //取消顶部菜单栏
        loginWindow.win = new BrowserWindow({
            width: 300,
            height: 200,
            // frame:false, //缩小，最大化去除
           webPreferences:{
            // preload: path.join(__dirname, '../preload.js'),
            nodeIntegration:true,
           },
          })
          loginWindow.win.loadFile('index.html')
          loginWindow.win.webContents.toggleDevTools()
    }
    static async openBroview(){
      // const view = new BrowserView()
      // this.win.setBrowserView(view)
      //   view.setBounds({ x: 0, y: 300, width: 300, height: 300 })
      //   view.webContents.loadURL('https://electronjs.org')
    }
    static dispatch(){
      
    }
}