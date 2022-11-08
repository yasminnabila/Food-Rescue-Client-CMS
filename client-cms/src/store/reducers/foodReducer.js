import {
  SET_FOOD,
  SET_FOOD_DETAIL,
  SET_FOOD_FILTER,
} from "../actionTypes/actionTypes";

const initialState = {
  food: [],
  foodDetail: {},
  foodFilter: []
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
    case SET_FOOD_FILTER:
      return {
        ...state,
        foodFilter: action.payload,
      };
    default:
      return state;
  }
}

export default foodReducer;