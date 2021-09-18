import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { getDisplayPost } from "../../Redux/Actions/postActions";

export default function DisplayPost() {
  const display = useSelector((state: any) => state.post.displayP);
  return (
    <Modal display={display} close={getDisplayPost}>
      <span>DisplayPost</span>
    </Modal>
  );
}
