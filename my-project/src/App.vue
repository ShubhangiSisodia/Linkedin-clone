<template>
  <div id="app">
    <h1>LinkedIn Clone</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from "pinia";
import { defineComponent } from "vue";
import { Router } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
