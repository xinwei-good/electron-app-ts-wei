const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderers", {
  send: (title) => ipcRenderer.send(title),
  invoke: (title) => ipcRenderer.invoke(title),
  on: (title) => ipcRenderer.on(title,callback)
});

contextBridge.exposeInMainWorld("updateSoftware", {
  checkingUpdate:(callback)=> ipcRenderer.on('checkingUpdate',callback),
  updateAvailable:(callback)=> ipcRenderer.on('updateAvailable',callback),
  updateDownloading:(callback)=> ipcRenderer.on('updateAvailable',callback),
  updateDownloaded:(callback)=> ipcRenderer.on('updateDownloaded',callback),
});