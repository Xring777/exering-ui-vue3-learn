<template>
  <div class="button-transfer">
    <button
      @click="leftButtonClick"
      :disabled="leftButtonDisabled"
    >
      &lt;
    </button>
    <button
      @click="rightButtonClick"
      :disabled="rightButtonDisabled"
    >
      &gt;
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  leftButtonDisabled: {
    type: Boolean,
    default: true,
  },
  rightButtonDisabled: {
    type: Boolean,
    default: true, 
  },
});
const emit = defineEmits(["leftButtonClick", "rightButtonClick"]);
const leftButtonClick = ()=>{
    emit('leftButtonClick')
}
const rightButtonClick = ()=>{
    emit('rightButtonClick')
}
</script>

<style lang="scss" scoped>
.button-transfer {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

  button {
    border: none;
    outline: none;
    width: 38px;
    height: 38px;
    background-color: orange;
    color: #fff;
    border-radius: 5px;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:disabled {
      opacity: 0.6;
    }
  }
}
</style>
