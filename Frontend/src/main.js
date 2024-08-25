import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import i18n from "./locales/I8nHelper";

const app = createApp(App);

app.use(store);

app.use(router);

app.use(ElementPlus);

//Prueba para forzar el locale
//i18n.global.locale = "en";

app.use(i18n);

app.mount("#app");
