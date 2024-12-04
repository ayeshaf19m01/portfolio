<template>
  <v-footer color="black" padless>
    <v-container class="pa-4" fluid>
      <v-row justify="center" align="center" class="text-center">
        <!-- Social Media Images - First Line (LinkedIn, Facebook, Twitter) -->
        <v-col cols="12" class="d-flex justify-center mb-3">
          <!-- LinkedIn Image -->
          <v-btn
            icon
            href="www.linkedin.com/in/ayesha-batool-b82a62251"
            target="_blank"
            class="mx-2 footer-icon"
            aria-label="LinkedIn"
          >
            <img
              src="../assets/linkedin.png" 
              alt="LinkedIn"
              class="footer-icon-img"
            />
          </v-btn>

          <!-- Facebook Image -->
          <v-btn
            icon
            href="https://www.facebook.com"
            target="_blank"
            class="mx-2 footer-icon"
            aria-label="Facebook"
          >
            <img
              src="../assets/facebook.png" 
              alt="Facebook"
              class="footer-icon-img"
            />
          </v-btn>

          <!-- Twitter Image -->
          <v-btn
            icon
            href="https://www.twitter.com"
            target="_blank"
            class="mx-2 footer-icon"
            aria-label="Twitter"
          >
            <img
              src="../assets/twitter.png" 
              alt="Twitter"
              class="footer-icon-img"
            />
          </v-btn>
        </v-col>
        
        <!-- Footer Links - Second Line -->
        <v-col cols="12" class="d-flex justify-center mt-3">
          <v-btn text href="#faq" class="footer-btn">FAQs</v-btn>
          <v-btn text href="#about" class="footer-btn">About</v-btn>
          <v-btn text href="#contact-me-section" class="footer-btn">Contact Me</v-btn>
          <v-btn text href="#home" class="footer-btn">Home</v-btn>
        </v-col>

        <!-- Copyright Section - Third Line -->
        <v-col cols="12" class="mt-3">
          <span class="white--text"
            >&copy; 2024 Your Company. All rights reserved.</span
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* Styling for footer elements */
.v-footer {
  background-color: black !important;
}

.v-btn {
  margin: 0 10px;
  padding: 0 !important; /* Remove padding to ensure image is fully contained */
  border-radius: 50% !important; /* Ensure the button is circular */
}

.v-btn:hover {
  color: #1976d2; /* Highlight color on hover */
}

/* Ensuring icons and links align nicely */
.d-flex {
  display: flex;
  justify-content: center;
}

/* Styling for footer buttons */
.footer-btn {
  color: white !important; /* Ensures button text is white */
  background-color: transparent !important; /* Removes background */
  border: none !important; /* Removes borders */
}

/* Hover effect for footer buttons */
.footer-btn:hover {
  color: white !important; /* Ensure text stays white on hover */
}

/* Styling for social media images inside the buttons */
.footer-icon-img {
  width: 40px;         /* Set image size */
  height: 40px;        /* Ensure the height matches the width for a square shape */
  border-radius: 50%;  /* Make the image round */
  object-fit: cover;   /* Ensure the image covers the circular button without stretching */
}

.footer-icon img {
  border-radius: 50%; /* Optional, to make sure the image fits properly */
}

.footer-icon:hover img {
  opacity: 0.7; /* Slight transparency effect on hover */
}
</style>
