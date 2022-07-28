import ResultsTableCards from '../ResultsTableCards/resultsTableCards'
import './analyserResultsTable.css'

const AnalyserResultsTable = ({results, selectedType}) => {
    let showHeader = false
    const toggleHeader = (selectedType) => {
        if(selectedType.type1.name && selectedType.type2.name){
            showHeader = true
        }
    }
    toggleHeader(selectedType)
    return (
        <>
            <div className='analyserResultsTable-superContainer'>
                <div className='analyserResutlsTable-header'>
                     <h1>Results for {selectedType.type1.name} & {selectedType.type2.name}</h1>
                </div>
                <div className='analyserResultsTable-content'>
                    {results.superEffective.length > 0 && <ResultsTableCards data={results.superEffective} header='Very Effective x4'/>}
                    {results.effective.length > 0 &&<ResultsTableCards data={results.effective} header='Effective x2'/>}
                    {results.notEffective.length > 0 &&<ResultsTableCards data={results.notEffective} header='Not Effective x1/2'/>}
                    {results.superNotEffective.length > 0 &&<ResultsTableCards data={results.superNotEffective} header='Very Uneffective x1/4'/>}
                    {results.immunity.length > 0 &&<ResultsTableCards data={results.immunity} header='Immunity'/>}
                </div>
            </div>
        </>
    )
}

export default AnalyserResultsTable