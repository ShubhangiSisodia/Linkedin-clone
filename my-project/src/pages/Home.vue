<template>
    <div class="home">
      <h2>Home</h2>
      <ul>
        <li v-for="post in store.posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
          <ul>
            <li v-for="comment in post.comments" :key="comment.id">
              <h4>{{ comment.author }}</h4>
              <p>{{ comment.content }}</p>
            </li>
          </ul>
        </li>
      </ul>
      <router-link to="/new-post">Create a new post</router-link>
    </div>
  </template>
  
  <script>
  import { useStore } from "pinia";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Home",
    setup() {
      const store = useStore();
      return {
        store,
      };
    },
  });
  </script>
  