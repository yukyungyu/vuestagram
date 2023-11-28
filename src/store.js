import { createStore } from "vuex";
import feedData from "./assets/post.js";

const store = createStore({
  state() {
    return {
      feedData: feedData,
    };
  },
  mutations: {
    like(state, data) {
      if (data == true) {
        if (state.likes > 0) {
          state.likes--;
        }
        state.isLiked = false;
      } else {
        state.likes++;
        state.isLiked = true;
      }
    },
  },
  actions: {},
});

export default store;
