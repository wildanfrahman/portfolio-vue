<template>
  <v-container class="fill-height ">
    <v-row class="contact-row d-flex align-center" dense no-gutters>
      <!-- contact -->
      <v-col cols="12" sm="6" class="d-flex flex-column justify-center px-sm-16">
        <div class="mb-2">
          <h1 class="font-weight-black">Contact Me</h1>
          <p class="font-weight-thin">Hubungi saya melalui kontak dan sosial media dibawah ini :</p>
        </div>
        <div class="mb-2 align-center">
          <v-icon icon="mdi-phone" size="30" color="black"></v-icon>
          <span class="font-weight-bold">+6282249418324</span>
        </div>
        <div class="mb-2 align-center">
          <v-icon icon="mdi-linkedin" size="30" color="blue"></v-icon>
          <a href="" class="text-decoration-none text-black">: Muhammad Wildan Fathur Rahman</a>
        </div>
        <div class="mb-2 align-center">
          <v-icon icon="mdi-instagram" size="30" color="pink"></v-icon>
          <a href="" class="text-decoration-none text-black">: mwdnfr</a>
        </div>
      </v-col>
      <!-- gambar -->
      <v-col cols="12" sm="6" class="d-flex justify-center align-center">
        <v-img :src="call" max-width="400"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import call from "../assets/call2.jpg"
</script>

<style scoped>
.contact-row {
  height: 100%;
}
</style>