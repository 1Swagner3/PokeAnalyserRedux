import { useDispatch, useSelector } from 'react-redux'
import './teamAnalyserResults.css'
import teamAnalyse from '../teamAnalyse'
import ResultsTableCards from '../ResultsTableCards/resultsTableCards'
import { useEffect, useState } from 'react'
import { clearAll } from '../../Redux/teamAnalyser/tA-actions'

const TeamAnalyserResults = () => {
    const teamArray = useSelector(state => state.teamAnalyser.team)
    
    let teamAnalyserResults = teamAnalyse(teamArray)
    const dispatch = useDispatch()

    const [showResult, setShowResult] = useState(false)
    const toggleShowResult = () =>{
        if(teamArray.length > 1){
            setShowResult(true)
        }

        if(teamArray.length === 0){
            setShowResult(false)
        }
    }

    useEffect(() => {
        toggleShowResult()
    }, [teamArray])

    const clearPage = () => {
        dispatch(clearAll())
    }

    return (
        <>  
            {showResult && 
                <div>
                    <div className='teamAnalyserResutls-paragraph-section'>
                        <p>The follwing analytic results show you against which Pokémon Type and Attack Type in general your current Team-Composition proves rather resilient and against which it`s rather weak</p>
                        <div className='teamAnalyserResults-paragraph-buttonrow'>
                            <button className='teamAnalyserResults-clearAll-btn' onClick={clearPage}>Clear All</button>
                        </div>
                    </div>
                    <div className='teamAnalyserResults-container'>
                        <ResultsTableCards data={teamAnalyserResults.strongArr} header={'Strong'} />
                        <ResultsTableCards data={teamAnalyserResults.balancedArr} header={'Balanced'} />
                        <ResultsTableCards data={teamAnalyserResults.weakArr} header={'Weak'} />
                    </div>
                </div>}
        </>
    )
}

export default TeamAnalyserResults