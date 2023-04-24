import { createApp } from "vue"
import App from "./App.vue"
import { createVuetixUI } from ".."

createApp(App).use(createVuetixUI()).mount("#app")