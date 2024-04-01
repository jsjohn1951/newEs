/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Markdown
import { marked, MarkedOptions } from 'marked';

// import VueTypedJs from 'typed.js'
// import { VueTypedJs } from 'typed.js'

// ? Meta data
import { createHead } from '@vueuse/head'
const head = createHead();

// Markdown Mixin
// const markedMixin = {
//     methods: {
//          md: function (input : string, op?: MarkedOptions | undefined) {
//             return marked (input, op);
//         },
//     },
// };

const app = createApp(App)

registerPlugins(app)

app.use(head).mount('#app')