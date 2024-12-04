<template>
  <v-container class="pa-0 mt-16" fluid>
    <v-row justify="center" align="center" class="mb-4">
      <!-- Center Column with Contact Me Card -->
      <v-col cols="12" sm="8" md="6"> <!-- Centered content without offset -->
        <v-card class="contact-card rounded elevation-16" style="height: 550px;">
          <!-- Heading -->
          <v-card-title class="text-center mt-6">
            <span class="headline">Contact Me</span>
          </v-card-title>

          <!-- Email Text Field -->
          <v-card-text>
            <v-text-field
              v-model="email"
              label="Your Email"
              type="email"
              required
              variant="outlined"
              :rules="[emailRule]"
            ></v-text-field>
            <v-text-field
              class="mt-4"
              label="Your Name"
              type="name"
              required
              variant="outlined"
            ></v-text-field>

            <!-- Message Textarea -->
            <v-textarea
              v-model="message"
              label="Your Message"
              required
              variant="outlined"
              :rules="[messageRule]"
              class="mt-2"
            ></v-textarea>
          </v-card-text>

          <!-- Send Button -->
          <v-card-actions class="justify-center">
            <v-btn style="background-color: black; color: white; width: 50%;" class="rounded-xl" @click="sendMessage">Send message</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      email: '',
      message: '',
      // Validation rules
      emailRule: value => !!value || 'Email is required',
      messageRule: value => !!value || 'Message cannot be empty',
    };
  },
  methods: {
    sendMessage() {
      if (this.email && this.message) {
        alert(`Email: ${this.email}\nMessage: ${this.message}`);
        this.email = '';
        this.message = '';
      } else {
        alert('Please fill out both fields.');
      }
    }
  },
};
</script>

<style scoped>
.v-card-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1976d2; /* Vuetify primary color */
}

.v-card-text {
  padding-bottom: 16px;
}

.v-btn {
  text-transform: none;
}

.v-col {
  margin-bottom: 16px;
}

.v-img {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.v-img:hover {
  transform: scale(1.1); /* Slight zoom effect on hover */
}
</style>
