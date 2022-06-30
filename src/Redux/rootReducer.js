import { combineReducers } from "redux";
import { elementListReducer } from "./pokeAnalyser/pA-reducer";

const rootReducer = combineReducers({
    elementList: elementListReducer,
})


export default rootReducer;