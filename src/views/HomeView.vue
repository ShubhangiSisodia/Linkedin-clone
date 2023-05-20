<script setup lang="ts">
import TheButton from '@/components/TheButton.vue'

const buttonClick = () => {
  alert('button clicked')
}
</script>

<template>
  <main>
    <TheButton @click="buttonClick"> Hello world </TheButton>
  </main>
</template>
