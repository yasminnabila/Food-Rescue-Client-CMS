import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import restaurantReducer from "./restaurantReducer";


const rootReducer = combineReducers({
  foodReducer: foodReducer,
  restaurantReducer: restaurantReducer,
});

export default rootReducer;