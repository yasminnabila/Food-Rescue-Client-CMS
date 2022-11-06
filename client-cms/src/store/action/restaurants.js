import {
  SET_RESTAURANT,
  BASE_URL,
} from "../actionTypes/actionTypes";


export function setRestaurant(data) {
  return {
    type: SET_RESTAURANT,
    payload: data,
  };
}

export function fetchRestaurant() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/resto/restaurants`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }
      const data = await response.json();
      dispatch(setRestaurant(data));
    } catch (error) {
      console.log(error);
    }
  };
}