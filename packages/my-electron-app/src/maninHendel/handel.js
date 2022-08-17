const { app, BrowserWindow, Menu,ipcMain,dialog,BrowserView } = require('electron')  
const  MainWindow =require('../viewsWindow/mainWinsow') 
const  loginWindow =require('../viewsWindow/loginWindonView')

app.disableHardwareAcceleration()   // 禁用当前应用程序的硬件加速
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

ipcMain.on('open-diong',()=>{
  loginWindow.create()
})

      
function showNotifing(){
  new Notification({title:'Notification_TITLE',body:'Notification_BODY',silent:true}).show()
}

function menuWindow(){
  const menu=new Menu();
  menu.append(new MenuItem({label:'复制',role:'copy'}));
  
}

function tray(){
  let tray = null
  ray = new Tray('./assets/favicon.ico')
const contextMenu = Menu.buildFromTemplate([
  { label: 'Item1', type: 'radio' },
  { label: 'Item2', type: 'radio' },
  { label: 'Item3', type: 'radio', checked: true },
  { label: 'Item4', type: 'radio' }
])
tray.setToolTip('This is my application.')
tray.setContextMenu(contextMenu)
}