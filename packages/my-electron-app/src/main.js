const { app,ipcMain,dialog,Notification, Menu, MenuItem,Tray } = require('electron')  
const  MainWindow =require('./viewsWindow/mainWinsow')
const maninHendel= require('./maninHendel/handel')
const mainUpdate=require('./main_update/updater') //检测更新文件

    app.whenReady().then(() => {
      MainWindow.create()
    })
