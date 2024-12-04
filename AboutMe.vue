<template>
  <v-container class="pa-0 about-me-container" >
    <v-row align="center">
      <!-- Left Image Section -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <img src="../assets/1.jpg" alt="Ayesha Batool" class="about-image"/>
      </v-col>

      <!-- Right Text Section -->
      <v-col cols="12" md="6">
        <div class="text-container">
          <h2 class="display-2">About Me</h2>
          <p class="subheading">
            Hello, I'm Ayesha Batool, a passionate web developer with experience in building modern and responsive websites. I love working with the latest technologies and continuously learning new skills to improve my craft. I'm always excited to take on new challenges and collaborate with amazing teams to create innovative digital solutions.
          </p>
          <p>
            In my free time, I enjoy exploring new places, experimenting with new coding techniques, and contributing to open-source projects. Let's connect!
          </p>
          <!-- More About Me Button -->
          <v-btn color="white" class="mt-4 rounded-xl" @click="goToMoreAboutMe">More About Me</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutMe',
  methods: {
    goToMoreAboutMe() {
      // You can handle the button click here, for example, navigate to another section or route
      alert("More about me coming soon!");
    }
  }
}
</script>

<style scoped>
/* Apply a black background color to the entire about-me-container */
.about-me-container {
  margin-top: 80px;
  height: 550px;
  width: 100%;   /* Full width */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* Set background color to black */
  color: white; /* Text color white for contrast */
}

.about-image {
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 50%;
}

.text-container {
  text-align: left;
}

.text-container h2 {
  margin-bottom: 20px;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.5;
}

.v-btn {
  text-transform: none; /* Prevent button text from being uppercased */
}

.mt-4 {
  margin-top: 20px;
}

.v-btn.primary {
  background-color: black; /* Primary color for the button */
  color: white;
  padding: 10px 20px;
}

/* Optional: If you want the whole page background to be black */
body {
  background-color: black;
  color: white;
}

.v-row {
  height: 100%;
}
</style>
