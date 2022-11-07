import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import restaurantReducer from "./restaurantReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  foodReducer: foodReducer,
  restaurantReducer: restaurantReducer,
  categoryReducer: categoryReducer,
  orderReducer: orderReducer
});

export default rootReducer;
