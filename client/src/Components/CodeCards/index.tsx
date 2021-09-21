import React, { useState } from "react";
import { CgShutterstock, CgPen, CgTrashEmpty } from "react-icons/cg";
import {
  CardWrapper,
  CardTitle,
  CardDescription,
  CardCategory,
  OptionWrapper,
  DisplayIconWrapper,
  EditIconWrapper,
  DeleteIconWrapper,
} from "./style";
import { Post } from "../../Interface/interface";
import {
  getDisplayPostModal,
  getEditPostodal,
  deletePost
} from "./../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

export default function CodeCard({ item }) {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description.slice(0,120)+ "..."}</CardDescription>
      <CardCategory>{item.language}</CardCategory>
      <OptionWrapper>
        <DisplayIconWrapper onClick={() => dispatch(getDisplayPostModal(item._id))}>
          <CgShutterstock />
        </DisplayIconWrapper>
        <EditIconWrapper onClick={() => dispatch(getEditPostodal(item._id))}>
          <CgPen />
        </EditIconWrapper>
        <DeleteIconWrapper onClick={() => dispatch(deletePost(item._id))}>
          <CgTrashEmpty />
        </DeleteIconWrapper>
      </OptionWrapper>
    </CardWrapper>
  );
}
