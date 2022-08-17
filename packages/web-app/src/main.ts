import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router";
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");

declare global {
  interface Window {
    ipcRenderers: {
      send: (name: string, data?: unknown) => void;
      invoke: (name: string, data?: unknown) => void;
    };
  }
}
