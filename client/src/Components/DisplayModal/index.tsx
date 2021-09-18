import React from "react";
import { CgMoveRight } from "react-icons/cg";
import { SideModalWrapper, ModalHeader, CloseIconWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getDisplayPost } from "./../../Redux/Actions/postActions";

export default function DisplayModal() {
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state.post.displayP);

  if (display) {
    document.body.classList.add("overlay");
  } else {
    document.body.classList.remove("overlay");
  }

  return (
    <SideModalWrapper open={display}>
      <ModalHeader>
        <CloseIconWrapper onClick={() => dispatch(getDisplayPost())}>
          <CgMoveRight />
        </CloseIconWrapper>
      </ModalHeader>
    </SideModalWrapper>
  );
}
