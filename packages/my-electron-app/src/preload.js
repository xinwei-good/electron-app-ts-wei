const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  openbrowview: () => ipcRenderer.send("open-view"),
  dispath: () => ipcRenderer.send("dispath"),
});
contextBridge.exposeInMainWorld("ipcRenderers", {
  send: (title) => ipcRenderer.send(title),
  invoke: (title) => ipcRenderer.invoke(title),
});
