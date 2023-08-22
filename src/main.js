import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire } from "vuefire";
import { firebaseApp } from "@/includes/firebase";
import App from "./App.vue";

const pinia = createPinia();
createApp(App).use(pinia).use(VueFire, { firebaseApp }).mount("#app");
