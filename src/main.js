import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/Router.vue";

import VueTippy from "vue-tippy";

import "./assets/main.scss";
import 'tippy.js/dist/tippy.css' // optional for styling

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueTippy, {
  defaultProps: { placement: "right" },
});

app.mount("#app");
