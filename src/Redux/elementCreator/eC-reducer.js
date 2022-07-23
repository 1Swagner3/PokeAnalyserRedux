import analyseTypes from '../../Components/analyse'
import elementList from '../../Components/elements'
import * as actionTypes from './eC-types'

const INTIAL_STATE = {
    typeList: elementList,
    dynamicTypeList: elementList,
    selectorUnitTypeList: {
        name: '',
        effective: [],
        notEffective: [],
        immunity: []
    },
    customTypeList: [],
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
    dynamicAnalyserTypeList: elementList,
    dynamicCustomTypeList: [],
    analyseResults: {
        effective: [],
        notEffective: [],
        superEffective: [],
        superNotEffective: [],
        immunity: []
    }
}

export const elementCreatorReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.CHOOSE_TYPE:
            let value = action.payload.target.value
            let name = action.payload.target.name
    
            return{
                ...state,
                selectorUnitTypeList: {
                    ...state.selectorUnitTypeList,
                    [name]:[ 
                        ...state.selectorUnitTypeList[name], 
                        value
                        ]
                    },
                dynamicTypeList: state.dynamicTypeList.filter(type => type.name !== value)
                }
        case actionTypes.DELETE_CHOSEN_TYPE:
            let type = action.payload.type
            let category = action.payload.name

            return {
                ...state,
                selectorUnitTypeList:{
                    ...state.selectorUnitTypeList,
                    [category]:state.selectorUnitTypeList[category].filter(el => el !== type)
                },
                dynamicTypeList: [...state.dynamicTypeList, elementList.find(el => el.name === type && !elementList.includes(el.name))]
            }
        case actionTypes.UPDATE_INPUT:
            return {
                ...state,
                selectorUnitTypeList:{
                    ...state.selectorUnitTypeList,
                    name: action.payload
                }
            }
        case actionTypes.CREATE_TYPE:
            let effectiveArr = action.payload.effective.map(el => el.toLowerCase())
            let notEffectiveArr = action.payload.notEffective.map(el => el.toLowerCase())
            let immunityArr = action.payload.immunity.map(el => el.toLowerCase())

            return {
                ...state,
                customTypeList: [
                    ...state.customTypeList,
                    {
                        name: action.payload.name,
                        effective: effectiveArr,
                        notEffective: notEffectiveArr,
                        immunity: immunityArr
                    }
                ],
                dynamicCustomTypeList: [
                    ...state.dynamicCustomTypeList,
                    {
                        name: action.payload.name,
                        effective: effectiveArr,
                        notEffective: notEffectiveArr,
                        immunity: immunityArr
                    }
                ],
            }
        case actionTypes.CLEAR:
            return {
                ...state,
                dynamicTypeList: elementList,
                selectorUnitTypeList: {
                    name: '',
                    effective: [],
                    notEffective: [],
                    immunity: []
                }
            }
        case actionTypes.EDIT_CUSTOM_TYPE:
            return {
                ...state,
                selectorUnitTypeList: {
                    ...action.payload
                },
                customTypeList: state.customTypeList.filter(el => el.name !== action.payload.name),
                dynamicCustomTypeList: state.dynamicCustomTypeList.filter(el => el.name !== action.payload.name)
            }
        case actionTypes.DELETE_CUSTOM_TYPE:
            return{
                ...state,
                customTypeList: state.customTypeList.filter(el => el.name !== action.payload.name),
                dynamicCustomTypeList: state.dynamicCustomTypeList.filter(el => el.name !== action.payload.name)
            }
        case actionTypes.EC_SELECT_TYPE:
            let eventName = action.payload.target.innerHTML
            let eventType = state.typeList.find(el => el.name === eventName)
            let fistTypeOccupation = state.selectedTypes.type1.name
            if (!fistTypeOccupation) {
                return {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type1: {...eventType}
                    },
                    dynamicAnalyserTypeList: state.dynamicAnalyserTypeList.filter(el => el.name !== eventName),
                }
            } else {
                return  {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type2: {...eventType}
                    },
                    dynamicAnalyserTypeList: state.dynamicAnalyserTypeList.filter(el => el.name !== eventName)
                }
            }
        case actionTypes.EC_SELECT_CUSTOM_TYPE:
            let customEventName = action.payload.target.innerHTML
            let customEventType = state.customTypeList.find(el => el.name === customEventName)
            let fistTypeOccupation2 = state.selectedTypes.type1.name
            if (!fistTypeOccupation2) {
                return {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type1: {...customEventType}
                    },
                    dynamicCustomTypeList: state.dynamicCustomTypeList.filter(el => el.name !== customEventName),
                }
            } else {
                return  {
                    ...state,
                    selectedTypes:{
                        ...state.selectedTypes,
                        type2: {...customEventType}
                    },
                    dynamicCustomTypeList: state.dynamicCustomTypeList.filter(el => el.name !== customEventName)
                }
            }
        case actionTypes.EC_DELETE_TYPE:
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
                    dynamicAnalyserTypeList: [...state.dynamicAnalyserTypeList, action.payload]
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
                    dynamicAnalyserTypeList: [...state.dynamicAnalyserTypeList, action.payload]
                }
            }
            case actionTypes.EC_DELETE_CUSTOM_TYPE:
                let customTypeName = action.payload.name
                let customType1Name = state.selectedTypes.type1.name
                let customType2Name = state.selectedTypes.type2.name
                if(customTypeName === customType1Name){
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
                        dynamicCustomTypeList: [...state.dynamicCustomTypeList, action.payload]
                    }
                }
        
                if(customTypeName === customType2Name){
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
                        dynamicCustomTypeList: [...state.dynamicCustomTypeList, action.payload]
                    }
                }
        case actionTypes.EC_ANALYSE_TYPE:
            let results = analyseTypes(state.selectedTypes)
            return {
                ...state,
                analyseResults:{...results}
            }
        case actionTypes.EC_CLEAR_ANALYSER:
            return {
                ...state,
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
                },
                dynamicAnalyserTypeList: elementList,
                dynamicCustomTypeList: [...state.customTypeList],

            }
        default: {
            return state
        }
    }
}

