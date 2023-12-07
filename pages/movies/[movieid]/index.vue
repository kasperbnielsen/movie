<script setup lang="ts">
import axios from "axios";
import { useRuntimeConfig, useRoute } from "nuxt/app";
import type { Details, Videos } from "~/types";
import { ref } from "vue";
const config = useRuntimeConfig();
const SERVER_HOST = config.public.SERVER_HOST;
const router = useRouter();
const data = ref<Details>();
const video = ref<Videos>();
const comment = ref();

const MOVIE_ID = router.currentRoute.value.path.split("/")[2];

async function get_details() {
  let details = await axios.post(`${SERVER_HOST}/details`, {
    id: MOVIE_ID,
  });

  return details.data;
}

async function post_comment() {
  let com = await axios.post(`${SERVER_HOST}/movies/${MOVIE_ID}/comments`, {
    userid: localStorage.getItem("userid"),
    comment: comment.value,
  });
}

async function get_video() {
  let video = await axios.post(`${SERVER_HOST}/video`, {
    id: MOVIE_ID,
  });

  return video.data;
}

onMounted(async () => {
  data.value = await get_details();
  video.value = await get_video();
});

watch(data, () => {});
watch(video, () => {});
</script>
<template>
  <div class="flex flex-col gap-8">
    <div class="">
      <h1 class="text-3xl m-4">{{ data?.original_title }}</h1>
      <div class="flex flex-row">
        <img
          class="w-1/4"
          :src="`https://image.tmdb.org/t/p/w500${data?.poster_path}`"
        />
        <iframe
          class="w-3/4"
          :src="`https://www.youtube.com/embed/${video?.results[0].key}?controls=0&autoplay=0&mute=1`"
        ></iframe>
      </div>

      <div class="flex flex-row m-4 space-x-8">
        <div v-for="(item, index) of data?.genres">
          <ULink
            ><UBadge>{{ item.name }}</UBadge></ULink
          >
        </div>
      </div>
    </div>
    {{ data?.overview }}
    <div class="flex flex-col gap-2">
      <div class="font-bold">Reviews</div>
      <UTextarea
        v-model="comment"
        class="w-96 max-w-full"
        :rows="5"
        placeholder="Add a comment"
        ><UButton @click="post_comment" class="w-fit right-0 absolute m-2"
          >Comment</UButton
        ></UTextarea
      >
    </div>
  </div>
</template>
<style lang="scss"></style>
