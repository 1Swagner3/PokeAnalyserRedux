import * as actionTypes from './tA-types.js'

export const selectElement = (type) => {
    return {
        type: actionTypes.SELECT_ELEMENT,
        payload: type
    }
}

export const deleteType = (type) => {
    return {
        type: actionTypes.DELETE_TYPE,
        payload: type
    }
}

export const clearTypeSelection = () => {
    return{
        type: actionTypes.CLEAR_TYPESELECTION
    }
}

export const addToTeam = (typeCombination) => {
    return {
        type: actionTypes.ADD_TO_TEAM,
        payload: typeCombination
    }
}

export const deleteTeamMember = (teamMember) => {
    return {
        type: actionTypes.DELETE_TEAM_MEMBER,
        payload: teamMember
    }
}

export const editTeamMember = (teamMember) => {
    return {
        type: actionTypes.EDIT_TEAM_MEMBER,
        payload: teamMember
    }
}

export const clearAll = () => {
    return {
        type: actionTypes.CLEAR_ALL
    }
}