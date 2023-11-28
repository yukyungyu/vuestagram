<template>
  <div class="post">
    <!-- user -->
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${feed.userImage})` }"
      ></div>
      <span class="profile-name">{{ feed.name }}</span>
    </div>
    <!-- 컨텐츠 -->
    <div
      :class="feed.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${feed.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ feed.likes }} 좋아요</p>
      <p>
        <strong>{{ feed.name }}</strong> {{ feed.content }}
      </p>
      <p class="date">{{ feed.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    feed: Object,
  },
  computed: {},
  methods: {
    like(likes, liked) {
      console.log(likes, liked);
      if (liked == true) {
        if (likes > 0) {
          likes--;
        }
        liked = false;
      } else {
        likes++;
        liked = true;
      }
      console.log(likes, liked);
      let clickLike = { likes, liked };
      this.emitter.emit("changeLike", clickLike);
    },
  },
};
</script>

<style>
@import "../style.css";
</style>
