import { Link } from 'react-router-dom'
import './homeScreen.css'

const HomeScreen = () => {
    return (
        <>
        <div className='home-mega-container'>
            <div className='home-puprle'></div>
            <div className='home-image'></div>
            <div className='home-super-container'>
                <h1 className='home-header'>Poke Analyser</h1>
                <div className='home-link-row'>
                    <Link to={'/pokeAnalyser'} className='home-link-row-box'>
                        <div>
                            <h3>Analyser</h3>
                            <p>Analyse all type combinations</p>
                        </div>
                    </Link>
                    <Link to={'/teamAnalyser'} className='home-link-row-box'>
                        <div>
                            <h3>Team Analyser</h3>
                            <p>Analyse your team composition</p>
                        </div>
                    </Link>
                    <Link to={'/typeCreator'} className='home-link-row-box'>
                        <div>
                            <h3>Creator</h3>
                            <p>Create and analyse your own types</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeScreen

