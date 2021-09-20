import {
  ThemeChange,
  AddPostModal,
  DisplayPostModal,
  EditPostModal,
  GetAllPosts,
  CreatePost,
  EditPost,
  DeletePost,
} from "./actionConstant";

import { getAllPostApi, createPostApi } from "../../Api/postApi";

export const getThemeChange = () => {
  return {
    type: ThemeChange,
  };
};

export const getDisplayPostModal = () => {
  return {
    type: DisplayPostModal,
  };
};

export const getEditPostodal = () => {
  return {
    type: EditPostModal,
  };
};

export const getAddPostodal = () => {
  return {
    type: AddPostModal,
  };
};

export const getAllPost = () => async (dispatch) => {
  const result = await getAllPostApi()
  dispatch({
    type: GetAllPosts,
    payload: result,
  });
}

export const createPost = (body) => async (dispatch) => {
  const result = await createPostApi(body)
  dispatch({
    type: CreatePost,
    payload: result,
  });
}