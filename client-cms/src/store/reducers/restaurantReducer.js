import {
  SET_RESTAURANT,
} from "../actionTypes/actionTypes";

const initialState = {
  restaurant: {},
};

function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload,
      };
    default:
      return state;
  }
}

export default restaurantReducer;