<script setup lang="ts">
import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";
import { ref } from "vue";

const config = useRuntimeConfig();
const SERVER_HOST = "http://localhost:5000";

const popular = ref();

async function get_popular() {
  let movies = axios.get(`${SERVER_HOST}/popular`);

  return movies;
}
</script>
<template>
  <div>
    <div>
      {{ popular }}
      <h1 class="justify-center flex text-3xl m-12">Popular movies</h1>
      <MovieCarousel />
    </div>
    <div>
      <h1 class="justify-center flex text-3xl m-12">Watchlist</h1>
      <MovieCarousel />
    </div>
  </div>
</template>
<style lang="css"></style>
