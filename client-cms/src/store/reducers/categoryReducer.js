import { SET_CATEGORY } from "../actionTypes/actionTypes";

const initialState = {
  categories: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

export default categoryReducer;
