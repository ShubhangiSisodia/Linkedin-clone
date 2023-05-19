import { defineStore } from "pinia";

export const store = defineStore({
  state: () => ({
    user: null,
    posts: [],
    comments: [],
  }),
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    addComment(state, comment) {
      state.comments.push(comment);
    },
  },
  actions: {
    async login(email, password) {
      try {
        const user = await Firebase.auth().signInWithEmailAndPassword(email, password);
        store.setUser(user);
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      await Firebase.auth().signOut();
      store.setUser(null);
    },
    async createPost(title, content) {
      const post = await Firebase.firestore().collection("posts").add({
        title,
        content,
        author: store.state.user.uid,
      });
      store.addPost(post);
    },
    async addComment(postId, content) {
      const comment = await Firebase.firestore().collection("comments").add({
        postId,
        content,
        author: store.state.user.uid,
      });
      store.addComment(comment);
    },
  },
});
