<template>
  <v-container class="fill-height">
    <v-row class="d-flex align-center" dense no-gutterss>
      <v-col cols="12" sm="6" class="d-flex flex-column justify-center ps-sm-16">
        <v-img :src="picAbout" max-width="400"></v-img>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex flex-column justify-center text-justify">
        <h1 class="mb-2">Halo! Saya Wildan,</h1>
        <p class="mb-2">merupakan lulusan baru dari Program Studi Ilmu Komputer di Universitas Bhayangkara Jakarta
          Raya. Saya memiliki ketertarikan di bidang Teknologi Informasi, khususnya pada pengembangan backend.
        </p>
        <p>
          saya masih aktif dalam mengerjakan beberapa proyek pribadi untuk membantu saya memperdalam pemahaman serta
          keterampilan teknis di bidang tersebut. saya sangat antusias untuk mempelajari hal-hal baru dan siap
          berkontribusi dalam tim.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import picAbout from '../assets/picAbout5.png'
</script>