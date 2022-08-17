const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderers", {
  send: (title) => ipcRenderer.send(title),
  invoke: (title) => ipcRenderer.invoke(title),
});
