const { app, BrowserWindow,desktopCapturer , Menu,ipcMain,dialog,BrowserView } = require('electron')  
const path =require('path')
const isdev =require('electron-is-dev')

 module.exports =class MainWindow{
    constructor(){
      MainWindow.create()
      // this.win =BrowserWindow
    }
    static win
    static async create(){
        // Menu.setApplicationMenu(null) //取消顶部菜单栏
       this.win = new BrowserWindow({
            width: 800,
            height: 600,
            // frame:false, //缩小，最大化去除
           webPreferences:{
            preload: path.join(__dirname, '../preload.js'),
            nodeIntegration:true,
            contextIsolation:true, //设置为false后，才可以在渲染进程中引入为了electron api
           },
         
          })
          if(isdev){
            this.win.loadURL('http://localhost:3000/')
            this.win.webContents.openDevTools({mode:'detach'})
          }else{
            let ab=path.join(__dirname, '../web-dist/index.html')
            this.win.loadFile(ab) 
          }
    }
    static dispatch(){
      MainWindow.win.close()
      MainWindow.win.destroy()
      MainWindow.win=undefined
    }
}