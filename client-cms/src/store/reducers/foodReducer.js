import {
  SET_FOOD,
  SET_FOOD_DETAIL,
} from "../actionTypes/actionTypes";

const initialState = {
  food: [],
  foodDetail: {},
};

function foodReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOOD:
      return {
        ...state,
        food: action.payload,
      };
    case SET_FOOD_DETAIL:
      return {
        ...state,
        foodDetail: action.payload,
      };
    default:
      return state;
  }
}

export default foodReducer;