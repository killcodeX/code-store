import {
  ThemeChange,
  AddPost,
  DisplayPost,
  EditPost,
  DeletePost,
} from "../Actions/actionConstant";

const initialState = {
  theme: false,
  displayP: false,
};

// Reducers
export const CodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ThemeChange:
      return {
        ...state,
        theme: !state.theme,
      };
    case DisplayPost:
      return {
        ...state,
        displayP: !state.displayP,
      };
    default:
      return state;
  }
};
