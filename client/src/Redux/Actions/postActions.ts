import {
  ThemeChange,
  AddPostModal,
  DisplayPostModal,
  EditPostModal,
  DeletePost,
} from "./actionConstant";

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
