import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import restaurantReducer from "./restaurantReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  foodReducer: foodReducer,
  restaurantReducer: restaurantReducer,
  categoryReducer: categoryReducer,
});

export default rootReducer;
