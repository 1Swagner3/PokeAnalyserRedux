import * as actionTypes from './pA-types'

const INTIAL_STATE = {
    list: []
}

export const elementListReducer = (state = INTIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.LOAD_ELEMENTLIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}