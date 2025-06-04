<template>
  <v-app class="app-bg">
    <Header />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
