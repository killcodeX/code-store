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
  postId: "",
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
      //postId: action.payload,
      return {
        ...state,
        postId: state.allPost.filter(
          (state: any) => state._id == action.payload
        )[0],
        displayP: !state.displayP,
      };

    case EditPostModal:
      return {
        ...state,
        editP: !state.editP,
        postId: state.allPost.filter(
          (state: any) => state._id == action.payload
        )[0],
        displayP: !state.displayP,
      };

    case GetAllPosts:
      return {
        ...state,
        allPost: action.payload,
      };

    case CreatePost:
      return {
        ...state,
        allPost: [action.payload, ...state.allPost],
      };

    case DeletePost:
      return {
        ...state,
        allPost: state.allPost.filter(
          (item: any) => item._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
