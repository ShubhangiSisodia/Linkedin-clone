<template>
  <button
    type="button"
    class="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    @click="emit('click')"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: String
})

const emit = defineEmits(['click'])
</script>
