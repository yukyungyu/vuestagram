import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import mitt from "mitt";
import store from "./store.js";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// library.add(faUserSecret);
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store).use(router).mount("#app");
