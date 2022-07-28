import './banner.css'

const Banner = ({title}) => {
    return (
        <>
        <div className='banner-mega-container'>
            <div className='banner-violet'></div>
            <div className='banner-black'></div>
            <div className='banner-pic'></div>
            <h1 className='banner-title'>{title}</h1>
        </div>
        </>
    )
}

export default Banner