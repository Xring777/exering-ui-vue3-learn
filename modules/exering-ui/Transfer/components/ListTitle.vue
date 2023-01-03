<template>
  <h1 class="list-title">{{ title }}</h1>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ()=>''
    }
})
</script>

<style lang="scss" scoped>
.list-title {
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  margin: 0;
  color: #666;
  border-bottom: 1px solid #ddd;
  background-color: #efefef;
  font-size: 14px;
}
</style>
