import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ecAnalyse, ecClearAnalyser, ecDeleteCustomType, ecDeleteType, ecSelectCustomType, ecSelectType } from '../../Redux/elementCreator/eC-actions'
import AnalyserResultsTable from '../AnalyserResultsTable/analyserResultsTable'
import TypeDisplay from '../TypeDisplay/typeDisplay'
import './elementCreatorAnalyser.css'

const ElementCreatorAnalyser = () => {
    const dispatch = useDispatch()
    
    const analyserTypeList = useSelector(state => state.elementCreator.dynamicAnalyserTypeList)
    const selectedType = useSelector(state => state.elementCreator.selectedTypes)
    const analyseResults = useSelector(state => state.elementCreator.analyseResults)
    const customtypeList = useSelector(state => state.elementCreator.dynamicCustomTypeList)
    const typeList = useSelector(state => state.elementCreator.typeList)

    // toggle the analyse button, so that the user can only analyse when two types are selected
    let canAnalyse = true
    const toggleCanAnalyse = (selectedType) =>{
        if(selectedType.type1.name && selectedType.type2.name){
            canAnalyse = false
        }
    }
    toggleCanAnalyse(selectedType)

    const [showResults, setShowResults] = useState(false)


    const selectElement = (event) => {
        event.preventDefault()
        if(!selectedType.type1.name || !selectedType.type2.name){
            dispatch(ecSelectType(event))
        } else {
            return 
        }
    }

    const selectCustomElement = (event) => {
        event.preventDefault()
        if(!selectedType.type1.name || !selectedType.type2.name){
            dispatch(ecSelectCustomType(event))
        } else {
            return 
        }
    }

    const deleteFunction = (type) => {
            let bool = typeList.find(el => el.name === type.name )
            console.log(bool)
            if(bool){
                dispatch(ecDeleteType(type))
            } else{
                dispatch(ecDeleteCustomType(type))
            }
    }

    const onAnalyse = () => {
        dispatch(ecAnalyse())
        setShowResults(true)
    }

    const clearAll = () => {
        dispatch(ecClearAnalyser())
        setShowResults(false)
    }


    return (
       <>
        <div className='eC-analyser-mega-container'>
            <div className=' eC-analyser-super-conatiner'>
                <div className='eC-analyser-typelist-super-container'>
                    <div className='eC-analyser-typelist-container'>
                        <div className='analyser-typelist-header-container'>
                            <h3 className='analyser-typelist-header'>Types</h3>
                        </div>
                        <div className='eC-analyser-typelist-list'>
                            <ul className='analyser-typelist'>
                            {
                                analyserTypeList.map(
                                    type => 
                                            <a onClick={selectElement}  key={type.name}>
                                                <li 
                                                className='analyser-typelist-listitem'
                                                >{type.name}</li>
                                            </a>
                                        )
                            }
                            </ul>
                        </div>
                    </div>
                    <div className='eC-analyser-typelist-container'>
                        <div className='analyser-typelist-header-container'>
                            <h3 className='analyser-typelist-header'>Custom Types</h3>
                        </div>
                        <div className='eC-analyser-typelist-list'>
                            <ul className='analyser-typelist'>
                            {
                                customtypeList.map(
                                    type => 
                                            <a onClick={selectCustomElement}  key={type.name}>
                                                <li 
                                                className='analyser-typelist-listitem'
                                                >{type.name}</li>
                                            </a>
                                        )
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='eC-analyser-content-container'>
                    <div className='eC-analyser-display-container'>
                        <TypeDisplay selectedType={selectedType.type1} deleteFunction={deleteFunction}/>
                        <TypeDisplay selectedType={selectedType.type2} deleteFunction={deleteFunction}/>
                    </div>
                    <br></br>
                    <div className='analyser-button-row'>
                        <button className='analyseButton' onClick={onAnalyse} disabled={canAnalyse}>Analyse</button>
                        <button className='clearButton' onClick={clearAll} >Clear</button>
                    </div>
                    <br></br>
                    {showResults && <AnalyserResultsTable results={analyseResults} selectedType={selectedType}/>}
                </div>
            </div>
        </div>
       </>
    )
}

export default ElementCreatorAnalyser