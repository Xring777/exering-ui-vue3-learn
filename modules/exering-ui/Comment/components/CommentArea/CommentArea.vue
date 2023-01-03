<template>
    <div class="writing-comment-area">
      <div class="writing-area">
        <textarea v-model="editedComment" :placeholder="placeholder"></textarea>
      </div>
      <div class="submit-button">
        <button @click="submitClick">发布</button>
      </div>
    </div>
</template>

<script setup>
import {
  useEditedComment,
} from "../../extends/hooks";

const props = defineProps({
    placeholder:{
        type:String,
        default:()=>'请留下一条友善的评论吧！'
    }
})
const [
    editedComment,
    clearEditedComment
] = useEditedComment()

const emit = defineEmits(['submitClick'])
const submitClick = ()=>{
    emit('submitClick',editedComment.value)
    clearEditedComment()
}
</script>

<style lang="scss" scoped>
.writing-comment-area {
  height: 50px;
  width: 500px;
  display: flex;
  margin: 20px;
  // justify-content: space-around;
  .writing-area {
    height: 50px;
    width: 600px;
    margin-right: 20px;
    textarea {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: 1px solid #f1f2f3;
      border-radius: 6px;
      background-color: #f1f2f3;
      font-family: inherit;
      line-height: 38px;
      color: #18191c;
      resize: none;
      outline: none;
      font-size: 13px;
      padding: 5px 10px;
    }
  }
  .submit-button {
    width:  70px;
    height: 50px;
    position: relative;
    button{
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      opacity: 0.5;
      border-radius: 4px;
      border: 1px solid #f1f2f3;
      color:#f1f1f1;
      background-color: #0099FF;
      &:hover{
        opacity: 1;
      }
    }
  }
}
</style>