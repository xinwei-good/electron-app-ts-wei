function isElectronCall(): boolean {
  if (navigator.userAgent.indexOf("Electron") >= 0) {
    return true;
  }
  return false;
}
const isElectron = isElectronCall();
export const ipcRenderer = isElectron ? window.ipcRenderers : undefined;

function sendCmd(cmd: string, args?: any) {
  if (isElectron) {
    ipcRenderer?.send(cmd, args);
  } else {
    console.error(`非electron运行:sendCmd[${cmd}已发送]`);
  }
}

function invokeCmd(cmd: string, args?: any) {
  if (isElectron) {
    ipcRenderer?.invoke(cmd, args);
  } else {
    console.error(`非electron运行:invokeCmd[${cmd}已发送]`);
  }
}

export { sendCmd, invokeCmd };
