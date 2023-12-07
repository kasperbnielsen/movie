<script setup lang="ts">
import { ref, watch } from "vue";

const searchInput = ref("");
const open = ref(false);
const modalOpen = ref(false);

watch(searchInput, () => {
  if (searchInput.value !== "") open.value = true;
  else open.value = false;
});
</script>
<template>
  <UContainer>
    <UContainer class="flex items-center justify-center">
      <UButton class="absolute left-0 m-12">Home</UButton>

      <UPopover
        :open="open"
        class="m-4 w-3/4"
        :popper="{ offsetDistance: -10 }"
        disabled
      >
        <UInput
          class="m-4 w-screen"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          label="Open"
          :trailing="true"
          placeholder="Search..."
          v-model="searchInput"
        />
        <template #panel
          ><UContainer class="w-fit h-fit"
            >Helloasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssasdddddddddddddddddddd</UContainer
          ></template
        >
      </UPopover>
      <UButton class="absolute right-0 m-12" @click="modalOpen = true"
        >Login</UButton
      >
      <UModal v-model="modalOpen">
        <LoginModal @close="(event: any) => (modalOpen = !event)" />
      </UModal>
    </UContainer>
  </UContainer>
  <UDivider class="" />
</template>
<style lang="css"></style>
