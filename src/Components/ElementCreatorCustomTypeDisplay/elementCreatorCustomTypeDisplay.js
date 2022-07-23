import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomType, editCustomType } from '../../Redux/elementCreator/eC-actions'
import './elementCreatorCustomTypeDisplay.css'

const ElementCreatorCustomTypeDisplay = () => {

    const dispatch = useDispatch()

    const customTypeList = useSelector(state => state.elementCreator.customTypeList)

    const onEdit = (event) => {
        event.preventDefault()
        dispatch(editCustomType(customTypeList.find(el => el.name === event.target.name)))
    }

    const onDelete = (event) => {
        event.preventDefault()
        dispatch(deleteCustomType(customTypeList.find(el => el.name === event.target.name)))
    }
    return (
        <>
            <div className='elCreatorCustomType-container'>
                <h4>Custom Types</h4>
                <ul className='elCreatorCustomType-list'>
                    {
                        customTypeList.map(type => {
                            return <li key={type} className="elCreatorCustomType-list-item">
                                        <div className='elCreatorCustomType-list-item-container'>
                                            <p><strong>{type.name}</strong></p>
                                            <div className='elCreatorCustomType-lit-item-buttonRow'>
                                                <button type='button' name={type.name} onClick={onEdit} className="btn-success">Edit</button>
                                                <button type='button' name={type.name} onClick={onDelete} className="btn-delete">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default ElementCreatorCustomTypeDisplay