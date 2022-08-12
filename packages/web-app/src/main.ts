import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");

declare global {
  interface Window {
    ipcRenderers: {
      send: (name: string, data?: unknown) => void;
      invoke: (name: string, data?: unknown) => void;
    };
  }
}
