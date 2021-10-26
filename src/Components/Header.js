import React from 'react'
import '../style/header.css'

const Header = () => {

    return (
        <header className='header'>
            <p className='header__company'>angi studio</p>
            <h1 className='header__title'>Job application</h1>
            <p className='header__desc'>This to-do list contains the tasks I need to complete so I can apply to a job well prepared.</p>
        </header>
    )
}

export default Header