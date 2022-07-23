import { useDispatch, useSelector } from 'react-redux'
import { clear, createType } from '../../Redux/elementCreator/eC-actions'
import ElementCreatorCustomTypeDisplay from '../ElementCreatorCustomTypeDisplay/elementCreatorCustomTypeDisplay'
import ElementCreatorPreviewDataDisplay from '../ElementCreatorPreviewDataDisplay/elementCreatorPreviewDataDisplay'
import './elementCreatorPreview.css'

const ElementCreatorPreview = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.elementCreator.selectorUnitTypeList)

    const onCreate = (event) => {
        event.preventDefault()
        dispatch(createType(data))
        dispatch(clear())
    }

    const onClear = () => {
        dispatch(clear())
    }

    return (
        <>
            <div className='elCreator-preview-superContainer'>
                <div className='elCreatorPreview-container'>
                    <div className='elCreatorPreview-name'>
                        <p><strong>{data.name  || 'Name'}</strong></p>
                    </div>
                    <div className='elCreatorPreview-dataDisplay'>
                        <ElementCreatorPreviewDataDisplay title={'Effective'} data={data.effective} />
                        <ElementCreatorPreviewDataDisplay title={'Not Effective'} data={data.notEffective} />
                        <ElementCreatorPreviewDataDisplay title={'Immunity'} data={data.immunity} />
                    </div>
                    <div className='elCreatorPreview-buttonRow'>
                        <button type='button' onClick={onCreate} className="btn-success">Create</button>
                        <button type='button' onClick={onClear} className="btn-delete">Clear</button>
                    </div>
                </div>
                <br></br>
                <div className='elCreatorPreview-customTypeDisplay'>
                    <ElementCreatorCustomTypeDisplay />
                </div>
            </div>
        </>
    )
}

export default ElementCreatorPreview