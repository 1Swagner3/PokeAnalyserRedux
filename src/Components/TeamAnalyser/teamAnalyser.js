import { useDispatch, useSelector } from 'react-redux'
import { clearAll, selectElement } from '../../Redux/teamAnalyser/tA-actions'
import Banner from '../Banner/banner'
import PreviewCard from '../PreviewCard/previewCard'
import TeamAnalyserResults from '../TeamAnalyserResults/teamAnalyserResults'
import TeamDisplay from '../TeamDisplay/teamDisplay'
import './teamAnalyser.css'


const TeamAnalyser = () => {
    const typeList = useSelector(state => state.teamAnalyser.typeList)
    const dispatch = useDispatch()

    const selectType = (event) => {
        event.preventDefault()
        let ev = event.target.innerHTML
        
        let type = typeList.find(
            type => type.name === ev
            )
        dispatch(selectElement(type))
    }


    return (
        <>
        <Banner title='Team Analyser' />
        <div className='teamAnalyser-mega-container'>
            <div className='teamAnalyser-ultra-container'>  
                <div className='teamAnalyser-super-container'>   
                    <div className='teamAnalyser-typeList-container'>
                        <div className='teamAnalyser-typeList-header-container'>
                            <h3> Type Select </h3>
                        </div>
                        <div className='teamAnalyser-typeList-list-container'>
                            <ul className='teamAnalyser-typeList-list'>
                                {
                                    typeList.map(
                                        type => <a key={type.name} onClick={selectType}>
                                            <li className='teamAnalyser-typeList-listitem'>{type.name}</li>
                                        </a>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='teamAnalyser-previewCard-container'>
                        <PreviewCard />
                    </div>
                </div>
                <div className='teamAnalyser-teamDisplay-container'>
                    <TeamDisplay />
                    <div>
                        <TeamAnalyserResults />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TeamAnalyser