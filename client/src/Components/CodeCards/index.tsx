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
import { getDisplayPost } from "./../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

export default function CodeCard() {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <CardTitle>Apply Redux to a Modern React Hooks Application</CardTitle>
      <CardDescription>
        You will learn how to apply Redux to a modern React Hooks application.
        Enabling you to effectively implement Redux and test your application at
        a high level.
      </CardDescription>
      <CardCategory>CSS</CardCategory>
      <OptionWrapper>
        <DisplayIconWrapper onClick={() => dispatch(getDisplayPost())}>
          <CgShutterstock />
        </DisplayIconWrapper>
        <EditIconWrapper>
          <CgPen />
        </EditIconWrapper>
        <DeleteIconWrapper>
          <CgTrashEmpty />
        </DeleteIconWrapper>
      </OptionWrapper>
    </CardWrapper>
  );
}
