import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router";
import "./api-node/windowTypes.d";
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
