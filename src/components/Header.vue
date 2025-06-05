<template>
  <v-app-bar :elevation="1" flat>
    <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />

    <!-- normal -->
    <div class="d-none d-sm-flex justify-center w-100">
      <v-btn to="/" variant="text" class="ms-1" value="home">Home</v-btn>
      <v-btn to="/project" variant="text" class="ms-1" value="project">Project</v-btn>
      <v-btn to="/about" variant="text" class="ms-1" value="about">About</v-btn>
      <v-btn to="/contact" variant="text" class="ms-1" value="contact">Contact</v-btn>
    </div>

  </v-app-bar>
  <!-- responsive -->
  <v-navigation-drawer v-model="drawer" temporary class="d-sm-none">
    <v-list>
      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item to="/project" title="Project"></v-list-item>
      <v-list-item to="/about" title="About"></v-list-item>
      <v-list-item to="/contact" title="contact"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue"
const drawer = ref(false)
</script>