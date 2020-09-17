import { ACTION_CHANGE_JSON } from "../constant.js";

const initialState = {
  jsonDATA: [],
};

export const reducer = (state = initialState, action) => {
  const jsonDATA = state;
  switch (action.type) {
    case ACTION_CHANGE_JSON:
      return {
        jsonDATA: [].concat(action.json),
      };
  }
  return state;
};
