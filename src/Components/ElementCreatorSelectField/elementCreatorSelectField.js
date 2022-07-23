import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseType } from '../../Redux/elementCreator/eC-actions'
import './elementCreatorSelectField.css'

const ElementCreatorSelectField = ({category}) => {

    let dynamicTypeList = useSelector(state => state.elementCreator.dynamicTypeList)
   

    const [selectionMode, setSeletionMode] = useState(false)

    const activateSelectionMode = () => {
        setSeletionMode(true)
    }

    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(chooseType(event))
        setSeletionMode(false)
    }

    return (
        <>  
            {!selectionMode ? <button onClick={activateSelectionMode} type='button' className='elCreatorSelectField-addTypeButton'>Add</button> :
            <select name={category} onChange={handleChange} className="elCreatorSelectField-selectField">
                <option value="" selected default hidden>Type</option>
                    {
                        dynamicTypeList.map( type  => {{
                            if(type){
                                return  <option value={type.name}> {type.name}</option>
                            }
                        }})
                    }
            </select>}
        </>
    )
}

export default ElementCreatorSelectField