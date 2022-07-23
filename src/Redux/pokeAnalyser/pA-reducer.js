import analyseTypes from '../../Components/analyse'
import elementList from '../../Components/elements'
import * as actionTypes from './pA-types'

const INTIAL_STATE = {
    list: elementList,
    analyserTypeList: elementList,
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
    analyseResults: {
        effective: [],
        notEffective: [],
        superEffective: [],
        superNotEffective: [],
        immunity: []
    }
}

export const typeAnalyserReducer = (state = INTIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.PA_SELECT_TYPE:
            let name = action.payload.target.innerHTML
            let type = state.list.find(el => el.name === name)
            let fistTypeOccupation = state.selectedTypes.type1.name
            if (!fistTypeOccupation) {
                return {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type1: {...type}
                    },
                    analyserTypeList: state.analyserTypeList.filter(el => el.name !== name)
                }
            } else {
                return  {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type2: {...type}
                    },
                    analyserTypeList: state.analyserTypeList.filter(el => el.name !== name)
                }
            }

        case actionTypes.PA_DELETE_TYPE:
            let typeName = action.payload.name
            let type1Name = state.selectedTypes.type1.name
            let type2Name = state.selectedTypes.type2.name
            if(typeName === type1Name){
                return {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type1:{
                            name: '',
                            effective: [],
                            notEffective: [],
                            immunity: []
                        }
                    },
                    analyserTypeList: [...state.analyserTypeList, action.payload]
                }
            }

            if(typeName === type2Name){
                return {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type2:{
                            name: '',
                            effective: [],
                            notEffective: [],
                            immunity: []
                        }
                    },
                    analyserTypeList: [...state.analyserTypeList, action.payload]
                }
            }

        case actionTypes.PA_ANALYSE_TYPE:
            let results = analyseTypes(state.selectedTypes)
            return {
                ...state,
                analyseResults:{...results}
            }
        case actionTypes.PA_CLEAR_ALL:
            return {
                ...INTIAL_STATE
            }
        default:
            return state
    }
}

export default typeAnalyserReducer