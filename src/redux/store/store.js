import { createStore } from "redux";
import appReducer from "../appReducer"; 

// Checks if there is a previously saved night mode state
const savedNightModeState = localStorage.getItem("isNightMode");
const initialState = {
  isNightMode: savedNightModeState === "true"
};

const store = createStore(appReducer, initialState);

export default store;