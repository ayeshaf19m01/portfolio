<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="black" dark class="position-sticky">
      <v-container fluid>
        <v-row align="center" justify="space-between">
          <!-- Portfolio Text on Left -->
          <v-col>
            <v-btn text class="text-h6"><strong>Ayesha</strong></v-btn>
          </v-col>
          
          <!-- Links in the Center -->
          <v-col class="d-flex justify-center">
            <v-btn text class="white--text" @click="scrollToTop">Home</v-btn>
            <v-btn text class="white--text" href="#about">About</v-btn>
            <v-btn text class="white--text" href="#services">Services</v-btn>
            <v-btn text class="white--text" href="#contact">Contact</v-btn>
            <v-btn text class="white--text" href="#footer">Footer</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Hero Section -->
    <v-container class="pa-0">
      <v-row class="fill-height">
        <!-- Left Text Section with Animation -->
        <v-col cols="12" md="6" class="d-flex align-center">
          <div class="text-container p-4">
            <h1 class="display-2 animated fade-in">Hi, I'm Ayesha Batool</h1>
            <h3 class="display-2 animated fade-in" style="animation-delay: 0.3s;">Web Developer</h3>
            <p class="subheading animated fade-in" style="animation-delay: 0.6s;">
              I am web developer with 8 months of experience specializing in HTML, CSS, Tailwind CSS, Bootstrap, React, Vue, Vuex, Vuetify, and Node.js. I have built responsive, dynamic web applications and focuses on delivering high-quality, scalable solutions.</p>
             
            <!-- Buttons Row -->
            <div class="buttons-row animated slide-up" style="animation-delay: 1s;">
              <v-btn color="black" class="mr-2 ml-0 rounded-xl">Hire Me</v-btn>
              <v-btn color="black" class="rounded-xl">Contact Me</v-btn>
            </div>
          </div>
        </v-col>

        <!-- Right Image Section -->
        <v-col cols="12" md="6" class="hero-right-side">
          <!-- Image only -->
          <img src="../assets/10.jpg" alt="Hero Image" class="hero-image" />
        </v-col>
      </v-row>
    </v-container>
    
    <!-- About Me Section with a black background -->
    <div id="about">
      <AboutMe />
    </div>
    <div id="services">
      <MyServices />
    </div>
    <div id="contact">
      <ContactMe />
    </div>
    <div id="footer">
      <Footer />
    </div>
  
    
  </v-app>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';  // Import the AboutMe component
import MyServices from '../components/MyServices.vue';
import ContactMe from './ContactMe.vue';
import Footer from './Footer.vue';

export default {
  name: 'Navbar',
  components: {
    AboutMe,  // Register the AboutMe component
    MyServices,
    ContactMe,
    Footer,
  },
  methods: {
    // Method to scroll to the top of the page
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // smooth scrolling effect
      });
    },
  },
}
</script>

<style scoped>
.hero-right-side {
  height: 100vh; /* Makes the hero section large */
  overflow: hidden;
}

.hero-image {
  width: 90%;
  height: 80%;
  margin-top: 100px;
  /* object-fit: cover;  */
}

/* Animation Styles */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply Animation to Text */
.animated {
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

.fade-in {
  animation-name: fadeIn;
}

.slide-up {
  animation-name: slideUp;
}

/* Buttons Row Styling */
.buttons-row {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;
}

/* Optional styling for text container */
.text-container {
  text-align: left;
}

/* Ensures the navbar text color is white */
.white--text {
  color: white !important;
}
</style>
