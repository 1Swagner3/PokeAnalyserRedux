
import { useDispatch } from 'react-redux'
import { deleteTeamMember, editTeamMember } from '../../Redux/teamAnalyser/tA-actions'
import './teamDisplayItem.css'

const TeamDisplayItem = ({data, index}) => {
    const dispatch = useDispatch()

    const deleteMember = () => {
        dispatch(deleteTeamMember(index))
    }

    const editMember = () => {
        dispatch(editTeamMember(data))
    }


    return (
        <>
            <div className='teamDisplayItem-container'>
                <div className='teamDisplayItem-deleterow'>
                    <button className='teamDisplayItem-deleteButton' onClick={deleteMember}>X</button>
                </div>
                <h3>{data.name}</h3>
                <div className='teamDisplayItem-buttonrow'>
                    <button className='teamDisplayItem-editButton' onClick={editMember}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default TeamDisplayItem