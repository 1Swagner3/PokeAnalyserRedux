import * as actionTypes from './tA-types'
import elementList from '../../Components/elements'

const INTIAL_STATE = {
    typeList: elementList,
    selectedTypes: {
        type1: {
            name: '',
            effective: [],
            notEffective: [],
            immunity: []
        }, 
        type2: {
            name: '',
            effective: [],
            notEffective: [],
            immunity: []
        }
    },
    team: []
}

export const teamAnalyserReducer = (state = INTIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.SELECT_ELEMENT:
            if(!state.selectedTypes.type1.name || !state.selectedTypes.type2.name){
                return {
                    ...state,
                    typeList: state.typeList.filter(
                        type => type.name !== action.payload.name
                    ),
                    selectedTypes: !state.selectedTypes.type1.name ? {...state.selectedTypes, type1: action.payload} : {...state.selectedTypes, type2: action.payload}
                }
            } else {
                return state
            }
        case actionTypes.DELETE_TYPE:
            if(state.selectedTypes.type1.name === action.payload.name){
                return {
                    ...state,
                    typeList: [...state.typeList, action.payload],
                    selectedTypes: {
                        ...state.selectedTypes,
                        type1: {
                            name: '',
                            effective: [],
                            notEffective: [],
                            immunity: []
                        }
                    }
                }
            }

            if(state.selectedTypes.type2.name === action.payload.name){
                return {
                    ...state,
                    typeList: [...state.typeList, action.payload],
                    selectedTypes: {
                        ...state.selectedTypes,
                        type2: {
                            name: '',
                            effective: [],
                            notEffective: [],
                            immunity: []
                        }
                    }
                }
            }
        case actionTypes.CLEAR_TYPESELECTION:
            return {
                ...state,
                typeList: elementList,
                selectedTypes: {
                    type1: {
                        name: '',
                        effective: [],
                        notEffective: [],
                        immunity: []
                    }, 
                    type2: {
                        name: '',
                        effective: [],
                        notEffective: [],
                        immunity: []
                    }
                },
            }
        case actionTypes.ADD_TO_TEAM:
            return {
                ...state,
                typeList: elementList,
                selectedTypes: {
                    type1: {
                        name: '',
                        effective: [],
                        notEffective: [],
                        immunity: []
                    }, 
                    type2: {
                        name: '',
                        effective: [],
                        notEffective: [],
                        immunity: []
                    }
                },
                team: [...state.team, action.payload]
            }
        case actionTypes.DELETE_TEAM_MEMBER:
            return {
                ...state,
                team: state.team.filter((el, index) => index !== action.payload) 
            }
        case actionTypes.EDIT_TEAM_MEMBER:
            return {
                ...state,
                typeList: elementList.filter(el => el.name !== action.payload.type1 && el.name !== action.payload.type2),
                selectedTypes: {
                    type1: action.payload.type1 ? {...elementList.find(el => el.name === action.payload.type1)} : {name: '', effective: [], notEffective: [],immunity: []},
                    type2: action.payload.type2 ? {...elementList.find(el => el.name === action.payload.type2)} : {name: '', effective: [], notEffective: [],immunity: []},
                },
                team: state.team.filter(el => el.name !== action.payload.name)
            }
        case actionTypes.CLEAR_ALL:
            return {
                ...INTIAL_STATE
            }
        default:
            return state
    }
}

