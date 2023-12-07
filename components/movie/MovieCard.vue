<script setup lang="ts">
import type { Root } from "~/types";
import { useRuntimeConfig } from "nuxt/app";

const config = useRuntimeConfig();
const SERVER_HOST = config.public.SERVER_HOST;

defineProps<{ data: any; movieid: any }>();
</script>
<template>
  <div>
    <ULink :to="`/movies/${movieid}`"
      ><img class="w-80" :src="`https://image.tmdb.org/t/p/w500${data}`"
    /></ULink>
  </div>
</template>
<style></style>
