import TypeBox from '../TypeBox/typeBox'
import './resultsTableCards.css'

const ResultsTableCards = ({data, header}) => {
    return (
        <>
        <div className='resultsTableCrad-container'>
            <div className='resultsTableCard-header'>
                <h3>{header}</h3>
            </div>
            <div className='resultsTableCard-content'>
                <p className='resultsTableCard-output'>{data.map( type =>  <TypeBox type={type} /> )}</p>
            </div>
        </div>
        </>
    )
}

export default ResultsTableCards