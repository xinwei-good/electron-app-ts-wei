const { app, BrowserWindow, Menu,ipcMain,dialog,BrowserView } = require('electron')  
const path =require('path')
const isdev =!app.isPackaged

 module.exports =class loginWindow{
    constructor(){
      loginWindow.create()
    }
    static win
    static async create(){
        // Menu.setApplicationMenu(null) //取消顶部菜单栏
        this.win = new BrowserWindow({
            width: 300,
            height: 200,
            // frame:false, //缩小，最大化去除
           webPreferences:{
            // preload: path.join(__dirname, '../preload.js'),
            nodeIntegration:true,
           },
          })
          if(isdev){
           await this.win.loadURL('http://localhost:3000/#/login/index')
          }else{
           let page_url=path.join(__dirname, '../web-dist/index.html')
           await this.win.loadFile(page_url,{hash:"/login/index"}) 
          }
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