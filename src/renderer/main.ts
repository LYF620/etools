import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import InputSwitch from "primevue/inputswitch";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./styles/main.less";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component("InputText", InputText);
app.component("InputSwitch", InputSwitch);
app.component("Button", Button);
app.component("Toast", Toast);

app.use(store);

app.use(router);

app.mount("#app");
