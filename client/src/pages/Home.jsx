import React, { Fragment } from 'react'

import { ReactComponent as Temple } from '../components/svg/temple.svg'
import { ReactComponent as About } from '../components/svg/about.svg'
import { ReactComponent as ArrowDown } from '../components/svg/arrow-down.svg'
import Navbar from '../components/NavBar.jsx'
import Hero from '../components/layout/HomeHero.jsx'
import Footer from '../components/Footer.jsx'
import NavItem from '../components/NavItem.jsx'  
import DropdownMenu from '../components/DropdownMenu.jsx'


const Home = () => {
    
    return (
        <Fragment>
            <Navbar>
                <NavItem icon={ <Temple /> } route='/' hasLink={ true }/>
                <NavItem icon={ <About /> } route='/about' hasLink={ true }/>
                <NavItem icon={ <ArrowDown />} hasLink={ false }>
                    <DropdownMenu />
                </NavItem>
            </Navbar>
            <Hero />
            <Footer />
        </Fragment>
    )
}

export default Home