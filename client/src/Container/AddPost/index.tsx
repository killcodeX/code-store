import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { getAddPostodal } from "../../Redux/Actions/postActions";

export default function AddPost() {
  const display = useSelector((state: any) => state.post.addP);
  return (
    <Modal display={display} close={getAddPostodal}>
      <span>Add Post</span>
    </Modal>
  );
}
