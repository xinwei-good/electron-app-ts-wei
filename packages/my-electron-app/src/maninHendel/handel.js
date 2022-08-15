const { app, BrowserWindow, Menu,ipcMain,dialog,BrowserView } = require('electron')  
const  MainWindow =require('../viewsWindow/mainWinsow') 
const  loginWindow =require('../viewsWindow/loginWindonView')

ipcMain.on('open-diong',()=>{
  loginWindow.create()
})

