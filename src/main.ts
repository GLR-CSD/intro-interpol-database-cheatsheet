/* eslint-disable @typescript-eslint/no-unused-vars */

import App from "./App.vue"
import { createApp } from "vue"
import router from "@/routes"
import { createPinia } from "pinia"
import { VueHeadMixin } from "@unhead/vue"
// Locale i18n packages
import { createI18n } from "vue-i18n"
import messages from "@/locale"
import $text from "@/services/vue-i18n-markdown"

import "./assets/scss/index.scss"

  
const pinia = createPinia()

pinia.use(({ store }) => {
    if (store.$id === "locale") {
        store.$i18n = i18n.global
    }
})

const i18n = createI18n({
    legacy: false,
    warnHtmlMessage: import.meta.env.DEV,
    fallbackLocale: "en",
    messages,
})


createApp(App)
    .use(pinia)
    .use(i18n)
    .use(router)
    .mount("#app")