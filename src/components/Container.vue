<template>
  <!-- 1. 피드 -->
  <div v-if="tabNum == 0" class="wrapper">
    <Post :feed="feed" v-for="(feed, i) in feedData" :key="i" />
  </div>

  <!-- 2. 업로드 -->
  <div v-if="tabNum == 1" class="wrapper">
    <div
      :class="choiceFilter"
      class="upload-image"
      :style="`background-image:url(${img})`"
    ></div>
    <div class="filters">
      <FilterBox
        :img="img"
        :filter="filter"
        v-for="(filter, i) in filters"
        :key="i"
        >{{ filter }} {{ active }}</FilterBox
      >
    </div>
  </div>

  <!-- 3. 글 작성 -->
  <div v-if="tabNum == 2" class="wrapper">
    <div
      :class="choiceFilter"
      class="upload-image"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>
    <div class="write">
      <div
        contenteditable="true"
        style="outline: none"
        placeholder="문구를 입력하세요."
        class="write-box"
        @input="inputText"
      ></div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data() {
    return {
      choiceFilter: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  props: {
    feedData: Object,
    tabNum: Number,
    img: String,
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  mounted() {
    this.emitter.on("choiceFilter", (data) => {
      this.choiceFilter = data;
    });
  },
  methods: {
    inputText(event) {
      this.emitter.emit("write", event.target.innerText);
    },
  },
};
</script>

<style></style>
