<template>
  <div>
    <!-- <Transfer :data="transferData" rightTitle="已选择机型"> </Transfer> -->
    <Magnifier :imgUrl="imgUrl" :imgAlt="imgAlt" :blank="blank" :link="link" :imgHeight="imgHeight" :imgWidth="imgWidth" :magHeight="magHeight" :magWidth="magWidth"></Magnifier>
    <!-- <Comment :data="CommentsData"></Comment> -->
  </div>
</template>

<script setup>
import {
  // Transfer,
  Comment,
  Magnifier,
} from "../../../modules/exering-ui";
// import transferData from "../../../modules/exering-ui/Transfer/data";
// import CommentsData from "../../../modules/exering-ui/Comment/data/data2";
import MagnifierData from "../../../modules/exering-ui/Magnifier/data/data";
const {
  imgUrl,
  imgAlt,
  blank,
  link,
  imgHeight,
  imgWidth,
  magHeight,
  magWidth,
} = MagnifierData
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
