import React, {Fragment} from 'react'

import './css/NavBar.css'


const NavBar = (props) => {
    return (
        <Fragment>
            <nav className='navbar'>
                <header className='navbar-title'>The Evergreen Project</header>
                <ul className='navbar-nav'> { props.children } </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar