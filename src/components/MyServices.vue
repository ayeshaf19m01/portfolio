<template>
  <v-container class="pa-4 mt-16 my-services-container" fluid>
    <v-row justify="center" class="mb-4">
      <!-- Heading -->
      <v-col cols="12">
        <h2 class="text-center">My Services</h2>
      </v-col>
    </v-row>

    <!-- Cards for Services -->
    <v-row justify="center" spacing="4">
      <!-- Web Design Service Card -->
      <v-col cols="12" md="3">
        <v-card class="service-card rounded-xl" elevation="8" height="400px">
          <v-card-title class="text-center mt-14">
            <span class="headline">Backend development</span>
          </v-card-title>
          <p class="pa-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,culpa voluptatem consequuntur tenetur eaque unde hic beatae aliquid cumque natus, possimus ratione dolor laboriosam?.
          </p>
          <v-card-actions class="justify-center">
            <v-btn style="background-color: black; color: white; width: 120px;" class="rounded-xl">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Web Design Service Card (Duplicate for Demo) -->
      <v-col cols="12" md="3">
        <v-card class="service-card rounded-xl" elevation="8" height="400px">
          <v-card-title class="text-center mt-14">
            <span class="headline">Frontend development</span>
          </v-card-title>
          <p class="pa-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolores aliquid. Molestias aspernatur enim, dignissimos nihil officia quam architecto omnis voluptas corrupti!
          </p>
          <v-card-actions class="justify-center">
            <v-btn style="background-color: black; color: white; width: 120px;" class="rounded-xl">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- UI/UX Design Service Card -->
      <v-col cols="12" md="3">
        <v-card class="service-card rounded-xl" elevation="8" height="400px">
          <v-card-title class="text-center mt-14">
            <span class="headline">UI/UX Design</span>
          </v-card-title>
          <p class="pa-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est odio odit fuga quibusdam pariatur ipsa nam! Odit fuga eius fugit vitae voluptatum sint dolores, blanditiis unde est suscipit recusandae.
          </p>
          <v-card-actions class="justify-center">
            <v-btn style="background-color: black; color: white; width: 120px;" class="rounded-xl">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MyServices',
}
</script>

<style scoped>
.my-services-container {
  background-color: #f0eded; /* Lightest gray background for the section */
  padding: 50px 0; /* Add padding for spacing */
  height: 600px;
}

.v-card-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.v-card-subtitle {
  font-size: 1.1rem;
  font-weight: 400;
  margin: 15px 0;
}

.v-btn {
  text-transform: none;
}
</style>
