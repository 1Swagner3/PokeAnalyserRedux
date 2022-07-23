import * as actionTypes from './pA-types'

export const paSelectType = (type) => {
    return {
        type: actionTypes.PA_SELECT_TYPE,
        payload: type
    }
}

export const paDeleteType = (type) => {
    return {
        type: actionTypes.PA_DELETE_TYPE,
        payload: type
    }
}

export const paAnalyseType = (type) => {
    return {
        type: actionTypes.PA_ANALYSE_TYPE,
        payload: type
    }
}

export const paClearAll = (type) => {
    return {
        type: actionTypes.PA_CLEAR_ALL,
        payload: type
    }
}