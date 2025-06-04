<template>
  <v-container>
    <v-row>
      <v-col v-for="Project in projects" :key="Project.id" cols="12" sm="6">
        <projectCard :Project="Project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import projectCard from "../components/projectCard.vue";
import projects from "../data/Project";
</script>
