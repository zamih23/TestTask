import { ACTION_CHANGE_JSON } from "../constant.js";

export const actionChangeJSON = (json) => {
  return {
    type: ACTION_CHANGE_JSON,
    json: json,
  };
};
