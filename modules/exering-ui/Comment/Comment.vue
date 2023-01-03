<template>
  <div>
    <CommentArea @submit-click="submitClick"></CommentArea>
    <div class="comment-section">
      <div class="comments" v-for="(item, index) in data" :key="item.cid">
        <CommentSection
          :data="item"
          :root-id="item.cid"
          :isChildren="false"
          @comment-reply-click="setReplySection"
        >
        </CommentSection>
        <CommentSection
          v-for="(child, index) in item.children"
          :key="child.cid"
          :data="child"
          :root-id="item.cid"
          :isChildren="true"
          @comment-reply-click="setReplySection"
        >
        </CommentSection>
        <CommentArea v-if="replySection.isShow && replySection.id === item.cid" :placeholder="'回复 @' + replySection.repliedUserName + ': '" @submit-click="submitClick"></CommentArea>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import definitionProps from "./extends/props";

import CommentSection from "./components/CommentSection/CommentSection.vue";
import CommentArea from "./components/CommentArea/CommentArea.vue";

import {
  useReplySection,
} from "./extends/hooks";

const props = defineProps(definitionProps);
const emit = defineEmits(["submitClick", "replyClick"]);

const [replySection, setReplySection] = useReplySection();

const submitClick = (data) => {
  emit("submitClick", data);
};
</script>

<style lang="scss" scoped>
.comment-section {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
}
</style>
