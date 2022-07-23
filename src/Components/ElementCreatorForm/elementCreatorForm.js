
import { useDispatch, useSelector } from 'react-redux'
import {  updateInput } from '../../Redux/elementCreator/eC-actions'
import ElementCreatorSelectionUnit from '../ElementCreatorSelectionUnit/elementCreatorSelectionUnit'
import './elementCreatorForm.css'

const ElementCreatorForm = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(updateInput(event.target.value))
    }

    const data = useSelector(state => state.elementCreator.selectorUnitTypeList) 

    return (
        <>
        <div className='elCreatorForm-super-container'>
            <form id='elementCreatorForm' className='elCreatorForm-form'>
                <div className='elCreatorForm-name-input'> TYPE NAME
                    <input
                    type='text'
                    id='name'
                    name='name'
                    value={data.name || ''}
                    onChange={handleChange}
                    required
                    ></input>
                </div>

                <ElementCreatorSelectionUnit category={'effective'} /> 

                <ElementCreatorSelectionUnit category={'notEffective'} /> 

                <ElementCreatorSelectionUnit category={'immunity'} /> 

            </form>
        </div>
        </>
    )
}

export default ElementCreatorForm