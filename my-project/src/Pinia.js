import { defineStore } from "pinia";

const Firebase = require("firebase/app");

export const useStore = defineStore("store", {
  state: () => ({
    user: null,
    posts: [],
    comments: [],
  }),
  actions: {
    setUser(state, user) {
      state.user = user;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    // duplicate method
    // addComment(state, comment) {
    //   state.comments.push(comment);
    // },
    async login(email, password) {
      try {
        const user = await Firebase.auth().signInWithEmailAndPassword(
          email,
          password
        );
        this.store.setUser(user);
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      await Firebase.auth().signOut();
      this.store.setUser(null);
    },
    async createPost(title, content) {
      const post = await Firebase.firestore().collection("posts").add({
        title,
        content,
        author: this.store.state.user.uid,
      });
      this.store.addPost(post);
    },
    async addComment(postId, content) {
      const comment = await Firebase.firestore().collection("comments").add({
        postId,
        content,
        author: this.store.state.user.uid,
      });
      this.store.addComment(comment);
    },
  },
});
