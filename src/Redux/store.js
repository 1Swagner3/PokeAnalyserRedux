import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "@reduxjs/toolkit";

const store = createStore(rootReducer, composeWithDevTools())

export default store;