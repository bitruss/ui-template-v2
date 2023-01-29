import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/Router.vue";

////language////////////
import lang from "./lang/lang";
import VueTippy from "vue-tippy";

import "./assets/main.scss";
import "tippy.js/dist/tippy.css"; // optional for styling

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

///////////////////////////
const app = createApp(App);

app.use(lang);
app.use(createPinia());
app.use(router);
app.use(VueTippy, {
  defaultProps: { placement: "right" },
});

app.use(Toast, {
  // You can set your default toast options here
});

app.mount("#app");
