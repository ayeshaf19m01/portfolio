import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '../components/AboutMe.vue';
import ContactMe from '../components/ContactMe.vue';
import MyServices from '../components/MyServices.vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

const routes = [
    // Define the routes and their corresponding components
    { path: '/', component: NavBar, name: 'Home' },  // Default Route (Home)
    { path: '/about', component: AboutMe, name: 'About' }, 
    { path: '/services', component: MyServices, name: 'Services' },
    { path: '/contact', component: ContactMe, name: 'Contact' },
    { path: '/footer', component: Footer, name: 'footer' }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
