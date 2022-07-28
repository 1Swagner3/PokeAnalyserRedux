import './pokeAnalyser.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import TypeDisplay from '../TypeDisplay/typeDisplay'
import AnalyserResultsTable from '../AnalyserResultsTable/analyserResultsTable'
import { paAnalyseType, paClearAll, paDeleteType, paSelectType } from '../../Redux/pokeAnalyser/pA-actions'
import Banner from '../Banner/banner'
import TypeDisplayMobile from '../TypeDisplayMobile/typeDisplayMobile'


const PokeAnalyser = () => {
    
    const dispatch = useDispatch()
    
    const analyserTypeList = useSelector(state => state.typeAnalyser.analyserTypeList)
    const selectedType = useSelector(state => state.typeAnalyser.selectedTypes)
    const analyseResults = useSelector(state => state.typeAnalyser.analyseResults)

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
            dispatch(paSelectType(event))
        } else {
            return 
        }
    }

    const onAnalyse = () => {
        dispatch(paAnalyseType())
        setShowResults(true)
    }

    const clearAll = () => {
        dispatch(paClearAll())
        setShowResults(false)
        canAnalyse = true
    }

    const deleteFunction = (type) => {
        dispatch(paDeleteType(type))
    }

    //check window size to set components to mobile
    const [mobile, setMobile] = useState(false)
    const checkWidth = () => {
        let width = window.innerWidth;
        if(width > 550) {
            setMobile(false)
        }     
        if(width < 550){
            setMobile(true)
        }
    }
    
    useEffect(() => {
        checkWidth()
        window.addEventListener("resize", checkWidth)
    })

    return (
       <>
       <Banner title='Analyser' />
        <div className='analyser-mega-container'>
            <div className='analyser-super-conatiner'>
                <div className='analyser-flex-container'>
                    <div className='analyser-typelist-container'>
                        <div className='analyser-typelist-header-container'>
                            <h3 className='analyser-typelist-header'>Select Type</h3>
                        </div>
                        <div className='analyser-typelist-list'>
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
                    <div className='analyser-content-container'>
                        {!mobile ? <div className='analyser-display-container'>
                            <TypeDisplay selectedType={selectedType.type1} deleteFunction={deleteFunction}/>
                            <TypeDisplay selectedType={selectedType.type2} deleteFunction={deleteFunction}/>
                        </div> :
                        <div className='analyser-display-container-mobile'>
                            <TypeDisplayMobile selectedType={selectedType.type1} deleteFunction={deleteFunction} />
                            <TypeDisplayMobile selectedType={selectedType.type2} deleteFunction={deleteFunction}/>
                        </div>}
                        <br></br>
                        <div className='analyser-button-row'>
                            <button className='analyseButton' onClick={onAnalyse} disabled={canAnalyse}>Analyse</button>
                            <button className='clearButton' onClick={clearAll} >Clear</button>
                        </div>
                        <br></br>
                        <div className='analyser-results-table-container'>
                            {showResults && <AnalyserResultsTable results={analyseResults} selectedType={selectedType}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default PokeAnalyser