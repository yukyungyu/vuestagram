<template>
  <div class="follower-wrap">
    <div class="follower-search">
      <h4>팔로워</h4>
      <div class="serach-bar">
        <input
          @input="search($event.target.value)"
          class="search"
          placeholder="검색"
        />
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          color="#666666"
        />
      </div>
    </div>
    <div class="post-header" v-if="followers.length == 0">
      사용자를 찾을 수 없습니다.
    </div>
    <div class="post-header" v-else v-for="(follower, i) in followers" :key="i">
      <div
        class="f-profile"
        :style="`background-image: url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let followers = ref([]);
    let followersOrg = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((result) => {
        followers.value = result.data;
        followersOrg.value = [...result.data];
        // console.log(followersOrg.value.length);
      });
    });

    function search(word) {
      let searched = followersOrg.value.filter((v) => {
        return (
          v.name.toLowerCase().indexOf(word) != -1 ||
          v.name.toUpperCase().indexOf(word) != -1
        );
      });
      followers.value = [...searched];
    }

    return { followers, search };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
