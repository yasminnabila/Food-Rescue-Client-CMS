import {
  BASE_URL,
  SET_ORDER
} from "../actionTypes/actionTypes";

export function setOrder(data) {
  return {
    type: SET_ORDER,
    payload: data,
  };
}

export function fetchOrder() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/resto/order`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }

      const data = await response.json();

      dispatch(setOrder(data));
    } catch (error) {
      console.log(error);
    }
  };
}