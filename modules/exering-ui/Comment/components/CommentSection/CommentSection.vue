<template>
  <div :class="[isChildren ? 'children' : '', 'comment']">
    <div class="avatar">
      <img :src="data.userAvatar" alt="" />
    </div>
    <div class="comment-content-out">
      <div class="comment-content">
        <div class="userName">{{ data.userName }}</div>
        <div class="comment-text">
          {{
            isChildren && data.pid !== rootId
              ? "回复@" + data.commentedUserName + ":"
              : ""
          }}
          {{ data.comment }}
        </div>
      </div>

      <div class="reply">
        <div class="comment-time">{{ data.creatTime }}</div>
        <div class="comment-icon">点赞/点踩</div>
        <div
          class="comment-reply-click"
          @click="commentReplyClick(rootId, data.userName)"
        >
          点击回复
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => null,
  },
  rootId: {
    type: String,
    default: () => "",
  },
  isChildren: {
    type: Boolean,
    default: () => false,
  },
});
const emit = defineEmits(["commentReplyClick"]);
const commentReplyClick = (rootId, userName) => {
  emit("commentReplyClick", rootId, userName);
};
</script>

<style lang="scss" scoped>
.comment {
  height: 100px;
  display: flex;
  .comment-text {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .userName {
    height: 24px;
    line-height: 24px;
    font-size: 13px;
  }
  .avatar {
    margin: 10px;
    img {
      width: 100%;
      height: 40px;
    }
  }
  .reply {
    display: flex;
    .comment-time {
      font-size: 13px;
    }
    .comment-icon {
      font-size: 13px;
      margin-left: 20px;
    }
    .comment-reply-click {
      font-size: 13px;
      margin-left: 20px;
    }
  }
}
.children {
  margin-left: 20px;
  &.comment {
    height: 64px;

    .comment-content {
      display: flex;

      .comment-text {
        margin-left: 10px;
        font-size: 15px;
      }
    }

    .comment-content-out {
      display: flex;
      flex-direction: column;
    }

    .userName {
      line-height: 24px;
      height: 24px;
    }

    .comment-text {
      line-height: 24px;
    }

    .avatar {
      margin: 10px;

      img {
        width: 100%;
        height: 30px;
      }
    }
  }
}
</style>
