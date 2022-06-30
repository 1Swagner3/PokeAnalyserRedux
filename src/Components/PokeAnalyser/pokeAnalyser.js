import './pokeAnalyser.css'
import  elementList from '../elements'
import { useSelector, useDispatch } from 'react-redux'
import { loadElementList } from '../../Redux/pokeAnalyser/pA-actions' 
import { useEffect } from 'react'
import e from 'express'

const PokeAnalyser = () => {

    const typeList = useSelector((state) => state.elementList.list)
    const dispatch = useDispatch()
    const selectedTypesArray = []

    const fetchTypeList = () => {
        try {
            dispatch(loadElementList(elementList))
        } catch (error){
            console.log(error.message)
        }
        
    }

    useEffect (()=> {
        fetchTypeList()
    }, [])

    const selectElement = (type) => {
        if(selectedTypesArray.length <= 1){
            selectedTypesArray.push(type)
        } else {
            return 
        }
        console.log(selectedTypesArray)
    }


    return (
       <>
        <div className='analyser-mega-container'>
            <h1>Analyser</h1>
            <div className='analyser-typelist-container'>
                <ul className='analyser-typelist'>
                   {
                    typeList.map(
                        type => 
                                <li 
                                className='analyser-typelist-listitem'
                                onClick={selectElement(type)}
                                >{type.name}</li>
                            )
                   }
                </ul>
            </div>
        </div>
       </>
    )
}

export default PokeAnalyser