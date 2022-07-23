import Banner from '../Banner/banner'
import ElementCreatorAnalyser from '../ElementCreatorAnalyser/elementCreatorAnalyser'
import ElementCreatorForm from '../ElementCreatorForm/elementCreatorForm'
import ElementCreatorPreview from '../ElementCreatorPreview/elementCreatorPreview'
import PokeAnalyser from '../PokeAnalyser/pokeAnalyser'
import './elementCreator.css'

const ElementCreator = () => {
    return (
        <>
        <Banner title='Type Creator' />
        <div className='elCreator-mega-container'>
            <div className='elCreator-super-container'>
                <div className='elCreator-form-container'>
                    <ElementCreatorForm />
                </div>
                <div className='elCreator-preview-container'>
                    <ElementCreatorPreview />
                </div>
            </div>
            <div className='elCreator-analyser-supercontainer'>
                <ElementCreatorAnalyser />
            </div>
        </div>
        </>

    )
}

export default ElementCreator