import {
  BASE_URL,
  SET_CATEGORY,
} from "../actionTypes/actionTypes";

export function setCategory(data) {
  return {
    type: SET_CATEGORY,
    payload: data,
  };
}

export function fetchCategory() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/categories`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }

      const data = await response.json();

      dispatch(setCategory(data));
    } catch (error) {
      console.log(error);
    }
  };
}
