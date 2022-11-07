import { SET_ORDER } from "../actionTypes/actionTypes";

const initialState = {
  order: [],
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}

export default orderReducer;
