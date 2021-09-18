import { ThemeChange } from "../Actions/actionConstant";

const initialState = {
  theme: false,
};

// Reducers
export const CodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ThemeChange:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
