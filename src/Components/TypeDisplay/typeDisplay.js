import { useDispatch } from 'react-redux'
import TypeBox from '../TypeBox/typeBox'
import './typeDisplay.css'

const TypeDisplay = ({selectedType, deleteFunction}) => {

    const dispatch = useDispatch()

    const onDeleteType = () => {
       deleteFunction(selectedType)
    }

    return (
        <>
            <div className='typeDisplay-superContainer'>
                {selectedType.name && <button className='typeDisplay-delete-button' onClick={onDeleteType}><strong>X</strong></button>}
                {selectedType.name ? <div className='typeDisplay-content-container'>
                    <h2>{selectedType.name}</h2>
                    <div className='typeDisplay-content-information'>
                        <div>
                            <p><strong>Effective</strong></p>
                            {selectedType.effective.length > 0  ? <p className='typeDisplay-content-information-items'>
                                {selectedType.effective.map( type =>  <TypeBox type={type} /> )}
                                </p> : <p>None</p>}
                        </div>
                        <div>
                            <p><strong>Not Effective</strong></p>
                            {selectedType.notEffective.length > 0 ? <p className='typeDisplay-content-information-items'>{selectedType.notEffective.map( type =>  <TypeBox type={type} /> )}</p> : <p>None</p>}
                        </div>
                        <div>
                            <p><strong>Immunity</strong></p>
                            {selectedType.immunity.length > 0 ?  <p className='typeDisplay-content-information-items'>{selectedType.immunity.map( type =>  <TypeBox type={type} /> )}</p> : <p>None</p>}
                        </div>
                    </div>
                </div> : <div className='typeDisplay-content-empty'><h3 className='typeDisplay-defaulttext'>No type selected</h3></div>}
            </div>
        </>
    )
}

export default TypeDisplay