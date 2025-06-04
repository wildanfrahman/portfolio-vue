<template>
  <v-card variant="outlined" hover>
    <v-img :src="Project.image" height="200" cover></v-img>
    <v-card-title>{{ Project.title }}</v-card-title>
    <v-card-text>{{ Project.description }}</v-card-text>
    <v-card-actions>
      <v-btn> lihat detail </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  Project: Object,
});
</script>
