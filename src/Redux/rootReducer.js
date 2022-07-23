import { combineReducers } from "redux";
import { elementCreatorReducer } from "./elementCreator/eC-reducer";
import {typeAnalyserReducer} from "./pokeAnalyser/pA-reducer";
import { teamAnalyserReducer } from "./teamAnalyser/tA-reducer";

const rootReducer = combineReducers({
    typeAnalyser: typeAnalyserReducer,
    teamAnalyser: teamAnalyserReducer,
    elementCreator: elementCreatorReducer
})


export default rootReducer;