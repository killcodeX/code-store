import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { getEditPostodal } from "../../Redux/Actions/postActions";

export default function EditPost() {
  const display = useSelector((state: any) => state.post.editP);
  return (
    <Modal display={display} close={getEditPostodal}>
      <span>Edit Post</span>
    </Modal>
  );
}
