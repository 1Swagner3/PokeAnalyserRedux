
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { deleteType } from '../../Redux/elementCreator/eC-actions'
import ElementCreatorSelectField from '../ElementCreatorSelectField/elementCreatorSelectField'
import './elementCreatorSelectionUnit.css'

const ElementCreatorSelectionUnit = ({category}) => {

    const dispatch = useDispatch()

    const selectedTypes = useSelector(state => state.elementCreator.selectorUnitTypeList[category])

    const onDelete = (event) => {
        event.preventDefault()
        let type = event.target.id
        dispatch(deleteType(type, category))
    }

    const renderHeader = (category) => {
        if(category === 'notEffective'){
            category = 'not effective'
        }
        return category.toUpperCase()
    }


    return (
        <>
            <div className='elCreatorSelectionUnit-container'> 
                <div className='elCreatorSelectionUnit-head'>
                    {renderHeader(category)} 
                    <ElementCreatorSelectField category={category} />
                </div>
                <hr></hr>
                <div className='elCreatorSelectionUnit-typeDisplay'>
                    {
                        selectedTypes.map(type => {
                            return (
                                <div className='elCreatorSelectionUnit-typeItem'>
                                    {type}
                                    <button onClick={onDelete} type="button" id={type} className='elCreatorSelectionUnit-deleteButton'><FontAwesomeIcon icon={faTrash} /></button>
                                </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ElementCreatorSelectionUnit