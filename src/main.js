import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Required for Vuetify styling
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router'; // Import your router

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Create Vue app and apply Vuetify and Router
createApp(App).use(vuetify).use(router).mount('#app');
