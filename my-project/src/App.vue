<template>
  <div id="app">
    <h1>LinkedIn Clone</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from "./Pinia";
import { defineComponent } from "vue";

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
