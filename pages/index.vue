<script setup lang="ts">
const username = ref();

onMounted(() => {
  username.value = localStorage.getItem("username");
});

watch(username, () => {});
</script>
<template>
  <div class="flex flex-col gap-8">
    <section class="flex flex-col gap-8">
      <h1 class="text-4xl font-bold">Popular movies</h1>
      <MovieCarousel />
    </section>
    <section class="flex flex-col gap-8">
      <h1 class="text-4xl font-bold">Watchlist</h1>
      <MovieCarousel />
    </section>
  </div>
</template>
<style lang="css"></style>
