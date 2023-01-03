import { ref, reactive } from "vue";
export function useEditedComment() {
  const editedComment = ref("");
  function clearEditedComment() {
    editedComment.value = "";
  }
  return [editedComment, clearEditedComment];
}

export function useReplySection() {
  const replySection = reactive({
    id: "-1",
    repliedUserName: "",
    isShow: false,
  });

  function setReplySection(rootId, repliedUserName) {
    replySection.id = rootId;
    replySection.repliedUserName = repliedUserName;
    replySection.isShow = true;
  }
  return [replySection, setReplySection];
}
