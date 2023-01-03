<template>
  <div>
    <Selector :data="options" @select-change="setTargetIndex" />
    <div class="transfer">
      <div class="box" @dragover.prevent @dragend="addRightListData([dragedItem])">
        <ListTitle :title="leftTitle" />
        <div>
          <ListItem
            :listData="leftListData"
            leftOrRight="left"
            @checkedbox-click="setCheckedData"
            @drag-item="setDragedItem"
          />
        </div>
      </div>
      <ButtonTransfer
        class="box"
        :leftButtonDisabled="transferButtonDisabled.left"
        :rightButtonDisabled="transferButtonDisabled.right"
        @leftButtonClick="removeRightListData(checkedData.right)"
        @rightButtonClick="addRightListData(checkedData.left)"
      />
      <div class="box" @dragover.prevent @dragend="removeRightListData([dragedItem])">
        <ListTitle :title="rightTitle" />
        <div>
          <ListItem
            :listData="rightListData"
            leftOrRight="right"
            @checkedbox-click="setCheckedData"
            @drag-item="setDragedItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Selector from "./components/Selector";
import ListTitle from "./components/ListTitle";
import ButtonTransfer from "./components/ButtonTransfer";
import ListItem from "./components/ListItem";

import propsDefinition from "./extends/props";

import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDragedItem,
} from "./extends/hooks";

const props = defineProps(propsDefinition);
const options = props.data.map(({ title }) => title);
const [targetIndex, setTargetIndex] = useTargetIndex(0);
const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();
const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);
const [dragedItem, setDragedItem] = useDragedItem()
const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

const setCheckedData = (checked, leftOrRight, item) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
};
</script>

<style lang="scss" scoped>
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
  .box {
    width: 120px;
    height: 100%;
    // border: 1px solid #ddd;
  }
}
</style>
