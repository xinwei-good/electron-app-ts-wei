export declare global {
  interface Window {
    ipcRenderers: {
      send: (event: string, data?: unknown) => void;
      invoke: (event: string, data?: unknown) => void;
      on: (event: string, callbaak?: any) => void;
    };
    updateSoftware: {
      checkingUpdate: (Callback: (a, b) => void) => any;
      updateAvailable: (Callback: (a, b) => void) => any;
      updateDownloading: (Callback: (a, b) => void) => any;
      updateDownloaded: (Callback: (a, b) => void) => any;
    };
  }
}
