import ElementCreatorTypeBox from '../ElementCreatorTypeBox/elementCreatorTypeBox'
import './elementCreatorPreviewDataDisplay.css'

const ElementCreatorPreviewDataDisplay = ({title, data}) => {
    return (
        <>
            <div className='elementCreatorPreviewDataDisplay'>
                <p><strong>{title}</strong></p>
                <p className='elCreatorPreviewDataDisplay-data'>{data.map(type => <ElementCreatorTypeBox type={type} />)}</p>
            </div>
        </>
    )
}

export default ElementCreatorPreviewDataDisplay