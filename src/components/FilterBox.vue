<template>
  <div @click="apply" class="filter-box">
    <p class="filter-name"><slot></slot></p>
    <div
      :class="`${filter} filter-item`"
      :style="`background-image:url(${img})`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    img: String,
    filter: String,
    active: Boolean,
  },
  methods: {
    apply() {
      this.emitter.emit("choiceFilter", this.filter);
    },
  },
};
</script>

<style></style>
