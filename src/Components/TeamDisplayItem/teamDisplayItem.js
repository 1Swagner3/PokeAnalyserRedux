
import { useDispatch } from 'react-redux'
import { deleteTeamMember, editTeamMember } from '../../Redux/teamAnalyser/tA-actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
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
                    <button className='teamDisplayItem-deleteButton' onClick={deleteMember}><FontAwesomeIcon icon={faTrash} /> </button>
                </div>
                <h3 className='teamDisplayItem-name-section'>{data.name}</h3>
                <div className='teamDisplayItem-buttonrow'>
                    <button className='teamDisplayItem-editButton' onClick={editMember}> <FontAwesomeIcon icon={faPen} /> </button>
                </div>
            </div>
        </>
    )
}

export default TeamDisplayItem