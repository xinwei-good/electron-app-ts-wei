const { app,ipcMain,dialog,Notification, Menu, MenuItem,Tray } = require('electron')  
const  MainWindow =require('./viewsWindow/mainWinsow')
const maninHendel= require('./maninHendel/handel')
    app.whenReady().then(() => {
      MainWindow.create()
    })
