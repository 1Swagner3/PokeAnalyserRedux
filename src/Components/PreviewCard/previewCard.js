import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteType, clearTypeSelection, addToTeam } from '../../Redux/teamAnalyser/tA-actions'
import analyseTypes from '../analyse'
import TypeBox from '../TypeBox/typeBox'
import './previewCard.css'

const PreviewCard = () => {
    
    const selectedType = useSelector(state => state.teamAnalyser.selectedTypes)
    const selectedType1 = selectedType.type1
    const selectedType2 = selectedType.type2

    const teamArray = useSelector(state => state.teamAnalyser.team)

    const dispatch = useDispatch()
    const [showResult, setShowResult] = useState(false)

    const toggleShowResult = () => {
        if(selectedType1.name || selectedType2.name){
            setShowResult(true)
        } else {
            setShowResult(false)
        }
    }

    useEffect(() => {
        toggleShowResult()
    }, [selectedType])

    const deleteType1 = (event) => {
        event.preventDefault()
        if(selectedType1.name){
            dispatch(deleteType(selectedType1))
        }
        setDetail(false)
    }

    const deleteType2 = (event) => {
        event.preventDefault()
        if(selectedType2.name){
            dispatch(deleteType(selectedType2))
        }
        setDetail(false)
    }

    const clearSelection = (event) => {
        event.preventDefault()
        dispatch(clearTypeSelection())
        setDetail(false)
    } 

    const renderName = (type1, type2) =>{
        if(type1.name && type2.name){
            return `${selectedType1.name} / ${selectedType2.name}`
        } else if (!type2.name){
            return selectedType1.name
        } else if (!type1.name){
            return selectedType2.name
        }
    }

    const addTeam = (event) => {
        event.preventDefault()
        const comboName = renderName(selectedType1, selectedType2)
        if(teamArray.length <= 5){
            dispatch(addToTeam({
                name: comboName,
                type1: selectedType1.name,
                type2: selectedType2.name,
                ...analyseSelectedTypesResult
            }))
        }
        setDetail(false)
    }
    let analyseSelectedTypesResult = analyseTypes(selectedType)

    const [detail, setDetail] = useState(false)
    const toggleDetail = () => {
        setDetail(!detail)
    }
    return (
        <>
        <div className='previewCard-super-container'>
            {showResult && <div>
                <div className='previewCard-typeSelector-container'>
                    {selectedType1.name && <div className='previewCard-typeSelector'>
                        <button className='previewCard-typeSelector-deletebutton' onClick={deleteType1}>x</button>
                        <h3>{selectedType1.name}</h3>
                    </div>}
                    { selectedType2.name && <div className='previewCard-typeSelector'>
                        <button className='previewCard-typeSelector-deletebutton' onClick={deleteType2}>x</button>
                        <h3>{selectedType2.name}</h3>
                    </div>}
                </div>
                {detail && <div className='previewCard-result-container'>
                    {analyseSelectedTypesResult.superEffective.length > 0 && <div className='previewCard-result-section'>
                        <p><strong>Very Effective x4</strong></p>
                        <p className='previewCard-result-container-output'>{analyseSelectedTypesResult.superEffective.map( type =>  <TypeBox type={type} /> )}</p>

                    </div>}
                    {analyseSelectedTypesResult.effective.length > 0 && <div className='previewCard-result-section'>
                        <p><strong>Effective x2</strong></p>
                        <p className='previewCard-result-container-output'>{analyseSelectedTypesResult.effective.map( type =>  <TypeBox type={type} /> )}</p>

                    </div>}
                    {analyseSelectedTypesResult.notEffective.length > 0 && <div className='previewCard-result-section'>
                        <p><strong>Not Effective x1/2</strong></p>
                        <p className='previewCard-result-container-output'>{analyseSelectedTypesResult.notEffective.map( type =>  <TypeBox type={type} /> )}</p>

                    </div>}
                    {analyseSelectedTypesResult.superNotEffective.length > 0 && <div className='previewCard-result-section'>
                        <p><strong>Very Uneffective x 1/4</strong></p>
                        <p className='previewCard-result-container-output'>{analyseSelectedTypesResult.superNotEffective.map( type =>  <TypeBox type={type} /> )}</p>
                    </div>}
                    {analyseSelectedTypesResult.immunity.length > 0 && <div className='previewCard-result-section'>
                        <p><strong>Immunity</strong></p>
                        <p className='previewCard-result-container-output'>{analyseSelectedTypesResult.immunity.map( type =>  <TypeBox type={type} /> )}</p>

                    </div>}
                </div>}
                <div className='previewCard-button-section'>
                    <button className='previewCard-caret-button' onClick={toggleDetail}>{!detail ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                    <button className='previewCard-addTeam-button' onClick={addTeam}>Add to Team</button>
                    <button className='previewCard-clear-button' onClick={clearSelection}>Clear</button>
                </div>
            </div>}
            {!showResult && <div className='previewCard-default-header'>
                <h2>Analyser</h2>
            </div>}
        </div>
        </>
    )
}


export default PreviewCard