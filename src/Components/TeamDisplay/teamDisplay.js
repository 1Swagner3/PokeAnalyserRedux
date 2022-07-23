import { useSelector } from 'react-redux'
import TeamDisplayItem from '../TeamDisplayItem/teamDisplayItem'
import './teamDisplay.css'

const TeamDisplay = () => {
    const teamArray = useSelector(state => state.teamAnalyser.team)

    return (
        <>
            <div className='teamDisplay-container'>
                {
                    teamArray.map((team, index) => <TeamDisplayItem data={team} index={index} key={index}/>)
                }
            </div>
        </>

    )
}

export default TeamDisplay