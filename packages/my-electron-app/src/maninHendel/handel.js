const { app, BrowserWindow, Menu,ipcMain,dialog,BrowserView } = require('electron')  
const  MainWindow =require('./viewsWindow/mainWinsow') 

ipcMain.on('open-diong',()=>{
  app.quit()
})