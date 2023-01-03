<template>
  <div
    v-for="(item, index) in listData"
    :key="item.id"
    :class="['list-item', item.disable ? 'disabled' : '']"
    :draggable="!item.disable"
    @dragstart="dragItem(item)"
  >
    <input
      type="checkbox"
      :disabled="item.disable"
      :id="'__checkbox__' + item.id"
      @click="checkedboxClick($event.target.value, leftOrRight, item)"
    />
    <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
    listData: {
        type: Array,
        default: ()=>[]
    },
    leftOrRight: {
        type: String,
        validator(value){
            return ['left', 'right'].includes(value)
        }
    }
})
const emit = defineEmits(['checkedboxClick', 'dragItem'])
const checkedboxClick = (checked, leftOrRight, item) => {
    emit('checkedboxClick', checked, leftOrRight, item)
}
const dragItem = (item) => {
  emit('dragItem', item)
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  color: #666;
  font-size: 12px;
  &.disabled {
    opacity: 0.6;
  }
}
</style>
