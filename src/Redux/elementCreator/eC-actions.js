import * as actionTypes from './eC-types'

export const chooseType = (event) => {
    return {
        type: actionTypes.CHOOSE_TYPE,
        payload: event
    }
}

export const deleteType = (type, name) => {
    return {
        type: actionTypes.DELETE_CHOSEN_TYPE,
        payload: {type, name}
    }
}

export const updateInput = (input) => {
    return {
        type: actionTypes.UPDATE_INPUT,
        payload: input
    }
}

export const createType = (data) => {
    return {
        type: actionTypes.CREATE_TYPE,
        payload: data
    }
}

export const clear = () => {
    return {
        type: actionTypes.CLEAR
    }
}

export const editCustomType = (data) => {
    return {
        type: actionTypes.EDIT_CUSTOM_TYPE,
        payload: data
    }
}

export const deleteCustomType = (data) => {
    return {
        type: actionTypes.DELETE_CUSTOM_TYPE,
        payload: data
    }
}

export const ecSelectType = (type) => {
    return {
        type: actionTypes.EC_SELECT_TYPE,
        payload: type
    }
}

export const ecDeleteType = (type) => {
    return {
        type: actionTypes.EC_DELETE_TYPE,
        payload: type
    }
}

export const ecAnalyse = (type) => {
    return {
        type: actionTypes.EC_ANALYSE_TYPE,
        payload: type
    }
}

export const ecClearAnalyser = (type) => {
    return {
        type: actionTypes.EC_CLEAR_ANALYSER,
        payload: type
    }
}

export const ecSelectCustomType = (type) => {
    return {
        type: actionTypes.EC_SELECT_CUSTOM_TYPE,
        payload: type
    }
}

export const ecDeleteCustomType = (type) => {
    return {
        type: actionTypes.EC_DELETE_CUSTOM_TYPE,
        payload: type
    }
}