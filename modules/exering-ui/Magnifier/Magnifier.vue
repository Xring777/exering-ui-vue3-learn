<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a
      class="mag-wrap"
      :target="blank ? '_blank' : ''"
      :href="link"
      :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{
          height: imgHeight + 'px',
          width: imgWidth + 'px',
        }"
      />
    </a>
    <a :href="link" class="img-lk">
      <img class="static-img" :src="imgUrl" :alt="imgAlt"
    /></a>
  </div>
</template>

<script>
import { magnifier } from "./directives";
export default {
  directives: {
    magnifier,
  },
  props: {
    imgUrl: {
      type: String,
      default: () => "",
    },
    imgAlt: {
      type: String,
      default: () => "",
    },
    blank: {
      type: Boolean,
      default: () => true,
    },
    link: {
      type: String,
      default: () => "",
    },
    imgHeight: {
      type: Number,
      default: () => 500,
    },
    imgWidth: {
      type: Number,
      default: () => 500,
    },
    magHeight: {
      type: Number,
      default: () => 100,
    },
    magWidth: {
      type: Number,
      default: () => 100,
    },
  },
};
</script>

<style lang="scss" scoped>
.img-wrap {
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;
  position: relative;
  .static-img {
    width: 100%;
  }
  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
    cursor: move;
    overflow: hidden;

    &.show {
      display: block;
      transform: scale(1.5);
    }
    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
