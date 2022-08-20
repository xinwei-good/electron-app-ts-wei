const { autoUpdater } =require('electron-updater') 
const { ipcMain,app} =require('electron')
const Events=require('./events')
const MainWindow=require('../viewsWindow/mainWinsow')
// Object.defineProperty(app, 'isPackaged', {
//   get() {
//     return true;
//   }
// });
 ipcMain.on("Detection-update", () => {
  // 向服务端查询现在是否有可用的更新。在调用这个方法之前，必须要先调用 setFeedURL
  listenUpdater()
})


 function listenUpdater() {
  autoUpdater.autoDownload = false //设置是否自动更新
  autoUpdater.setFeedURL('http://127.0.0.1:5500/dist/');
  console.log(222);
  // 当更新发生错误的时候触发
  autoUpdater.checkForUpdates()
  autoUpdater.on('error', function(error) {
    MainWindow.win.webContents.send(Events.checkUpdateError, JSON.stringify(error))
  })
  // 当开始检查更新的时候触发
  autoUpdater.on('checking-for-update', function() {
    MainWindow.win.webContents.send(Events.checkingUpdate,{status: 999,message:'正在检查更新'})
  })
  // 当发现一个可用更新的时候触发，更新包下载会自动开始
  autoUpdater.on('update-available', function(info) {
    console.log(333);
    MainWindow.win.webContents.send(Events.updateAvailable, info)
  })
  // 主进程接收渲染进程（页面）派发过来的 下载更新事件
  ipcMain.on(Events.downLoadUpdate, () => {
    autoUpdater.downloadUpdate()
  })
  // 当没有可用更新的时候触发
  autoUpdater.on('update-not-available', function(info) {
    MainWindow.win.webContents.send(Events.updateNotAvailable, info)
  })

  // 更新下载进度事件
  autoUpdater.on('download-progress', function(progressObj) {
    MainWindow.win.webContents.send(Events.updateDownloading, progressObj)
  })
  
  // 下载完成
  autoUpdater.on('update-downloaded', function() {
    MainWindow.win.webContents.send(Events.updateDownloaded)
    autoUpdater.quitAndInstall()
  })
}
