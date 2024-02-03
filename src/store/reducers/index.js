import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers as needed
});

export default rootReducer;
