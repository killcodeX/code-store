import {
  ThemeChange,
  AddPostModal,
  DisplayPostModal,
  EditPostModal,
  GetAllPosts,
  CreatePost,
  EditPost,
  DeletePost,
  SearchLang,
  ClearSearchLang,
  FilterLanguage,
  ClearFilterLang,
} from "./actionConstant";

import {
  getAllPostApi,
  createPostApi,
  deletePostApi,
  filterPostApi,
} from "../../Api/postApi";

export const getThemeChange = () => {
  return {
    type: ThemeChange,
  };
};

export const getDisplayPostModal = (id) => {
  return {
    type: DisplayPostModal,
    payload: id,
  };
};

export const getEditPostodal = (id) => {
  return {
    type: EditPostModal,
    payload: id,
  };
};

export const getAddPostodal = () => {
  return {
    type: AddPostModal,
  };
};

export const getAllPost = () => async (dispatch) => {
  const result = await getAllPostApi();
  dispatch({
    type: GetAllPosts,
    payload: result,
  });
};

export const createPost = (body) => async (dispatch) => {
  const result = await createPostApi(body);
  dispatch({
    type: CreatePost,
    payload: result,
  });
};

export const editPost = (body) => async (dispatch) => {
  // const result = await createPostApi(body)
  // dispatch({
  //   type: CreatePost,
  //   payload: result,
  // });
};

export const deletePost = (id) => async (dispatch) => {
  await deletePostApi(id);
  dispatch({
    type: DeletePost,
    payload: id,
  });
};

export const getSearchLang = (data) => {
  return {
    type: SearchLang,
    payload: [data],
  };
};

export const clearSearchlang = () => {
  return {
    type: ClearSearchLang,
  };
};

export const filterbyLanguage = (lang) => async (dispatch) => {
  const result = await filterPostApi({ language: lang });
  dispatch({
    type: FilterLanguage,
    payload: result,
  });
};

export const clearFilterlang = () => {
  return {
    type: ClearFilterLang,
  };
};
