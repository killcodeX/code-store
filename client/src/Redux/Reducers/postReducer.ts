import {
  ThemeChange,
  AddPostModal,
  DisplayPostModal,
  EditPostModal,
  GetAllPosts,
  CreatePost,
  EditPost,
  DeletePost,
} from "../Actions/actionConstant";

const initialState = {
  theme: false,
  displayP: false,
  addP: false,
  editP: false,
  allPost: [],
};

// Reducers
export const CodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ThemeChange:
      return {
        ...state,
        theme: !state.theme,
      };

    case AddPostModal:
      return {
        ...state,
        addP: !state.addP,
      };

    case DisplayPostModal:
      return {
        ...state,
        displayP: !state.displayP,
      };

    case EditPostModal:
      return {
        ...state,
        editP: !state.editP,
      };

    case GetAllPosts:
      return {
        ...state,
        allPost: action.payload,
      };

    default:
      return state;
  }
};
