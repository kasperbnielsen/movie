<script setup lang="ts">
import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";
import { onMounted } from "vue";
import { ref } from "vue";
import type { Root } from "~/types";

const config = useRuntimeConfig();
const SERVER_HOST = config.public.SERVER_HOST;

const popular = ref<Root>();

async function get_popular() {
  let movies = await axios.get(`${SERVER_HOST}/popular`);

  return movies.data;
}

onMounted(async () => {
  popular.value = await get_popular();
});

watch(popular, () => {
  console.log(popular.value?.results);
});
</script>
<template>
  <div class="flex justify-center">
    <UCard class="w-full">
      <UContainer class="flex space-x-14">
        <MovieCard
          :data="popular?.results[0].poster_path"
          :movieid="popular?.results[0].id"
        />
        <MovieCard
          :data="popular?.results[1].poster_path"
          :movieid="popular?.results[1].id"
        />
        <MovieCard
          :data="popular?.results[2].poster_path"
          :movieid="popular?.results[2].id"
        />
        <MovieCard
          :data="popular?.results[3].poster_path"
          :movieid="popular?.results[3].id"
        />
        <MovieCard
          :data="popular?.results[4].poster_path"
          :movieid="popular?.results[4].id"
        />
      </UContainer>
    </UCard>
  </div>
</template>
<style lang="scss"></style>
