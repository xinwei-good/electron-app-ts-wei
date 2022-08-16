const { app,ipcMain,dialog,Notification, Menu, MenuItem,Tray } = require('electron')  
const  MainWindow =require('./viewsWindow/mainWinsow')
require('./maninHendel/handel')
// const handle =require('./maninHendel/handel')
    app.whenReady().then(() => {
      MainWindow.create()
      
    })
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
      app.disableHardwareAcceleration()
    async function handleFileOpen() {
      const { canceled, filePaths } = await dialog.showOpenDialog()
      if (canceled) {
        return
      } else {
        return filePaths[0]
      }
    }

     
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