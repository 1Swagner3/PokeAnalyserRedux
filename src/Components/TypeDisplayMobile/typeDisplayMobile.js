import './typeDisplayMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import TypeBox from '../TypeBox/typeBox';
import { useState } from 'react';

const TypeDisplayMobile = ({selectedType, deleteFunction}) => {

    const [detail, setDetail] = useState(false)
    const toggleDetail = () => {
        setDetail(!detail)
    }

    const onDeleteType = () => {
        deleteFunction(selectedType)
        setDetail(false)
    }

    return (
        <>
        {selectedType.name ? <div className='typeDisplayMobile-super-container'>
            <div className='typeDiaplayMobile-unit-container'>
                <div className='typeDisplayMobile-name-unit'>
                    <button className='typeDisplayMobile-delete-button' onClick={onDeleteType}><FontAwesomeIcon icon={faTrash} /></button>
                    {selectedType.name}
                </div>
                <button className='typeDisplayMobile-caret-button' onClick={toggleDetail}>{!detail ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp} />}</button>
            </div>
            {detail && <div className='typeDisplayMobile-info-container'>
                <div >
                    <p><strong>Effective</strong></p>
                    {selectedType.effective.length > 0  ? <p className='typeDisplayMobile-info-subcontainer'>
                        {selectedType.effective.map( type =>  <TypeBox type={type} /> )}
                        </p> : <p>None</p>}
                </div>
                <div >
                    <p><strong>Not Effective</strong></p>
                    {selectedType.notEffective.length > 0 ? <p className='typeDisplayMobile-info-subcontainer'>
                        {selectedType.notEffective.map( type =>  <TypeBox type={type} /> )}
                        </p> : <p>None</p>}
                </div>
                <div >
                    <p><strong>Immunity</strong></p>
                    {selectedType.immunity.length > 0 ?  <p className='typeDisplayMobile-info-subcontainer'>
                        {selectedType.immunity.map( type =>  <TypeBox type={type} /> )}
                        </p> : <p>None</p>}
                </div>
            </div>}
        </div> :
        <div className='typeDisplayMobile-super-container'>
            <div><h3 className='typeDisplayMobile-default-text'>No type selected</h3></div>
        </div>}
        </>
    )
}

export default TypeDisplayMobile