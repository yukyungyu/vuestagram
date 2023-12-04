<template>
  <!-- header -->
  <div class="header">
    <ul v-if="tabNum == 0 || tabNum == 4">
      <router-link to="/"><li>Vuestagram</li></router-link>
    </ul>
    <ul v-else>
      <li class="left-btn" @click="tabNum--">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </li>
      <li v-if="tabNum == 1" @click="tabNum++">다음</li>
      <li v-if="tabNum == 2" @click="publish">발행</li>
    </ul>
  </div>

  <!-- content -->
  <Container
    :tabNum="tabNum"
    :feedData="feedData"
    :img="img"
    @write="inputText = $event"
  ></Container>
  <div v-if="tabNum == 4">
    <router-view></router-view>
  </div>

  <!-- footer -->
  <div class="footer">
    <ul>
      <li clas="home-btn" @click="tabNum = 0">
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>
      </li>
      <li class="plus-btn">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </label>
      </li>
      <li class="my-page" @click="tabNum = 4">
        <router-link to="/MyPage">
          <div class="myProfile"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import feedData from "./assets/post.js";
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      tabNum: 0,
      img: "",
      feedData: feedData,
      inputText: "",
      choiceFilter: "",
    };
  },
  components: {
    Container: Container,
  },
  mounted() {
    console.log("main mounted");
    this.emitter.on("write", (data) => {
      this.inputText = data;
    });
    this.emitter.on("choiceFilter", (data) => {
      this.choiceFilter = data;
    });
  },
  methods: {
    upload(event) {
      let file = event.target.files;
      let url = URL.createObjectURL(file[0]);
      this.img = url;
      this.emitter.emit("sendImg", url);
      this.tabNum++;
    },
    publish() {
      let dt = new Date();
      let year = dt.getFullYear();
      let month = dt.getMonth() + 1;
      let day = dt.getDay();
      let date = `${year}년 ${month}월 ${day}일`;
      let myData = {
        name: "Meee",
        userImage: require(`@/assets/me.jpg`),
        postImage: this.img,
        likes: 0,
        date: date,
        liked: false,
        content: this.inputText,
        filter: this.choiceFilter,
      };
      this.feedData.unshift(myData); //맨앞에 밀어넣기
      this.tabNum = 0;
    },
  },
};
</script>

<style>
@import "style.css";

#app {
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  color: #fff;
  background: #000;
}
</style>
