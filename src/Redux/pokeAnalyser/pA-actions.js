import * as actionTypes from './pA-types'

export const loadElementList = (list) => {
    return {
        type: actionTypes.LOAD_ELEMENTLIST,
        payload: list
    }
}