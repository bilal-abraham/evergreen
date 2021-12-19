import React, { Fragment } from 'react'

import Logo from '../images/cemetery.png'
import '../css/HomeHero.css'


const HomeHero = () => {
    return (
        <Fragment>
            <section className='home-hero-main'>
                <br /><br />
                <img className='home-hero-img' src={Logo} alt='cemetery-logo'/>
                <br /><br />
                <header className='home-hero-header'>The Evergreen Cemetery</header>
                <br /><br />
                <p className='home-hero-subtext'>Subtext, Subtext, Subtext</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
        </Fragment>
    )
}

export default HomeHero