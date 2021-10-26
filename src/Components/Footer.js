import React, {useState} from 'react'
import picture from '../Assets/picture.png'
import '../style/footer.css'

const Footer = () => {

    // Submenu states for the cities
    const [showSubList, setShowSubList] = useState({
        DenHaag: false,
        Amsterdam: false,
        Rotterdam: false,
        Eindhoven: false,
    })

    // Show-hide submenus
    const handleClick = e => {
        setShowSubList({...showSubList, [e.target.id]: !showSubList[e.target.id]})
    }

    return (
        <footer className='footer'>
            <h1 className='footer__title'>Useful links</h1>
            <div className='footer__wrapper'>            
                <div className='footer__group'>
                    <img className='footer__pic' src={picture} alt=''/>
                    <h2 className='footer__subtitle'>ReactJS Development</h2>
                    <p className='footer__desc'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently...</p>
                    <button className='footer__button'>Read more<span className='footer__arrow footer__arrow--more'></span></button>
                </div>
                <div className='footer__group'>
                    <h6 className='footer__label'>Agencies</h6>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>Angi Studio Design</li>
                        <li className='footer__list-item'>Angi Studio Development</li>
                    </ul>
                    <h6 className='footer__label'>Development</h6>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>Stackoverflow</li>
                        <li className='footer__list-item'>CSS Tricks</li>
                        <li className='footer__list-item'>Stackexchanges</li>
                        <li className='footer__list-item'>Devhints.io</li>
                        <li className='footer__list-item'>Reddit</li>
                    </ul>
                </div>
                <div className='footer__group'>
                    <h6 className='footer__label'>Conferenties</h6>
                    <ul className='footer__list'>
                        <li id='DenHaag' className='footer__list-item' onClick={handleClick}>Den Haag<span className={showSubList.DenHaag ? 'footer__arrow footer__arrow--open active' : 'footer__arrow footer__arrow--open'}></span></li>
                            <ul className={showSubList.DenHaag ? 'footer__list footer__list--sub active' : 'footer__list footer__list--sub'}>
                                <li className='footer__list-item footer__list-item--sub'>DevOps 41</li>
                                <li className='footer__list-item footer__list-item--sub'>UxDf</li>
                                <li className='footer__list-item footer__list-item--sub'>Elm Europe</li>
                                <li className='footer__list-item footer__list-item--sub'>NG_MY</li>
                            </ul>                    
                        <li id='Amsterdam' className='footer__list-item' onClick={handleClick}>Amsterdam<span className={showSubList.Amsterdam ? 'footer__arrow footer__arrow--open active' : 'footer__arrow footer__arrow--open'}></span></li>
                            <ul className={showSubList.Amsterdam ? 'footer__list footer__list--sub active' : 'footer__list footer__list--sub'}>
                                <li className='footer__list-item footer__list-item--sub'>DevOps 41</li>
                                <li className='footer__list-item footer__list-item--sub'>UxDf</li>
                                <li className='footer__list-item footer__list-item--sub'>Elm Europe</li>
                                <li className='footer__list-item footer__list-item--sub'>NG_MY</li>
                            </ul>
                        <li id='Rotterdam' className='footer__list-item' onClick={handleClick}>Rotterdam<span className={showSubList.Rotterdam ? 'footer__arrow footer__arrow--open active' : 'footer__arrow footer__arrow--open'}></span></li>
                            <ul className={showSubList.Rotterdam ? 'footer__list footer__list--sub active' : 'footer__list footer__list--sub'}>
                                <li className='footer__list-item footer__list-item--sub'>DevOps 41</li>
                                <li className='footer__list-item footer__list-item--sub'>UxDf</li>
                                <li className='footer__list-item footer__list-item--sub'>Elm Europe</li>
                                <li className='footer__list-item footer__list-item--sub'>NG_MY</li>
                            </ul>
                        <li id='Eindhoven' className='footer__list-item' onClick={handleClick}>Eindhoven<span className={showSubList.Eindhoven ? 'footer__arrow footer__arrow--open active' : 'footer__arrow footer__arrow--open'}></span></li>
                            <ul className={showSubList.Eindhoven ? 'footer__list footer__list--sub active' : 'footer__list footer__list--sub'}>
                                <li className='footer__list-item footer__list-item--sub'>DevOps 41</li>
                                <li className='footer__list-item footer__list-item--sub'>UxDf</li>
                                <li className='footer__list-item footer__list-item--sub'>Elm Europe</li>
                                <li className='footer__list-item footer__list-item--sub'>NG_MY</li>
                            </ul>
                    </ul>            
                </div>
            </div>
        </footer>
    )
}

export default Footer